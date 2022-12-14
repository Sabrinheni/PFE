import { IsNotEmpty, IsEnum, IsString, IsOptional, Length, IsDateString, IsBooleanString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ObjectID } from 'mongodb';
import { teftefaqTypes } from '../entities/teftefaq.enum';

export class UpdateTefTefaqDto {
  @ApiProperty()
  _id?: ObjectID;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Length(0, 100)
  readonly description: string;

  @ApiProperty()
  @IsDateString()
  readonly date: string;

  @ApiProperty()
  @IsBooleanString()
  @IsNotEmpty()
  isOpen: boolean;

  @IsNotEmpty()
  @IsEnum(teftefaqTypes)
  @ApiProperty()
  readonly type: teftefaqTypes;
}
