import { unitTypes } from './../entities/unit.enum';
import { Module } from './../entities/module.entity';
import { IsNotEmpty, IsString, IsArray, IsOptional, Length, ValidateNested, IsDefined, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ObjectID } from 'mongodb';
import { Type } from 'class-transformer';

export class CreateUnitDto {
  @ApiProperty()
  _id?: ObjectID;

  @ApiProperty()
  @IsNotEmpty()
  @Length(3, 80)
  @IsString()
  title: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(0, 2000)
  description: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  videoUrl: string;

  @ApiProperty()
  @IsOptional()
  image: string;

  @ApiProperty()
  @IsOptional()
  file: string;

  @IsNotEmpty()
  @IsEnum(unitTypes)
  @ApiProperty()
  readonly type: unitTypes;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Module)
  modules: Module[];
}
