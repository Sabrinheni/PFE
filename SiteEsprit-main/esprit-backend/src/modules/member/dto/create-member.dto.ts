import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';
import { ObjectID } from 'mongodb';

export class CreateMemberDto {
  @ApiProperty()
  _id?: ObjectID;

  @ApiProperty()
  @IsNotEmpty()
  @Length(3, 80)
  @IsString()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @Length(3, 80)
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsNotEmpty()
  @Length(3, 80)
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsOptional()
  image: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(0, 2000)
  description: string;

  @ApiProperty()
  @IsOptional()
  teachingAreas: string[];

  @ApiProperty()
  @IsOptional()
  researchInterests: string[];

  @ApiProperty()
  @IsOptional()
  externalLinks: string[];
}
