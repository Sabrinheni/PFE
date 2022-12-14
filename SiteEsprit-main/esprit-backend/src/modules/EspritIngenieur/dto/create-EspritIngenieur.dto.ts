import { EspritIngenieurTypes } from '../entities/EspritIngenieur.enum';
import { IsNotEmpty, IsEnum, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEspritIngenieurDto {
  @ApiProperty()
  readonly _id: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly title: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly description: string;

  @IsEnum(EspritIngenieurTypes)
  @IsNotEmpty()
  @ApiProperty()
  readonly type: EspritIngenieurTypes;
}
