import { ContactFormDto } from './shared/dtos/contact-form.dto';
import { MailerService } from '@nest-modules/mailer';
import { Injectable, Inject } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { IGetUserAuthInfoRequest } from './shared/user-request.interface';
import { throwError } from './shared/throw-error.utils';
import normalize from './shared/normalize.utils';
import { join } from 'path';

@Injectable()
export class AppService {
  constructor(
    private readonly mailerService: MailerService,
    @Inject(REQUEST) private readonly request: IGetUserAuthInfoRequest
  ) {}

  async searchFromJson(keyword: string) {
    keyword = normalize(keyword.trim());
    const result = [];
    const regex = new RegExp(keyword.toLowerCase(), 'i');
    try {
      const searchIndex = require(join(__dirname, '..', 'public', 'index.json'));
      searchIndex.forEach(page => {
        if (normalize(page.content.content).search(regex) > -1 || normalize(page.content.title).search(regex) > -1) {
          result.push({
            url: page.url.replace(process.env.BASE_URL, ''),
            title: page.content.title,
            description: page.content.content
          });
        }
      });
    } catch (error) {
      console.error('Index.json not found! please generate the file!');
    }

    return result;
  }

  async sendFormToAdmin(contactForm: ContactFormDto) {
    const reset_password = process.env.RESET_PASSWORD_EXPIRATION || '24h';
    const browser_name = this.request.headers['user-agent'] ?? 'Unkown Device';
    const ip = this.request.ip ?? 'Unknow Ip';
    const hostname = this.request.hostname;

    let sendTo = 'mohamedmontassar.laribi@esprit.tn';
    switch (contactForm.service.toLocaleLowerCase()) {
      case 'autre':
        sendTo = 'contact@esprit.tn';
        break;
      case 'rdi':
        sendTo = 'faouzi.kamoun@esprit.tn';
        break;
      case 'prepa':
        sendTo = 'yassin.amri@esprit.tn';
        break;
      case 'admission':
        sendTo = 'reclamation.admission2021@esprit.tn';
        break;
      default:
        break;
    }
    try {
      return await this.mailerService.sendMail({
        to: sendTo,
        from: '"Esprit Contact " <website@esprit.tn>',
        subject: '[Formulaire de Contact] ' + contactForm.name + ' ' + Date.now().toString(),
        template: 'contact', // The `.pug` or `.hbs` extension is appended automatically.
        context: {
          // Data to be sent to template engine.
          name: contactForm.name,
          email: contactForm.email,
          number: contactForm.number,
          subject: contactForm.subject,
          message: contactForm.message,
          ip,
          browser_name,
          reset_password,
          support_email: 'contact@esprit.tn'
        }
      });
    } catch (error) {
      throwError({ Email: error.message }, 'An error occured while sending contact mail');
    }
  }
}
