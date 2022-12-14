import { NestExpressApplication, ExpressAdapter } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ClassSerializerInterceptor } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import * as rateLimit from 'express-rate-limit';
import * as helmet from 'helmet';
import { join } from 'path';
import * as favicon from 'serve-favicon';
import { ValidationPipe } from './shared/pipes/validation.pipe';
import { RolesGuard } from './guards/roles.guard';
import { AppModule } from './app.module';
import * as fs from 'fs';
import * as http from 'http2';
import * as https from 'https';
import * as express from 'express';
import * as compression from 'compression';
import * as puppeteer from 'puppeteer';
import { ssr } from './ssr';

async function bootstrap() {
  const appOptions = {
    key: fs.readFileSync(join(__dirname, '..', 'certdev', 'cert.key')),
    cert: fs.readFileSync(join(__dirname, '..', 'certdev', 'cert.crt'))
  };

  const server = express();
  // const app = await NestFactory.create<NestExpressApplication>(AppModule, new ExpressAdapter(server));
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });
  app.setGlobalPrefix('api');

  const options = new DocumentBuilder()
    .setTitle('Esprit back-end')
    .setDescription('Back-end for Esprit website')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/docs', app, document);
  app.use(
    compression(),
    helmet(),
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 10000 // limit each IP to 100 requests per windowMs
    }),
    favicon(join(__dirname, '..', 'public', 'favicon.ico'))
  );
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads/',
    extensions: ['jpg', 'jpeg', 'png', 'pdf', 'doc', 'docx']
  });
  app.useStaticAssets(join(__dirname, '..', 'public'), { dotfiles: 'allow' });
  app.useGlobalInterceptors(new ClassSerializerInterceptor(new Reflector()));
  app.useGlobalGuards(new RolesGuard(new Reflector()));
  app.useGlobalPipes(new ValidationPipe());
  app.use(async (req, res, next) => {
    const userAgent = req.headers['user-agent'];
    const prerender = /bot|googlebot|Chrome-Lighthouse|DuckDuckBot|EspritBot|ia_archiver|bingbot|yandex|baiduspider|Facebot|facebookexternalhit|facebookexternalhit\/1.1|twitterbot|rogerbot|linkedinbot|embedly|quora link preview|showyoubot|outbrain|pinterest|slackbot|vkShare|W3C_Validator/i.test(
      userAgent
    );
    const exclude = ['/api/', '/uploads/', '/admin/', '/static/', '.xml', '.ico', '.txt', '.json'];
    if (req.originalUrl && prerender && !new RegExp(exclude.join('|')).test(req.originalUrl)) {
      const { html, status, content, title } = await ssr(req.protocol + '://' + req.get('host') + req.originalUrl);
      if (userAgent === 'EspritBot') {
        return res.status(status).json({ title, content });
      }
      return res.status(status).send(html);
    } else {
      next();
    }
  });

  // app.use((req, res, next) => {
  //   console.log('start ' + req.protocol);
  //   if (!req.secure) {
  //     console.log('redirect to https');
  //     return res.redirect(301, ['https://', req.headers.host, req.url].join(''));
  //   }
  //   next();
  // });
  // app.use((req, res, next) => {
  //   let newHost = req.headers.host;
  //   console.log('redirect to non-www');
  //   if (req.headers.host.slice(0, 4) === 'www.') {
  //     newHost = req.headers.host.slice(4);
  //     console.log(newHost);
  //   }
  //   if (req.headers.host.slice(0, 4) === 'www.') {
  //     return res.redirect(301, ['https://', newHost, req.url].join(''));
  //   }
  //   next();
  // });
  // app.init();
  // http.createServer(server).listen(process.env.PORT || 3000);

  // https.createServer(appOptions, server).listen(process.env.PORT_HTTPS || 3001);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();