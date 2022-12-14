import { ClubEntity } from './../../clubs/entities/club.entity';
import { RdiEntity } from './../../rdi/entities/rdi.entity';
import { Entity, Column, BeforeInsert, ObjectIdColumn, Index, AfterLoad, BeforeUpdate } from 'typeorm';
import { Exclude, Expose, Transform } from 'class-transformer';
import { ObjectID } from 'mongodb';
import * as crypto from 'crypto';

import { transformEntity } from '../../../shared/transformEntity.utlis';
import { IUser } from '../interfaces/user.interface';

@Entity('user')
@Exclude()
export class UserEntity {
  @Expose()
  @Transform(transformEntity)
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  @Expose()
  @Index({ unique: true })
  username: string;

  @Expose()
  @Column()
  @Index({ unique: true })
  email: string;

  @Expose()
  @Column()
  roles: string[];

  @Expose()
  @Column()
  image: string;

  @Expose()
  @Column()
  status: boolean;

  @Column()
  password: string;

  @Expose({ groups: ['user'] })
  @Column()
  resetPasswordToken?: string;

  @Column()
  @Expose()
  club: string;

  @Column()
  @Expose()
  rdi: string;

  @Column()
  @Expose()
  prepa: string;
  @Column()
  @Expose()
  kindy: string;

  @Expose()
  @Column()
  @Transform(transformEntity)
  userCreated: ObjectID | IUser;

  @Expose()
  @Column()
  @Transform(transformEntity)
  userUpdated: ObjectID | IUser;

  @Expose()
  @Column()
  createdAt: Date;

  @Expose()
  @Column()
  lastUpdateAt: Date;

  tempPassword?: string;
  /**************** ACTIONS ****************/
  @AfterLoad()
  private loadTempPassword(): void {
    this.tempPassword = this.password;
  }

  @BeforeInsert()
  @BeforeUpdate()
  private beforeActions() {
    
    if (this.tempPassword !== this.password) {

      this.password = crypto.createHmac('sha256', this.password).digest('hex');
    
    }
    delete this.tempPassword;

    this.lastUpdateAt = new Date();
  }

  @BeforeInsert()
  private beforeInsertActions() {
    this.status = true;
    this.createdAt = new Date();
  }
}
