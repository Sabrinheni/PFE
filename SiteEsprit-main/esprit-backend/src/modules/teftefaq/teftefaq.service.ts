import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID } from 'mongodb';
import { DeleteResult, Repository } from 'typeorm';
import { findByField } from '../../shared/findByField.utils';
import { IGetUserAuthInfoRequest } from '../../shared/user-request.interface';
import { CreateTefTefaqDto, UpdateTefTefaqDto } from './dto';
import { TefTefaqEntity } from './entities/teftefaq.entity';

@Injectable({ scope: Scope.REQUEST })
export class TefTefaqService {
  constructor(
    @InjectRepository(TefTefaqEntity)
    private readonly teftefaqRepository: Repository<TefTefaqEntity>,
    @Inject(REQUEST) private readonly request: IGetUserAuthInfoRequest
  ) {}

  async findAll(condition = { status: true }): Promise<TefTefaqEntity[]> {
    return await this.teftefaqRepository.find(condition);
  }

  async create(dto: CreateTefTefaqDto): Promise<TefTefaqEntity> {
    const newTefTefaq = Object.assign(new TefTefaqEntity(), dto);
    newTefTefaq.userCreated = this.request.user._id;
    newTefTefaq.userUpdated = this.request.user._id;
    return await this.teftefaqRepository.save(newTefTefaq);
  }

  async update(toUpdate: TefTefaqEntity, dto: UpdateTefTefaqDto): Promise<TefTefaqEntity> {
    toUpdate.userUpdated = this.request.user._id;
    toUpdate.clearFields();
    Object.assign(toUpdate, dto);
    return await this.teftefaqRepository.save(toUpdate);
  }

  async archive(_id: ObjectID): Promise<TefTefaqEntity> {
    const toUpdate = await findByField(this.teftefaqRepository, { _id }, true);
    toUpdate.status = false;
    toUpdate.userUpdated = this.request.user._id;
    return await this.teftefaqRepository.save(toUpdate);
  }

  async unarchive(_id: ObjectID): Promise<TefTefaqEntity> {
    const toUpdate = await findByField(this.teftefaqRepository, { _id }, true);
    toUpdate.status = true;
    toUpdate.userUpdated = this.request.user._id;
    return await this.teftefaqRepository.save(toUpdate);
  }

  async delete(_id: ObjectID): Promise<DeleteResult> {
    const toDelete = await findByField(this.teftefaqRepository, { _id }, true);
    return await this.teftefaqRepository.delete({ _id });
  }
}
