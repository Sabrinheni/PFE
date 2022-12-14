import { RdiService } from './../rdi/rdi.service';
import { forwardRef, Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID } from 'mongodb';
import { DeleteResult, Repository } from 'typeorm';
import { cleaner } from '../../shared/file-cleaner.utils';
import { IGetUserAuthInfoRequest } from '../../shared/user-request.interface';
import { CreateMemberDto, UpdateMemberDto } from './dto';
import { MemberEntity } from './entities/member.entity';
import { findByField } from '../../shared/findByField.utils';

@Injectable({ scope: Scope.REQUEST })
export class MemberService {
  constructor(
    @InjectRepository(MemberEntity)
    private readonly memberRepository: Repository<MemberEntity>,
    @Inject(forwardRef(() => RdiService))
    private readonly rdiService: RdiService,
    @Inject(REQUEST) private readonly request: IGetUserAuthInfoRequest
  ) {}

  async findAll(): Promise<MemberEntity[]> {
    return await this.memberRepository.find();
  }

  async search(keyword): Promise<MemberEntity[]> {
    const reg = new RegExp(keyword, 'i');
    return await this.memberRepository.find({
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

  async findBySlug(slug): Promise<MemberEntity> {
    return await this.memberRepository.findOne({ slug });
  }

  async create(dto: CreateMemberDto): Promise<MemberEntity> {
    const newMember = Object.assign(new MemberEntity(), dto);
    newMember.userCreated = this.request.user._id;
    newMember.userUpdated = this.request.user._id;
    return await this.memberRepository.save(newMember);
  }

  async update(toUpdate: MemberEntity, dto: UpdateMemberDto): Promise<MemberEntity> {
    toUpdate.userUpdated = this.request.user._id;
    if (dto.image && toUpdate.image !== dto.image) {
      cleaner(toUpdate.image);
    }
    toUpdate.clearFields();
    Object.assign(toUpdate, dto);
    return await this.memberRepository.save(toUpdate);
  }

  async delete(_id: ObjectID): Promise<any> {
    const toDelete = await findByField(this.memberRepository, { _id }, true);
    await this.rdiService.deleteRelated(toDelete._id.toHexString());
    if (toDelete?.image) {
      cleaner(toDelete.image);
    }
    return await this.memberRepository.delete({ _id });
  }

  /**
   * Populate entit(y|ies) passed in paramter with "members"
   * @param entities Array of entities OR an entity to populate
   * @returns Entit(y|ies) populated
   */
  // tslint:disable-next-line: array-type
  public async populateMembers(entities: Array<any> | any): Promise<Array<any> | any> {
    // tslint:disable-next-line: curly
    if (!entities) return;

    let tmp = entities;
    if (!Array.isArray(tmp)) {
      tmp = [tmp];
    }

    for (const idx in tmp) {
      if (tmp.hasOwnProperty(idx)) {
        const { members } = tmp[idx];
        if (members) {
          if (!Array.isArray(tmp[idx].members)) {
            tmp[idx].members = [tmp[idx].members];
          }
          const populatedMembers = [];
          for (const index in tmp[idx].members) {
            if (ObjectID.isValid(tmp[idx].members[index])) {
              populatedMembers[index] = await findByField(
                this.memberRepository,
                { _id: tmp[idx].members[index] },
                false
              );
            } else {
              populatedMembers[index] = tmp[idx].members[index];
            }
          }
          tmp[idx].members = populatedMembers;
        }
      }
    }

    return Array.isArray(entities) ? tmp : tmp[0];
  }
}
