import { AppService } from './app.service';
import { ContactFormDto } from './shared/dtos/contact-form.dto';
import { PressService } from './modules/press/press.service';
import { EventService } from './modules/events/event.service';
import { EspritIngenieurService } from './modules/EspritIngenieur/EspritIngenieur.service';
import { ResultatCamerounService } from './modules/ResultatCameroun/ResultatCameroun.service';
import { PartnershipService } from './modules/partnerships/partnership.service';
import { UnitService } from './modules/unit/unit.service';
import { RdiService } from './modules/rdi/rdi.service';
import { Get, Controller, Query, Post, Body, Res } from '@nestjs/common';
import { ClubService } from './modules/clubs/club.service';
import { UserService } from './modules/users/user.service';
import e = require('express');
import { ApiBody, ApiExcludeEndpoint } from '@nestjs/swagger';
import { clearCache } from './ssr';

@Controller()
export class AppController {
  constructor(
    private readonly clubService: ClubService,
    private readonly rdiService: RdiService,
    private readonly unitService: UnitService,
    private readonly partnershipService: PartnershipService,
    private readonly eventService: EventService,
    private readonly pressService: PressService,
    private readonly EspritIngenieurService: EspritIngenieurService,
    private readonly ResultatCamerounService: ResultatCamerounService,
    private readonly userService: UserService,
    private readonly appService: AppService
  ) {}
  @Get('search')
  async search(@Query() keyword): Promise<any> {
    const internalIndex = await this.appService.searchFromJson(keyword.keyword);
    let clubs = await this.clubService.search(keyword.keyword);
    clubs = this.appendUrl(clubs, '/vie-etudiante/vie-campus/clubs');
    let rdis = await this.rdiService.search(keyword.keyword);
    rdis = this.appendUrl(rdis, '/rdi/les-equipes-rdi');
    let units = await this.unitService.search(keyword.keyword);
    units = this.appendUrl(units, '/formation/esprit-ingenieur/specialites-et-options');
    let partnerships = await this.partnershipService.search(keyword.keyword);
    partnerships = this.appendUrl(partnerships, '/international/partenariats');
    let events = await this.eventService.search(keyword.keyword);
    events = this.appendUrl(events, '/rdi/les-equipes-rdi', true);
    let presses = await this.pressService.search(keyword.keyword);
    presses = this.appendUrl(presses, '/esprit/salle-de-presse');
    let EspritIngenieurs = await this.EspritIngenieurService.search(keyword.keyword);
    EspritIngenieurs = this.appendUrl(EspritIngenieurs, './admission/esprit-ingenieur');
    let ResultatCamerouns= await this.ResultatCamerounService.search(keyword.keyword);
    ResultatCamerouns= this.appendUrl(ResultatCamerouns,'./admission/ResultatCameroun');
    const result = Array.prototype.concat(
      await this.userService.populateUsers(clubs),
      await this.userService.populateUsers(rdis),
      await this.userService.populateUsers(units),
      await this.userService.populateUsers(partnerships),
      await this.userService.populateUsers(events),
      await this.userService.populateUsers(presses),
      await this.userService.populateUsers(EspritIngenieurs),
      await this.userService.populateUsers(ResultatCamerouns),
      internalIndex
    );
    return result;
  }

  appendUrl(objects, myUrl, isEvent = false): any {
    const results = [];
    objects.forEach(entity => {
      let url = myUrl;
      if (isEvent) {
        if (entity.url) {
          url = entity.url;
        } else {
          url =
            entity.type === 'actualite'
              ? '/vie-etudiante/vie-campus/actualites'
              : '/vie-etudiante/vie-campus/evenements-challenges';
        }
      }
      Object.assign(entity, { url });
      results.push(entity);
    });
    return results;
  }

  @Post('contact')
  @ApiBody({ type: [ContactFormDto] })
  async contactForm(@Body() body: ContactFormDto): Promise<any> {
    return await this.appService.sendFormToAdmin(body);
  }

  @Post('636c6561726361636865736563726574657370726974726f757465')
  @ApiExcludeEndpoint()
  async clearCache() {
    clearCache();
    return 'Cache Cleared';
  }
}
