import { teftefaqTypes } from '../entities/teftefaq.enum';
import { IsNotEmpty, IsEnum, IsString, IsBooleanString, IsOptional, Length, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTefTefaqDto {
  @ApiProperty()
  readonly _id: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Length(0, 100)
  readonly description: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsDateString()
  readonly date: string;

  @IsNotEmpty()
  @IsEnum(teftefaqTypes)
  @ApiProperty()
  readonly type: teftefaqTypes;

  @ApiProperty()
  @IsBooleanString()
  @IsNotEmpty()
  isOpen: boolean;

  @ApiProperty()
  @IsBooleanString()
  @IsOptional()
  status: boolean;
}
