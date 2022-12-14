import {
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
  Controller,
  UseInterceptors,
  Injectable,
  UploadedFiles,
  Req,
  Patch
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectID } from 'mongodb';

// Roles
import { adminRoles, eventRoles } from '../../guards/roles.enum';
import { Roles } from '../../shared/decorators';

// HELPERS
import { isFieldUnique } from '../../shared/isFieldUnique.utils';
import { findByField } from '../../shared/findByField.utils';
import { validateImages } from '../../shared/filters.utils';
import { uploadFile } from '../../shared/file-upload.utils';
import { ValidateObjectIdPipe } from '../../shared/pipes';

// ENTITY RELATED
import { CreateEventDto, UpdateEventDto } from './dto';
import { EventEntity } from './entities/event.entity';
import { UserService } from '../users/user.service';
import { EventService } from './event.service';
import { isUserRelated } from '../../shared/isUserRelated.utils';
import { eventTypes } from './entities/event.enum';
import { findAndPaginate } from 'src/shared/findAndPaginate.utils';
import { relatedEnum } from 'src/shared/enums/related.enum';

@ApiBearerAuth()
@ApiTags('event')
@Controller()
@Injectable()
export class EventController {
  constructor(
    @InjectRepository(EventEntity)
    private readonly eventRepository: Repository<EventEntity>,
    private readonly eventService: EventService,
    private readonly userService: UserService
  ) {}

  @Get('event/:id')
  @ApiBody({ description: 'id', required: true })
  async findMe(@Param(new ValidateObjectIdPipe('Event')) params): Promise<EventEntity> {
    const event = await findByField(this.eventRepository, { _id: params.id }, true);
    return await this.userService.populateUsers(event);
  }

  @Get('event/slug/:slug')
  @ApiBody({ description: 'slug', required: true })
  async findBySlug(@Param() params): Promise<EventEntity> {
    const event = await this.eventService.findBySlug(params.slug);
    return await this.userService.populateUsers(event);
  }

  @Get('events/:related/:take/:skip')
  async paginate(@Param('take') take, @Param('skip') skip, @Param('related') related): Promise<EventEntity[]> {
    const events = await findAndPaginate(
      this.eventRepository,
      { status: true, accepted: true, related: relatedEnum[related] },
      Number(take),
      Number(skip),
      false,
      true
    );
    return this.userService.populateUsers(events);
  }

  @Get('events')
  async findAll(): Promise<EventEntity[]> {
    const events = await this.eventService.findAll();
    return this.userService.populateUsers(events);
  }

  @Get('events/:related')
  async findAllByApplication(@Param('related') related): Promise<EventEntity[]> {
    const events = await this.eventService.findByRelated({ related: relatedEnum[related], status: true });
    return this.userService.populateUsers(events);
  }

  @Get('events/:related/archived')
  @Roles(adminRoles.admin, eventRoles.handleArchivedEvent)
  async findAllByApplicationArchived(@Param('related') related): Promise<EventEntity[]> {
    const events = await this.eventService.findByRelated({ related: relatedEnum[related], status: false });
    return this.userService.populateUsers(events);
  }

  @Get('events/:type/:related/:take/:skip')
  async findEvents(
    @Param('take') take,
    @Param('skip') skip,
    @Param('type') type,
    @Param('related') related
  ): Promise<EventEntity[]> {
    const events = await findAndPaginate(
      this.eventRepository,
      { status: true, accepted: true, type: eventTypes[type], related: relatedEnum[related] },
      Number(take),
      Number(skip),
      true,
      true
    );
    return this.userService.populateUsers(events);
  }

  @Get('events/archived')
  @Roles(adminRoles.admin, eventRoles.handleArchivedEvent)
  async findArchived(): Promise<EventEntity[]> {
    const events = await this.eventService.findAll({ status: false });
    return this.userService.populateUsers(events);
  }

  @Put('event/:id')
  @ApiBody({ type: [UpdateEventDto] })
  @Roles(adminRoles.admin, eventRoles.updateEvent)
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'cover', maxCount: 1 },
      { name: 'images', maxCount: 30 }
    ])
  )
  async update(
    @Param(new ValidateObjectIdPipe('Event')) params,
    @Body() eventData: UpdateEventDto,
    @UploadedFiles() files,
    @Req() request
  ) {
    // Check if entity exists  throws exception if not exists!
    const toUpdate = await findByField(this.eventRepository, { _id: params.id }, true);
    if (request.user.club) {
      await isUserRelated(request.user, toUpdate.relatedClub);
    }
    // Check if entity's title is unique throws exception if not !
    await isFieldUnique(this.eventRepository, { title: eventData.title }, params.id);
    const cover = [];
    let images = [];
    if (files.cover) {
      cover.push(files.cover[0]);
    }
    if (files.images) {
      images = files.images;
    }
    if (cover.length > 0) {
      validateImages(cover);
    }
    if (images.length > 0) {
      validateImages(images);
    }
    if (cover.length > 0) {
      eventData.cover = await uploadFile(cover[0]);
    }
    if (images.length > 0) {
      eventData.images = [];
      for (const file of images) {
        eventData.images.push(await uploadFile(file));
      }
    }
    const event = await this.eventService.update(toUpdate, eventData);
    return await this.userService.populateUsers(event);
  }

  @Put('event/archive/:id')
  async archive(@Param(new ValidateObjectIdPipe('Event')) params) {
    const event = await this.eventService.archive(new ObjectID(params.id));
    return await this.userService.populateUsers(event);
  }

  @Put('event/unarchive/:id')
  async unarchive(@Param(new ValidateObjectIdPipe('Event')) params) {
    const event = this.eventService.unarchive(new ObjectID(params.id));
    return await this.userService.populateUsers(event);
  }

  @Post('event')
  @Roles(adminRoles.admin, eventRoles.createEvent)
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'cover', maxCount: 1 },
      { name: 'images', maxCount: 30 }
    ])
  )
  @ApiBody({ type: [CreateEventDto] })
  async create(@Body() eventData: CreateEventDto, @UploadedFiles() files) {
    await isFieldUnique(this.eventRepository, { title: eventData.title });
    const cover = [];
    let images = [];
    if (files.cover) {
      cover.push(files.cover[0]);
    }
    if (files.images) {
      images = files.images;
    }
    if (cover.length > 0) {
      validateImages(cover);
    }
    if (images.length > 0) {
      validateImages(images);
    }
    if (cover.length > 0) {
      eventData.cover = await uploadFile(cover[0]);
    }
    if (images.length > 0) {
      eventData.images = [];
      for (const file of images) {
        eventData.images.push(await uploadFile(file));
      }
    }
    return await this.eventService.create(eventData);
  }

  @Delete('event/:id')
  @Roles(adminRoles.admin, eventRoles.deleteEvent)
  async delete(@Param(new ValidateObjectIdPipe('Event')) params) {
    return await this.eventService.delete(new ObjectID(params.id));
  }

  @Patch('event/:id')
  @Roles(adminRoles.admin)
  async accept(@Param(new ValidateObjectIdPipe('Event')) params) {
    return await this.eventService.accept(new ObjectID(params.id));
  }
}
