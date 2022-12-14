import { Body, Controller, Delete, Get, Injectable, Param, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID } from 'mongodb';
import { Repository } from 'typeorm';
// Roles
import { adminRoles, teftefaqRoles } from '../../guards/roles.enum';
import { Roles } from '../../shared/decorators';
import { findByField } from '../../shared/findByField.utils';
// HELPERS
import { isFieldUnique } from '../../shared/isFieldUnique.utils';
import { ValidateObjectIdPipe } from '../../shared/pipes';
import { UserService } from '../users/user.service';
// ENTITY RELATED
import { CreateTefTefaqDto, UpdateTefTefaqDto } from './dto';
import { TefTefaqEntity } from './entities/teftefaq.entity';
import { TefTefaqService } from './teftefaq.service';

@ApiBearerAuth()
@ApiTags('teftefaq')
@Controller()
@Injectable()
export class TefTefaqController {
  constructor(
    @InjectRepository(TefTefaqEntity)
    private readonly teftefaqRepository: Repository<TefTefaqEntity>,
    private readonly teftefaqService: TefTefaqService,
    private readonly userService: UserService
  ) {}

  @Get('teftefaq/:id')
  @ApiBody({ description: 'id', required: true })
  async findMe(@Param(new ValidateObjectIdPipe('TefTefaq')) params): Promise<TefTefaqEntity> {
    const teftefaq = await findByField(this.teftefaqRepository, { _id: params.id }, true);
    return await this.userService.populateUsers(teftefaq);
  }

  @Get('teftefaqs')
  async findAll(): Promise<TefTefaqEntity[]> {
    const teftefaqs = await this.teftefaqService.findAll();
    return this.userService.populateUsers(teftefaqs);
  }

  @Get('teftefaqs/archived')
  @Roles(adminRoles.admin, teftefaqRoles.handleArchivedTefTefaq)
  async findArchived(): Promise<TefTefaqEntity[]> {
    const teftefaqs = await this.teftefaqService.findAll({ status: false });
    return this.userService.populateUsers(teftefaqs);
  }

  @Put('teftefaq/:id')
  @ApiBody({ type: [UpdateTefTefaqDto] })
  @Roles(adminRoles.admin, teftefaqRoles.updateTefTefaq)
  async update(@Param(new ValidateObjectIdPipe('TefTefaq')) params, @Body() teftefaqData: UpdateTefTefaqDto) {
    // Check if entity exists  throws exception if not exists!
    const toUpdate = await findByField(this.teftefaqRepository, { _id: params.id }, true);

    const teftefaq = await this.teftefaqService.update(toUpdate, teftefaqData);
    return await this.userService.populateUsers(teftefaq);
  }

  @Put('teftefaq/archive/:id')
  async archive(@Param(new ValidateObjectIdPipe('TefTefaq')) params) {
    const teftefaq = await this.teftefaqService.archive(new ObjectID(params.id));
    return await this.userService.populateUsers(teftefaq);
  }

  @Put('teftefaq/unarchive/:id')
  async unarchive(@Param(new ValidateObjectIdPipe('TefTefaq')) params) {
    const teftefaq = this.teftefaqService.unarchive(new ObjectID(params.id));
    return await this.userService.populateUsers(teftefaq);
  }

  @Post('teftefaq')
  @Roles(adminRoles.admin, teftefaqRoles.createTefTefaq)
  @ApiBody({ type: [CreateTefTefaqDto] })
  async create(@Body() teftefaqData: CreateTefTefaqDto) {
    return await this.teftefaqService.create(teftefaqData);
  }

  @Delete('teftefaq/:id')
  @Roles(adminRoles.admin, teftefaqRoles.deleteTefTefaq)
  async delete(@Param(new ValidateObjectIdPipe('TefTefaq')) params) {
    return await this.teftefaqService.delete(new ObjectID(params.id));
  }
}
