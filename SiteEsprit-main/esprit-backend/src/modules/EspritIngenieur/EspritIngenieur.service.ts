import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID } from 'mongodb';
import { DeleteResult, Repository } from 'typeorm';
import { IGetUserAuthInfoRequest } from '../../shared/user-request.interface';
import { CreateEspritIngenieurDto, UpdateEspritIngenieurDto } from './dto';
import { EspritIngenieurEntity } from './entities/EspritIngenieur.entity';
import { findByField } from '../../shared/findByField.utils';

@Injectable({ scope: Scope.REQUEST })
export class EspritIngenieurService {
  constructor(
    @InjectRepository(EspritIngenieurEntity)
    private readonly EspritIngenieurRepository: Repository<EspritIngenieurEntity>,
    @Inject(REQUEST) private readonly request: IGetUserAuthInfoRequest
  ) {}

  async findAll(): Promise<EspritIngenieurEntity[]> {
    return await this.EspritIngenieurRepository.find();
  }

  async search(keyword): Promise<EspritIngenieurEntity[]> {
    const reg = new RegExp(keyword, 'i');
    return await this.EspritIngenieurRepository.find({
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

  async create(dto: CreateEspritIngenieurDto): Promise<EspritIngenieurEntity> {
    const newEspritIngenieur = Object.assign(new EspritIngenieurEntity(), dto);
    newEspritIngenieur.userCreated = this.request.user._id;
    newEspritIngenieur.userUpdated = this.request.user._id;
    return await this.EspritIngenieurRepository.save(newEspritIngenieur);
  }

  async update(toUpdate: EspritIngenieurEntity, dto: UpdateEspritIngenieurDto): Promise<EspritIngenieurEntity> {
    toUpdate.userUpdated = this.request.user._id;
  
    toUpdate.clearFields();
    Object.assign(toUpdate, dto);
    return await this.EspritIngenieurRepository.save(toUpdate);
  }

  async delete(_id: ObjectID): Promise<DeleteResult> {
    const toDelete = await findByField(this.EspritIngenieurRepository, { _id }, true);
   
    return await this.EspritIngenieurRepository.delete({ _id });
  }
}
