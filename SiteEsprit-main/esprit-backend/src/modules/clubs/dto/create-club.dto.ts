import { clubTypes, sportTypes } from './../entities/club.enum';
import { IsNotEmpty, IsEnum, IsString, IsOptional, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClubDto {
  @ApiProperty()
  readonly _id: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  @Length(3, 80)
  readonly title: string;

  @ApiProperty()
  image: string;

  @ApiProperty()
  @IsOptional()
  readonly url: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Length(0, 2000)
  readonly description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(clubTypes)
  readonly type: clubTypes;

  @ApiProperty()
  @IsEnum(sportTypes)
  readonly sport: sportTypes;
}
