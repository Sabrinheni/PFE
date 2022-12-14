import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID } from 'mongodb';
import { DeleteResult, Repository } from 'typeorm';
import { cleaner } from '../../shared/file-cleaner.utils';
import { IGetUserAuthInfoRequest } from '../../shared/user-request.interface';
import { CreateTimeTableDto, UpdateTimeTableDto } from './dto';
import { TimeTableEntity } from './entities/timeTable.entity';
import { findByField } from '../../shared/findByField.utils';

@Injectable({ scope: Scope.REQUEST })
export class TimeTableService {
  constructor(
    @InjectRepository(TimeTableEntity)
    private readonly timeTableRepository: Repository<TimeTableEntity>,
    @Inject(REQUEST) private readonly request: IGetUserAuthInfoRequest
  ) {}

  async findAll(condition = { status: true }): Promise<TimeTableEntity[]> {
    return await this.timeTableRepository.find(condition);
  }

  async create(dto: CreateTimeTableDto): Promise<TimeTableEntity> {
    const newTimeTable = Object.assign(new TimeTableEntity(), dto);
    newTimeTable.userCreated = this.request.user._id;
    newTimeTable.userUpdated = this.request.user._id;
    const lastActiveTable = await this.timeTableRepository.find({ title: dto.title, status: true });
    if (lastActiveTable[0]) {
      lastActiveTable[0].status = false;
      await this.timeTableRepository.save(lastActiveTable[0]);
    }
    return await this.timeTableRepository.save(newTimeTable);
  }

  async update(toUpdate: TimeTableEntity, dto: UpdateTimeTableDto): Promise<TimeTableEntity> {
    toUpdate.userUpdated = this.request.user._id;

    if (dto.file && toUpdate.file !== dto.file) {
      cleaner(toUpdate.file);
    }
    Object.assign(toUpdate, dto);
    return await this.timeTableRepository.save(toUpdate);
  }

  async delete(_id: ObjectID): Promise<DeleteResult> {
    const toDelete = await findByField(this.timeTableRepository, { _id }, true);
    if (toDelete?.file) {
      cleaner(toDelete.file);
    }
    return await this.timeTableRepository.delete({ _id });
  }
}
