import { ProductionEntity } from './../../productions/entities/production.entity';
import { Entity, Column, ObjectIdColumn, Index, BeforeInsert, BeforeUpdate } from 'typeorm';
import { Transform } from 'class-transformer';
import { ObjectID } from 'mongodb';

import { IUser } from '../../../modules/users/interfaces/user.interface';
import { transformEntity } from '../../../shared/transformEntity.utlis';
import slugify from 'slugify';

@Entity('member')
export class MemberEntity {
  constructor() {
    this.externalLinks = [];
    this.researchInterests = [];
    this.teachingAreas = [];
  }
  @Transform(transformEntity)
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  title: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  image: string;

  @Column()
  description: string;

  @Column()
  slug: string;

  @Column()
  teachingAreas: string[];

  @Column()
  researchInterests: string[];

  @Column()
  externalLinks: string[];

  @Column()
  @Transform(transformEntity)
  userCreated: ObjectID | IUser;

  @Column()
  @Transform(transformEntity)
  userUpdated: ObjectID | IUser;

  @Column()
  createdAt: Date;

  @Column()
  lastUpdateAt: Date;

  /**************** ACTIONS ****************/
  @BeforeInsert()
  @BeforeUpdate()
  private beforeActions() {
    if (typeof this.teachingAreas === 'string') {
      this.teachingAreas = [this.teachingAreas];
    }
    if (typeof this.researchInterests === 'string') {
      this.researchInterests = [this.researchInterests];
    }
    if (typeof this.externalLinks === 'string') {
      this.externalLinks = [this.externalLinks];
    }
    this.lastUpdateAt = new Date();
    this.slug = slugify(this.lastName) + '-' + slugify(this.firstName);
  }

  @BeforeInsert()
  private beforeInsertActions() {
    this.createdAt = new Date();
  }

  clearFields() {
    this.description = '';
  }
}
