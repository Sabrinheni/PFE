import { Body, Controller, Delete, Get, Injectable, Param, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID } from 'mongodb';
import { Repository } from 'typeorm';
// Roles
import { adminRoles, faqRoles } from '../../guards/roles.enum';
import { Roles } from '../../shared/decorators';
import { findByField } from '../../shared/findByField.utils';
import { ValidateObjectIdPipe } from '../../shared/pipes';
import { UserService } from '../users/user.service';
// ENTITY RELATED
import { CreateFaqDto, UpdateFaqDto } from './dto';
import { FaqEntity } from './entities/faq.entity';
import { FaqService } from './faq.service';

@ApiBearerAuth()
@ApiTags('faq')
@Controller()
@Injectable()
export class FaqController {
  constructor(
    @InjectRepository(FaqEntity)
    private readonly faqRepository: Repository<FaqEntity>,
    private readonly faqService: FaqService,
    private readonly userService: UserService
  ) {}

  @Get('faq/:id')
  @ApiBody({ description: 'id', required: true })
  async findMe(@Param(new ValidateObjectIdPipe('faq')) params): Promise<FaqEntity> {
    const faq = await findByField(this.faqRepository, { _id: params.id }, true);
    return await this.userService.populateUsers(faq);
  }

  @Get('faqs')
  async findAll(): Promise<FaqEntity[]> {
    const faqs = await this.faqService.findAll();
    return this.userService.populateUsers(faqs);
  }

  @Put('faq/:id')
  @ApiBody({ type: [UpdateFaqDto] })
  @Roles(adminRoles.admin, faqRoles.updateFaq)
  async update(@Param(new ValidateObjectIdPipe('faq')) params, @Body() faqData: UpdateFaqDto) {
    // Check if entity exists  throws exception if not exists!
    const toUpdate = await findByField(this.faqRepository, { _id: params.id }, true);
    const faq = await this.faqService.update(toUpdate, faqData);
    return await this.userService.populateUsers(faq);
  }

  @Post('faq')
  @Roles(adminRoles.admin, faqRoles.createFaq)
  @ApiBody({ type: [CreateFaqDto] })
  async create(@Body() faqData: CreateFaqDto) {
    return await this.faqService.create(faqData);
  }

  @Delete('faq/:id')
  @Roles(adminRoles.admin, faqRoles.deleteFaq)
  async delete(@Param(new ValidateObjectIdPipe('faq')) params) {
    return await this.faqService.delete(new ObjectID(params.id));
  }
}
