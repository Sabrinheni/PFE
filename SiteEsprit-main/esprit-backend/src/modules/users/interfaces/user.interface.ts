import { ClubEntity } from './../../clubs/entities/club.entity';
import { RdiEntity } from './../../rdi/entities/rdi.entity';
import { ObjectID } from 'mongodb';

export interface IUser {
  _id: ObjectID;
  username: string;
  email: string;
  roles: string[];
  resetPasswordToken?: string;
  image?: string;
  rdi: string;
  club: string;
}
export interface IUserLogin extends IUser {
  token: string;
}

export interface UserPop {
  user: IUser;
}
