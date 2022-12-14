import { Transform } from 'class-transformer';
import { ObjectID } from 'mongodb';
import { BeforeInsert, BeforeUpdate, Column, Entity, ObjectIdColumn } from 'typeorm';
import { IUser } from '../../../modules/users/interfaces/user.interface';
import { transformEntity } from '../../../shared/transformEntity.utlis';

@Entity('faq')
export class FaqEntity {
  @Transform(transformEntity)
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  question: string;

  @Column()
  response: string;

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
  }

  @BeforeInsert()
  private beforeInsertActions() {
    this.createdAt = new Date();
  }
}
