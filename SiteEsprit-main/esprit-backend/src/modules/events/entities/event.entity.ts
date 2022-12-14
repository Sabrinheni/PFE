import { relatedEnum } from './../../../shared/enums/related.enum';
import { Entity, Column, ObjectIdColumn, Index, BeforeInsert, BeforeUpdate } from 'typeorm';
import { Transform } from 'class-transformer';
import { ObjectID } from 'mongodb';
import slugify from 'slugify';
import { IUser } from '../../../modules/users/interfaces/user.interface';
import { transformEntity } from '../../../shared/transformEntity.utlis';
import { eventTypes } from './event.enum';
import { convertBoolean } from '../../../shared/convertBoolean.utils';

@Entity('event')
export class EventEntity {
  constructor() {
    this.status = true;
    this.accepted = false;
    this.related = relatedEnum.esprit;
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
  accepted: boolean;

  /**
   * Related application to show on frontend (Esprit.tn or RDI)
   * More applications to add later
   **/
  @Column()
  related: relatedEnum;

  @Column()
  relatedClub: string;

  @Column()
  cover: string;

  @Column()
  images: string[];

  @Column()
  type: eventTypes;

  @Column()
  description: string;

  @Column()
  url: string;

  @Column()
  content: string;

  @Column()
  slug: string;

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
    this.slug = slugify(this.title);
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
    this.content = '';
  }
}
