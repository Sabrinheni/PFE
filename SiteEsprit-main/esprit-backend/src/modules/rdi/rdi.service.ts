import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID } from 'mongodb';
import { DeleteResult, Repository } from 'typeorm';
import { cleaner } from '../../shared/file-cleaner.utils';
import { IGetUserAuthInfoRequest } from '../../shared/user-request.interface';
import { CreateRdiDto, UpdateRdiDto } from './dto';
import { RdiEntity } from './entities/rdi.entity';
import { findByField } from '../../shared/findByField.utils';

@Injectable({ scope: Scope.REQUEST })
export class RdiService {
  constructor(
    @InjectRepository(RdiEntity)
    private readonly rdiRepository: Repository<RdiEntity>,
    @Inject(REQUEST) private readonly request: IGetUserAuthInfoRequest
  ) {}

  async findAll(): Promise<RdiEntity[]> {
    return await this.rdiRepository.find();
  }

  async search(keyword): Promise<RdiEntity[]> {
    const reg = new RegExp(keyword, 'i');
    return await this.rdiRepository.find({
      where: {
        $or: [
          {
            title: reg
          },
          {
            description: reg
          },
          {
            members: reg
          }
        ]
      }
    });
  }

  async findBySlug(slug): Promise<RdiEntity> {
    return await this.rdiRepository.findOne({ slug });
  }

  async deleteRelated(toRemoved): Promise<RdiEntity> {
    const rdi = await this.rdiRepository.findOne({ members: toRemoved });
    rdi.members = rdi.members.filter(val => val !== toRemoved);
    this.rdiRepository.save(rdi);
    return rdi;
  }

  async create(dto: CreateRdiDto): Promise<RdiEntity> {
    const newRdi = Object.assign(new RdiEntity(), dto);
    newRdi.userCreated = this.request.user._id;
    newRdi.userUpdated = this.request.user._id;
    return await this.rdiRepository.save(newRdi);
  }

  async update(toUpdate: RdiEntity, dto: UpdateRdiDto): Promise<RdiEntity> {
    toUpdate.userUpdated = this.request.user._id;
    if (dto.image && toUpdate.image !== dto.image) {
      cleaner(toUpdate.image);
    }
    toUpdate.clearFields();
    Object.assign(toUpdate, dto);
    return await this.rdiRepository.save(toUpdate);
  }

  async delete(_id: ObjectID): Promise<DeleteResult> {
    const toDelete = await findByField(this.rdiRepository, { _id }, true);
    if (toDelete?.image) {
      cleaner(toDelete.image);
    }
    return await this.rdiRepository.delete({ _id });
  }
}
