import { partnershipTypes } from './../entities/partnership.enum';
import { IsNotEmpty, IsEnum, IsString, IsOptional, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePartnershipDto {
  @ApiProperty()
  readonly _id: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  @Length(3, 80)
  readonly title: string;

  @ApiProperty()
  @IsOptional()
  image: string;

  @ApiProperty()
  @IsOptional()
  readonly url: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Length(0, 2000)
  readonly description: string;

  @IsEnum(partnershipTypes)
  @IsNotEmpty()
  @ApiProperty()
  readonly type: partnershipTypes;
}
