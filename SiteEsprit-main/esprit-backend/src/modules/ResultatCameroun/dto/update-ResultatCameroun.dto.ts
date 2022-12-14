import { ResultatCamerounTypes } from '../entities/ResultatCameroun.enum';
import { IsNotEmpty, IsString, IsEnum, IsOptional} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ObjectID } from 'mongodb';
export class UpdateResultatCamerounDto {
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

  @IsEnum(ResultatCamerounTypes)
  @IsNotEmpty()
  @ApiProperty()
  readonly type: ResultatCamerounTypes;
}
