import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID } from 'mongodb';
import { DeleteResult, Repository } from 'typeorm';
import { IGetUserAuthInfoRequest } from '../../shared/user-request.interface';
import { CreateFaqDto, UpdateFaqDto } from './dto';
import { FaqEntity } from './entities/faq.entity';
import { findByField } from '../../shared/findByField.utils';

@Injectable({ scope: Scope.REQUEST })
export class FaqService {
  constructor(
    @InjectRepository(FaqEntity)
    private readonly faqRepository: Repository<FaqEntity>,
    @Inject(REQUEST) private readonly request: IGetUserAuthInfoRequest
  ) {}

  async findAll(): Promise<FaqEntity[]> {
    return await this.faqRepository.find();
  }

  async search(keyword): Promise<FaqEntity[]> {
    const reg = new RegExp(keyword, 'i');
    return await this.faqRepository.find({
      where: {
        $or: [
          {
            question: reg
          },
          {
            response: reg
          }
        ]
      }
    });
  }

  async create(dto: CreateFaqDto): Promise<FaqEntity> {
    const newFaq = Object.assign(new FaqEntity(), dto);
    newFaq.userCreated = this.request.user._id;
    newFaq.userUpdated = this.request.user._id;
    return await this.faqRepository.save(newFaq);
  }

  async update(toUpdate: FaqEntity, dto: UpdateFaqDto): Promise<FaqEntity> {
    toUpdate.userUpdated = this.request.user._id;
    Object.assign(toUpdate, dto);
    return await this.faqRepository.save(toUpdate);
  }

  async delete(_id: ObjectID): Promise<DeleteResult> {
    const toDelete = await findByField(this.faqRepository, { _id }, true);
    return await this.faqRepository.delete({ _id });
  }
}
