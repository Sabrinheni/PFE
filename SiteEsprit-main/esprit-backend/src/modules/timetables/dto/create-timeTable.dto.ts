import { IsNotEmpty, IsEnum, IsOptional, IsBooleanString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { timeTableTitles } from '../entities/timeTable.enum';

export class CreateTimeTableDto {
  @ApiProperty()
  readonly _id: number;

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
