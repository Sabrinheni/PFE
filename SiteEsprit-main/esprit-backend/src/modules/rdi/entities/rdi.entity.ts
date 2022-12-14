import { Entity, Column, ObjectIdColumn, Index, BeforeInsert, BeforeUpdate } from 'typeorm';
import { Transform } from 'class-transformer';
import { ObjectID } from 'mongodb';

import { IUser } from '../../../modules/users/interfaces/user.interface';
import { transformEntity } from '../../../shared/transformEntity.utlis';
import slugify from 'slugify';

@Entity('rdi')
export class RdiEntity {
  constructor() {
    this.members = [];
    this.researchInterests = [];
  }

  @Transform(transformEntity)
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  @Index({ unique: true })
  title: string;

  @Column()
  image: string;

  @Column()
  url: string;

  @Column()
  description: string;

  @Column()
  slug: string;

  @Column()
  researchInterests: string[];

  @Column()
  members: string[];

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
    if (typeof this.members === 'string') {
      this.members = [this.members];
    }
    if (typeof this.researchInterests === 'string') {
      this.researchInterests = [this.researchInterests];
    }
    this.lastUpdateAt = new Date();
    this.slug = slugify(this.title);
  }

  @BeforeInsert()
  private beforeInsertActions() {
    this.createdAt = new Date();
  }

  clearFields() {
    this.description = '';
    this.url = '';
  }
}
