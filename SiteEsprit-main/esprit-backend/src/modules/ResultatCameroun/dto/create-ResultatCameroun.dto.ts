import { ResultatCamerounTypes } from '../entities/ResultatCameroun.enum';
import { IsNotEmpty, IsEnum, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateResultatCamerounDto {
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

  @IsEnum(ResultatCamerounTypes)
  @IsNotEmpty()
  @ApiProperty()
  readonly type: ResultatCamerounTypes;
}
