import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID } from 'mongodb';
import { DeleteResult, Repository } from 'typeorm';
import { cleaner } from '../../shared/file-cleaner.utils';
import { IGetUserAuthInfoRequest } from '../../shared/user-request.interface';
import { CreateSliderDto, UpdateSliderDto } from './dto';
import { SliderEntity } from './entities/slider.entity';
import { findByField } from '../../shared/findByField.utils';
import { relatedEnum } from 'src/shared/enums/related.enum';

@Injectable({ scope: Scope.REQUEST })
export class SliderService {
  constructor(
    @InjectRepository(SliderEntity)
    private readonly sliderRepository: Repository<SliderEntity>,
    @Inject(REQUEST) private readonly request: IGetUserAuthInfoRequest
  ) {}

  async findAll(condition = { status: true, related: relatedEnum.esprit }): Promise<SliderEntity[]> {
    return await this.sliderRepository.find(condition);
  }

  async create(dto: CreateSliderDto): Promise<SliderEntity> {
    // create new slider
    const newSlider = Object.assign(new SliderEntity(), dto);
    if (this.request.user.rdi) {
      newSlider.related = relatedEnum.rdi;
    }
    if (this.request.user.prepa) {
      newSlider.related = relatedEnum.prepa;
    }
    if (this.request.user.kindy) {
      newSlider.related = relatedEnum.kindy;
    }
    newSlider.userCreated = this.request.user._id;
    newSlider.userUpdated = this.request.user._id;

    return await this.sliderRepository.save(newSlider);
  }

  async update(toUpdate: SliderEntity, dto: UpdateSliderDto): Promise<SliderEntity> {
    toUpdate.userUpdated = this.request.user._id;
    if (dto.image && toUpdate.image !== dto.image) {
      cleaner(toUpdate.image);
    }
    toUpdate.clearFields();
    Object.assign(toUpdate, dto);
    return await this.sliderRepository.save(toUpdate);
  }

  async archive(_id: ObjectID): Promise<SliderEntity> {
    const toUpdate = await findByField(this.sliderRepository, { _id }, true);
    toUpdate.status = false;
    toUpdate.userUpdated = this.request.user._id;

    return await this.sliderRepository.save(toUpdate);
  }

  async unarchive(_id: ObjectID): Promise<SliderEntity> {
    const toUpdate = await findByField(this.sliderRepository, { _id }, true);
    toUpdate.status = true;
    toUpdate.userUpdated = this.request.user._id;

    return await this.sliderRepository.save(toUpdate);
  }

  async delete(_id: ObjectID): Promise<DeleteResult> {
    const toDelete = await findByField(this.sliderRepository, { _id }, true);
    if (toDelete?.image) {
      cleaner(toDelete.image);
    }
    return await this.sliderRepository.delete({ _id });
  }
}
