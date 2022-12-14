import { IsNotEmpty, IsString, IsArray, IsOptional, Length, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ObjectID } from 'mongodb';

export class CreateRdiDto {
  @ApiProperty()
  _id?: ObjectID;

  @ApiProperty()
  @IsNotEmpty()
  @Length(3, 80)
  @IsString()
  title: string;

  @ApiProperty()
  @IsOptional()
  image: string;

  @ApiProperty()
  @IsOptional()
  @IsUrl()
  url: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(0, 2000)
  description: string;

  @ApiProperty()
  @IsOptional()
  members: string[];

  @ApiProperty()
  @IsOptional()
  researchInterests: string[];
}
