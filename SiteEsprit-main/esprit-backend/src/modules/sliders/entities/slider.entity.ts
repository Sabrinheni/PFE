import { Entity, Column, ObjectIdColumn, Index, BeforeInsert, BeforeUpdate } from 'typeorm';
import { Transform } from 'class-transformer';
import { ObjectID } from 'mongodb';

import { IUser } from '../../../modules/users/interfaces/user.interface';
import { transformEntity } from '../../../shared/transformEntity.utlis';
import { convertBoolean } from '../../../shared/convertBoolean.utils';
import { relatedEnum } from '../../../shared/enums/related.enum';

@Entity('slider')
export class SliderEntity {
  constructor() {
    this.status = true;
    this.related = relatedEnum.esprit;
  }

  @Transform(transformEntity)
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  @Index({ unique: true })
  title: string;

  @Column()
  date: Date;

  @Column()
  status: boolean;

  @Column()
  image: string;

  @Column()
  url: string;

  @Column()
  titleDescription: string;

  @Column()
  description: string;

  @Column()
  btnName: string;

  /**
   * Related application to show on frontend (Esprit.tn or RDI)
   * More applications to add later
   **/
  @Column()
  related: relatedEnum;

  @Column()
  @Transform(transformEntity)
  userCreated: ObjectID | IUser;

  @Column()
  createdAt: Date;

  @Column()
  @Transform(transformEntity)
  userUpdated: ObjectID | IUser;

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

  clearFields() {
    this.description = '';
    this.url = '';
    this.btnName = '';
    this.titleDescription = '';
  }
}
