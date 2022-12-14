import { IsNotEmpty, IsEnum, IsString, IsBooleanString, IsOptional, Length, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ObjectID } from 'mongodb';
import { eventTypes } from '../entities/event.enum';

export class UpdateEventDto {
  @ApiProperty()
  _id?: ObjectID;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  @Length(3, 80)
  readonly title: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Length(0, 2000)
  readonly description: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly url: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Length(0, 4000)
  readonly content: string;

  @IsNotEmpty()
  @IsEnum(eventTypes)
  @ApiProperty()
  readonly type: eventTypes;

  @ApiProperty()
  @IsBooleanString()
  @IsOptional()
  status: boolean;

  @ApiProperty()
  @IsOptional()
  cover: string;

  @ApiProperty()
  @IsOptional()
  @IsDateString()
  createdAt: string;

  @ApiProperty()
  @IsOptional()
  images: string[];

  @ApiProperty()
  @IsOptional()
  imagesToDelete: any[];
}
