import { EspritIngenieurTypes } from '../entities/EspritIngenieur.enum';
import { IsNotEmpty, IsString, IsEnum, IsOptional} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ObjectID } from 'mongodb';
export class UpdateEspritIngenieurDto {
  @ApiProperty()
  _id?: ObjectID;

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
