import { Entity, Column, ObjectIdColumn, Index, BeforeInsert, BeforeUpdate } from 'typeorm';
import { Transform } from 'class-transformer';
import { ObjectID } from 'mongodb';
import { convertBoolean } from '../../../shared/convertBoolean.utils';

import { IUser } from '../../../modules/users/interfaces/user.interface';
import { transformEntity } from '../../../shared/transformEntity.utlis';
import { pressTypes } from './press.enum';

@Entity('press')
export class PressEntity {
  constructor() {
    this.status = true;
  }

  @Transform(transformEntity)
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  @Index({ unique: true })
  title: string;

  @Column()
  status: boolean;

  @Column()
  image: string;

  @Column()
  file: string;

  @Column()
  type: pressTypes;

  @Column()
  description: string;

  @Column()
  createdAt: Date;

  @Column()
  lastUpdateAt: Date;

  @Column()
  @Transform(transformEntity)
  userCreated: ObjectID | IUser;

  @Column()
  @Transform(transformEntity)
  userUpdated: ObjectID | IUser;

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

  clearFields() {
    this.description = '';
  }
}
