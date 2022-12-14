import { TypeProduction } from './production.enum';
import { ObjectID } from 'mongodb';
import { Transform } from 'class-transformer';
import { Entity, Column, ObjectIdColumn, Index, BeforeInsert, BeforeUpdate } from 'typeorm';
import { transformEntity } from 'src/shared/transformEntity.utlis';
import { IUser } from 'src/modules/users/interfaces/user.interface';
import { convertBoolean } from 'src/shared/convertBoolean.utils';

@Entity('production')
export class ProductionEntity {
  constructor() {
    this.inEsprit = true;
  }

  @Transform(transformEntity)
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  @Index({ unique: true })
  description: string;

  @Column()
  type: TypeProduction;

  @Column()
  url: string;

  @Column()
  relatedTeam: string;

  /*Represents the college year of the production 2018/2019, 2019/2020...ect */
  @Column()
  session: string;

  /*Has this production been made in Esprit (true) or not (false)*/
  @Column()
  inEsprit: boolean;

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
    this.lastUpdateAt = new Date();
    this.inEsprit = convertBoolean(this.inEsprit);
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
