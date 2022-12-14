import { IsNotEmpty, IsOptional, IsString, IsArray, IsEmail, Length, IsIn } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ObjectID } from 'mongodb';
import { roles } from '../../../guards/roles.array';

export class CreateUserDto {
  @ApiProperty()
  _id?: ObjectID;

  @ApiProperty()
  @IsNotEmpty()
  @Length(3, 30)
  readonly username: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsIn(roles, { each: true })
  @IsString({ each: true })
  @IsArray()
  roles: string[];

  @ApiProperty()
  @IsOptional()
  @IsString()
  image: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  rdi: ObjectID;

  @ApiProperty()
  @IsOptional()
  @IsString()
  prepa: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  kindy: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  club: ObjectID;
}
