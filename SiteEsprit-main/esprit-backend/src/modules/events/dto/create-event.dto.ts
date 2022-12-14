import { eventTypes } from '../entities/event.enum';
import { IsNotEmpty, IsEnum, IsString, IsBooleanString, IsOptional, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEventDto {
  @ApiProperty()
  readonly _id: number;

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
  images: string[];
}
