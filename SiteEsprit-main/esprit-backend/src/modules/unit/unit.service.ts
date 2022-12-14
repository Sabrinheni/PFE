import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID } from 'mongodb';
import { DeleteResult, Repository } from 'typeorm';
import { IGetUserAuthInfoRequest } from '../../shared/user-request.interface';
import { CreateUnitDto, UpdateUnitDto } from './dto';
import { UnitEntity } from './entities/unit.entity';
import { findByField } from '../../shared/findByField.utils';
import { cleaner } from 'src/shared/file-cleaner.utils';

@Injectable({ scope: Scope.REQUEST })
export class UnitService {
  constructor(
    @InjectRepository(UnitEntity)
    private readonly unitRepository: Repository<UnitEntity>,
    @Inject(REQUEST) private readonly request: IGetUserAuthInfoRequest
  ) {}

  async findAll(condition = { status: true }): Promise<UnitEntity[]> {
    return await this.unitRepository.find(condition);
  }

  async search(keyword): Promise<UnitEntity[]> {
    const reg = new RegExp(keyword, 'i');
    return await this.unitRepository.find({
      where: {
        $or: [
          {
            title: reg
          },
          {
            description: reg
          }
        ]
      }
    });
  }

  async create(dto: CreateUnitDto): Promise<UnitEntity> {
    const newUnit = Object.assign(new UnitEntity(), dto);
    newUnit.userCreated = this.request.user._id;
    newUnit.userUpdated = this.request.user._id;
    return await this.unitRepository.save(newUnit);
  }

  async update(toUpdate: UnitEntity, dto: UpdateUnitDto): Promise<UnitEntity> {
    toUpdate.userUpdated = this.request.user._id;
    if (dto.image && toUpdate.image !== dto.image) {
      cleaner(toUpdate.image);
    }
    if (dto.file && toUpdate.file !== dto.file) {
      cleaner(toUpdate.file);
    }
    toUpdate.clearFields();
    Object.assign(toUpdate, dto);
    return await this.unitRepository.save(toUpdate);
  }

  async archive(_id: ObjectID): Promise<UnitEntity> {
    const toUpdate = await findByField(this.unitRepository, { _id }, true);
    toUpdate.status = false;
    toUpdate.userUpdated = this.request.user._id;

    return await this.unitRepository.save(toUpdate);
  }

  async unarchive(_id: ObjectID): Promise<UnitEntity> {
    const toUpdate = await findByField(this.unitRepository, { _id }, true);
    toUpdate.status = true;
    toUpdate.userUpdated = this.request.user._id;

    return await this.unitRepository.save(toUpdate);
  }

  async delete(_id: ObjectID): Promise<DeleteResult> {
    const toDelete = await findByField(this.unitRepository, { _id }, true);
    if (toDelete?.file) {
      cleaner(toDelete.file);
    }
    if (toDelete?.image) {
      cleaner(toDelete.image);
    }
    return await this.unitRepository.delete({ _id });
  }
}
