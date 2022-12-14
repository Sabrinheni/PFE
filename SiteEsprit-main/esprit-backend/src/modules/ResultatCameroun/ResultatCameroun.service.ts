import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID } from 'mongodb';
import { DeleteResult, Repository } from 'typeorm';
import { IGetUserAuthInfoRequest } from '../../shared/user-request.interface';
import { CreateResultatCamerounDto, UpdateResultatCamerounDto } from './dto';
import { ResultatCamerounEntity } from './entities/ResultatCameroun.entity';
import { findByField } from '../../shared/findByField.utils';

@Injectable({ scope: Scope.REQUEST })
export class ResultatCamerounService {
  constructor(
    @InjectRepository(ResultatCamerounEntity)
    private readonly ResultatCamerounRepository: Repository<ResultatCamerounEntity>,
    @Inject(REQUEST) private readonly request: IGetUserAuthInfoRequest
  ) {}

  async findAll(): Promise<ResultatCamerounEntity[]> {
    return await this.ResultatCamerounRepository.find();
  }

  async search(keyword): Promise<ResultatCamerounEntity[]> {
    const reg = new RegExp(keyword, 'i');
    return await this.ResultatCamerounRepository.find({
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

  async create(dto: CreateResultatCamerounDto): Promise<ResultatCamerounEntity> {
    const newResultatCameroun = Object.assign(new ResultatCamerounEntity(), dto);
    newResultatCameroun.userCreated = this.request.user._id;
    newResultatCameroun.userUpdated = this.request.user._id;
    return await this.ResultatCamerounRepository.save(newResultatCameroun);
  }

  async update(toUpdate: ResultatCamerounEntity, dto: UpdateResultatCamerounDto): Promise<ResultatCamerounEntity> {
    toUpdate.userUpdated = this.request.user._id;
  
    toUpdate.clearFields();
    Object.assign(toUpdate, dto);
    return await this.ResultatCamerounRepository.save(toUpdate);
  }

  async delete(_id: ObjectID): Promise<DeleteResult> {
    const toDelete = await findByField(this.ResultatCamerounRepository, { _id }, true);
   
    return await this.ResultatCamerounRepository.delete({ _id });
  }
}
