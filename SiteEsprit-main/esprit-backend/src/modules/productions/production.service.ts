import { ObjectID } from 'mongodb';
import { UpdateProductionDto } from './dto/update-production.dto';
import { CreateProductionDto } from './dto/create-production.dto';
import { REQUEST } from '@nestjs/core';
import { IGetUserAuthInfoRequest } from './../../shared/user-request.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductionEntity } from './entities/production.entity';
import { Injectable, Scope, Inject } from '@nestjs/common';
import { Repository, DeleteResult } from 'typeorm';
import { findByField } from 'src/shared/findByField.utils';

@Injectable({ scope: Scope.REQUEST })
export class ProductionService {
  constructor(
    @InjectRepository(ProductionEntity)
    private readonly productionRepository: Repository<ProductionEntity>,
    @Inject(REQUEST) private readonly request: IGetUserAuthInfoRequest
  ) {}

  async findAll(condition = {}): Promise<ProductionEntity[]> {
    return await this.productionRepository.find(condition);
  }

  async findMemberProductions(id): Promise<ProductionEntity[]> {
    return await this.productionRepository.find({ members: id });
  }

  async search(keyword): Promise<ProductionEntity[]> {
    const reg = new RegExp(keyword, 'i');
    return await this.productionRepository.find({
      where: {
        $or: {
          description: reg
        }
      }
    });
  }

  async paginate(take, skip, condition = { status: true, accepted: true }, type?): Promise<any> {
    const queryTake = Number(take) || 4;
    const querySkip = Number(skip) || 0;
    let where = { ...condition };
    if (type) {
      where = { ...condition, ...{ type } };
    }
    const [result, total] = await this.productionRepository.findAndCount({
      where,
      order: { createdAt: -1 },
      take: queryTake,
      skip: querySkip
    });
    return {
      data: result,
      count: total
    };
  }

  async create(dto: CreateProductionDto): Promise<ProductionEntity> {
    const newProduction = Object.assign(new ProductionEntity(), dto);
    newProduction.userCreated = this.request.user._id;
    newProduction.userUpdated = this.request.user._id;
    return await this.productionRepository.save(newProduction);
  }

  async update(toUpdate: ProductionEntity, dto: UpdateProductionDto): Promise<ProductionEntity> {
    toUpdate.userUpdated = this.request.user._id;
    toUpdate.clearFields();
    Object.assign(toUpdate, dto);
    return await this.productionRepository.save(toUpdate);
  }

  async delete(_id: ObjectID): Promise<DeleteResult> {
    const toDelete = await findByField(this.productionRepository, { _id }, true);
    return await this.productionRepository.delete({ _id });
  }
}
