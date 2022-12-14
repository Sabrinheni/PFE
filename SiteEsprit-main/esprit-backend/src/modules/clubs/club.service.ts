import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID } from 'mongodb';
import { DeleteResult, Repository } from 'typeorm';
import { cleaner } from '../../shared/file-cleaner.utils';
import { IGetUserAuthInfoRequest } from '../../shared/user-request.interface';
import { CreateClubDto, UpdateClubDto } from './dto';
import { ClubEntity } from './entities/club.entity';
import { findByField } from '../../shared/findByField.utils';

@Injectable({ scope: Scope.REQUEST })
export class ClubService {
  constructor(
    @InjectRepository(ClubEntity)
    private readonly clubRepository: Repository<ClubEntity>,
    @Inject(REQUEST) private readonly request: IGetUserAuthInfoRequest
  ) {}

  async findAll(): Promise<ClubEntity[]> {
    return await this.clubRepository.find();
  }

  async search(keyword): Promise<ClubEntity[]> {
    const reg = new RegExp(keyword, 'i');
    return await this.clubRepository.find({
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

  async create(dto: CreateClubDto): Promise<ClubEntity> {
    const newClub = Object.assign(new ClubEntity(), dto);
    newClub.userCreated = this.request.user._id;
    newClub.userUpdated = this.request.user._id;
    return await this.clubRepository.save(newClub);
  }

  async update(toUpdate: ClubEntity, dto: UpdateClubDto): Promise<ClubEntity> {
    toUpdate.userUpdated = this.request.user._id;
    if (dto.image && toUpdate.image !== dto.image) {
      cleaner(toUpdate.image);
    }
    toUpdate.clearFields();
    Object.assign(toUpdate, dto);
    return await this.clubRepository.save(toUpdate);
  }

  async delete(_id: ObjectID): Promise<DeleteResult> {
    const toDelete = await findByField(this.clubRepository, { _id }, true);
    if (toDelete?.image) {
      cleaner(toDelete.image);
    }
    return await this.clubRepository.delete({ _id });
  }
}
