import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID } from 'mongodb';
import { DeleteResult, Repository } from 'typeorm';
import { cleaner } from '../../shared/file-cleaner.utils';
import { IGetUserAuthInfoRequest } from '../../shared/user-request.interface';
import { CreatePartnershipDto, UpdatePartnershipDto } from './dto';
import { PartnershipEntity } from './entities/partnership.entity';
import { findByField } from '../../shared/findByField.utils';

@Injectable({ scope: Scope.REQUEST })
export class PartnershipService {
  constructor(
    @InjectRepository(PartnershipEntity)
    private readonly partnershipRepository: Repository<PartnershipEntity>,
    @Inject(REQUEST) private readonly request: IGetUserAuthInfoRequest
  ) {}

  async findAll(): Promise<PartnershipEntity[]> {
    return await this.partnershipRepository.find();
  }

  async search(keyword): Promise<PartnershipEntity[]> {
    const reg = new RegExp(keyword, 'i');
    return await this.partnershipRepository.find({
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

  async create(dto: CreatePartnershipDto): Promise<PartnershipEntity> {
    const newPartnership = Object.assign(new PartnershipEntity(), dto);
    newPartnership.userCreated = this.request.user._id;
    newPartnership.userUpdated = this.request.user._id;
    return await this.partnershipRepository.save(newPartnership);
  }

  async update(toUpdate: PartnershipEntity, dto: UpdatePartnershipDto): Promise<PartnershipEntity> {
    toUpdate.userUpdated = this.request.user._id;
    if (dto.image && toUpdate.image !== dto.image) {
      cleaner(toUpdate.image);
    }
    toUpdate.clearFields();
    Object.assign(toUpdate, dto);
    return await this.partnershipRepository.save(toUpdate);
  }

  async delete(_id: ObjectID): Promise<DeleteResult> {
    const toDelete = await findByField(this.partnershipRepository, { _id }, true);
    if (toDelete?.image) {
      cleaner(toDelete.image);
    }
    return await this.partnershipRepository.delete({ _id });
  }
}
