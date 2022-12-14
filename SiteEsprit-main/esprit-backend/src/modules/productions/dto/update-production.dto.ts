import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBooleanString, IsEnum, IsNotEmpty, IsOptional, IsString, Length, Matches } from 'class-validator';
import { ObjectID } from 'mongodb';
import { TypeProduction } from '../entities/production.enum';
export class UpdateProductionDto {
  @ApiProperty()
  _id?: ObjectID;

  @ApiProperty()
  @IsNotEmpty()
  @Length(50, 2000)
  @IsString()
  description: string;

  @ApiProperty()
  @IsEnum(TypeProduction)
  type: TypeProduction;

  @ApiProperty()
  @IsOptional()
  @IsString()
  url: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Matches(/^\d{4}\/\d{4}$/)
  session: string;

  @ApiProperty()
  @IsBooleanString()
  @IsOptional()
  inEsprit: boolean;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(0, 20)
  relatedTeam: string;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  members: string[];
}
