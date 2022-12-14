import { ApiProperty } from '@nestjs/swagger';
import { ObjectID } from 'mongodb';
import { IsOptional, IsString, IsArray, Length, IsEmail, IsIn } from 'class-validator';
import { roles } from '../../../guards/roles.array';
export class UpdateUserDto {
  @ApiProperty()
  _id?: ObjectID;

  @ApiProperty()
  @IsOptional()
  @Length(3, 30)
  readonly username: string;

  @ApiProperty()
  @IsOptional()
  @IsEmail()
  readonly email: string;

  @ApiProperty()
  @IsOptional()
  readonly password: string;

  @ApiProperty()
  @IsOptional()
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
  club: ObjectID;

  @ApiProperty()
  @IsOptional()
  @IsString()
  prepa: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  kindy: string;
}
