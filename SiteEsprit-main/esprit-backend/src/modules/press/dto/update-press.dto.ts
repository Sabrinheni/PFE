import { IsNotEmpty, IsEnum, IsBooleanString, IsString, IsOptional, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ObjectID } from 'mongodb';
import { pressTypes } from '../entities/press.enum';
export class UpdatePressDto {
  @ApiProperty()
  _id?: ObjectID;

  @ApiProperty()
  @IsNotEmpty()
  @Length(3, 80)
  readonly title: string;

  @ApiProperty()
  @IsBooleanString()
  @IsOptional()
  status: boolean;

  @ApiProperty()
  @IsOptional()
  image: string;

  @ApiProperty()
  @IsOptional()
  file: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Length(0, 2000)
  description: string;

  @IsNotEmpty()
  @IsEnum(pressTypes)
  @IsOptional()
  @ApiProperty()
  readonly type: pressTypes;
}
