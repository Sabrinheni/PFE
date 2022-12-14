import { IsNotEmpty, IsEnum, IsOptional, IsBooleanString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ObjectID } from 'mongodb';
import { timeTableTitles } from '../entities/timeTable.enum';
export class UpdateTimeTableDto {
  @ApiProperty()
  _id?: ObjectID;

  @IsNotEmpty()
  @IsEnum(timeTableTitles)
  @ApiProperty()
  readonly title: timeTableTitles;

  @ApiProperty()
  @IsBooleanString()
  @IsOptional()
  status: boolean;

  @ApiProperty()
  @IsOptional()
  file: string;
}
