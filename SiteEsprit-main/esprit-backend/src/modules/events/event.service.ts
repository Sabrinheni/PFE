import { cleaner } from './../../shared/file-cleaner.utils';
import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID } from 'mongodb';
import { DeleteResult, Repository } from 'typeorm';
import { IGetUserAuthInfoRequest } from '../../shared/user-request.interface';
import { CreateEventDto, UpdateEventDto } from './dto';
import { EventEntity } from './entities/event.entity';
import { findByField } from '../../shared/findByField.utils';
import { relatedEnum } from 'src/shared/enums/related.enum';

@Injectable({ scope: Scope.REQUEST })
export class EventService {
  constructor(
    @InjectRepository(EventEntity)
    private readonly eventRepository: Repository<EventEntity>,
    @Inject(REQUEST) private readonly request: IGetUserAuthInfoRequest
  ) {}

  async findAll(condition = { status: true }): Promise<EventEntity[]> {
    return await this.eventRepository.find(condition);
  }

  async findByRelated(condition = { related: relatedEnum.esprit, status: true }): Promise<EventEntity[]> {
    return await this.eventRepository.find({ where: condition });
  }

  async findBySlug(slug): Promise<EventEntity> {
    return await this.eventRepository.findOne({ status: true, slug });
  }

  async search(keyword): Promise<EventEntity[]> {
    const reg = new RegExp(keyword, 'i');
    return await this.eventRepository.find({
      where: {
        $or: [
          {
            title: reg
          },
          {
            description: reg
          },
          {
            content: reg
          }
        ],
        $and: [{ status: true }]
      }
    });
  }

  async paginate(take, skip, condition = { status: true, accepted: true }, type?): Promise<any> {
    const queryTake = Number(take) || 4;
    const querySkip = Number(skip) || 0;
    let where = { ...condition };
    if (type) {
      where = { ...condition, ...{ type } };
    }
    const [result, total] = await this.eventRepository.findAndCount({
      where,
      order: { createdAt: -1 },
      take: queryTake,
      skip: querySkip
    });
    return {
      data: result,
      count: total
    };
  }

  async create(dto: CreateEventDto): Promise<EventEntity> {
    const newEvent = Object.assign(new EventEntity(), dto);
    newEvent.userCreated = this.request.user._id;
    newEvent.userUpdated = this.request.user._id;
    if (this.request.user.rdi) {
      newEvent.related = relatedEnum.rdi;
      newEvent.accepted = true;
    }
    if (this.request.user.prepa) {
      newEvent.related = relatedEnum.prepa;
      newEvent.accepted = true;
    }
    if (this.request.user.kindy) {
      newEvent.related = relatedEnum.kindy;
      newEvent.accepted = true;
    }
    if (this.request.user.club) {
      newEvent.relatedClub = this.request.user.club;
    }
    if (this.request.user.roles.includes('admin')) {
      newEvent.accepted = true;
    }
    return await this.eventRepository.save(newEvent);
  }

  async update(toUpdate: EventEntity, dto: UpdateEventDto): Promise<EventEntity> {
    toUpdate.userUpdated = this.request.user._id;

    if (toUpdate.images) {
      if (!(toUpdate.images instanceof Array)) {
        toUpdate.images = [toUpdate.images];
      }
      if (dto.imagesToDelete) {
        if (!(dto.imagesToDelete instanceof Array)) {
          dto.imagesToDelete = [dto.imagesToDelete];
        }
        for (const img of dto.imagesToDelete) {
          const found = toUpdate.images.indexOf(img);
          if (found !== -1) {
            cleaner(img);
            toUpdate.images = toUpdate.images.filter(i => i !== img);
          }
        }
      }
    } else {
      toUpdate.images = [];
    }

    if (dto.images) {
      for (const img of toUpdate.images) {
        dto.images.push(img);
      }
    }
    toUpdate.clearFields();
    Object.assign(toUpdate, dto);
    return await this.eventRepository.save(toUpdate);
  }

  async accept(_id: ObjectID): Promise<EventEntity> {
    const toUpdate = await findByField(this.eventRepository, { _id }, true);
    toUpdate.accepted = true;
    toUpdate.userUpdated = this.request.user._id;
    return await this.eventRepository.save(toUpdate);
  }

  async archive(_id: ObjectID): Promise<EventEntity> {
    const toUpdate = await findByField(this.eventRepository, { _id }, true);
    toUpdate.status = false;
    toUpdate.userUpdated = this.request.user._id;
    return await this.eventRepository.save(toUpdate);
  }

  async unarchive(_id: ObjectID): Promise<EventEntity> {
    const toUpdate = await findByField(this.eventRepository, { _id }, true);
    toUpdate.status = true;
    toUpdate.userUpdated = this.request.user._id;
    return await this.eventRepository.save(toUpdate);
  }

  async delete(_id: ObjectID): Promise<DeleteResult> {
    const toDelete = await findByField(this.eventRepository, { _id }, true);
    if (toDelete?.cover) {
      cleaner(toDelete.cover);
    }
    if (toDelete?.images) {
      if (!(toDelete.images instanceof Array)) {
        toDelete.images = [toDelete.images];
      }
      for (const img of toDelete.images) {
        cleaner(img);
      }
    }

    return await this.eventRepository.delete({ _id });
  }
}
