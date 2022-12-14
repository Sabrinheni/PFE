import { Injectable, Inject, Scope } from '@nestjs/common';
import { Repository, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID } from 'mongodb';
import { REQUEST } from '@nestjs/core';

// HELPERS
import { IGetUserAuthInfoRequest } from '../../shared/user-request.interface';
import { cleaner } from '../../shared/file-cleaner.utils';

// ENTITY RELATED
import { CreatePressDto, UpdatePressDto } from './dto';
import { PressEntity } from './entities/press.entity';
import { findByField } from '../../shared/findByField.utils';

@Injectable({ scope: Scope.REQUEST })
export class PressService {
  constructor(
    @InjectRepository(PressEntity)
    private readonly pressRepository: Repository<PressEntity>,
    @Inject(REQUEST) private readonly request: IGetUserAuthInfoRequest
  ) {}

  async findAll(condition = { status: true }): Promise<PressEntity[]> {
    return await this.pressRepository.find(condition);
  }

  async search(keyword): Promise<PressEntity[]> {
    const reg = new RegExp(keyword, 'i');
    return await this.pressRepository.find({
      where: {
        $or: [
          {
            title: reg
          },
          {
            description: reg
          }
        ],
        $and: [{ status: true }]
      }
    });
  }

  async create(dto: CreatePressDto): Promise<PressEntity> {
    const newPress = Object.assign(new PressEntity(), dto);
    newPress.userCreated = this.request.user._id;
    newPress.userUpdated = this.request.user._id;
    return await this.pressRepository.save(newPress);
  }

  async update(toUpdate: PressEntity, dto: UpdatePressDto): Promise<PressEntity> {
    toUpdate.userUpdated = this.request.user._id;
    if (dto.image && toUpdate.image !== dto.image) {
      cleaner(toUpdate.image);
    }
    if (dto.file && toUpdate.file !== dto.file) {
      cleaner(toUpdate.file);
    }
    toUpdate.clearFields();
    Object.assign(toUpdate, dto);
    return await this.pressRepository.save(toUpdate);
  }

  async archive(_id: ObjectID): Promise<PressEntity> {
    const toUpdate = await findByField(this.pressRepository, { _id }, true);
    toUpdate.status = false;
    toUpdate.userUpdated = this.request.user._id;
    return await this.pressRepository.save(toUpdate);
  }

  async unarchive(_id: ObjectID): Promise<PressEntity> {
    const toUpdate = await findByField(this.pressRepository, { _id }, true);
    toUpdate.status = true;
    toUpdate.userUpdated = this.request.user._id;
    return await this.pressRepository.save(toUpdate);
  }

  async delete(_id: ObjectID): Promise<DeleteResult> {
    const toDelete = await findByField(this.pressRepository, { _id }, true);
    if (toDelete?.file) {
      cleaner(toDelete.file);
    }
    if (toDelete?.image) {
      cleaner(toDelete.image);
    }
    return await this.pressRepository.delete({ _id });
  }
}
