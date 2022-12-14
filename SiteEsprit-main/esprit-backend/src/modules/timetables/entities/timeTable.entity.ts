import { Entity, Column, ObjectIdColumn, Index, BeforeInsert, BeforeUpdate } from 'typeorm';
import { Transform } from 'class-transformer';
import { ObjectID } from 'mongodb';

import { IUser } from '../../../modules/users/interfaces/user.interface';
import { transformEntity } from '../../../shared/transformEntity.utlis';
import { timeTableTitles } from './timeTable.enum';
import { convertBoolean } from '../../../shared/convertBoolean.utils';

@Entity('timeTable')
export class TimeTableEntity {
  constructor() {
    this.status = true;
  }

  @Transform(transformEntity)
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  title: timeTableTitles;

  @Column()
  file: string;

  @Column()
  status: boolean;

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
    this.lastUpdateAt = new Date();
    this.status = convertBoolean(this.status);
  }

  @BeforeInsert()
  private beforeInsertActions() {
    this.createdAt = new Date();
  }
}
