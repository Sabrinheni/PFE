import { IsNotEmpty, IsOptional, IsString, IsBooleanString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSliderDto {
  @ApiProperty()
  readonly _id: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  @Length(3, 80)
  readonly title: string;

  @ApiProperty()
  @IsOptional()
  @IsBooleanString()
  status: boolean;

  @ApiProperty()
  @IsOptional()
  image: string;

  @ApiProperty()
  @IsOptional()
  readonly url: string;

  @IsOptional()
  @ApiProperty()
  @IsString()
  @Length(0, 255)
  readonly titleDescription: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Length(0, 255)
  readonly description: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  @Length(3, 80)
  readonly btnName: string;
}
