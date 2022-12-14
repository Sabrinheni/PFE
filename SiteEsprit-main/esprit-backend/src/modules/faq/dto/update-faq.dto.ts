import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';
import { ObjectID } from 'mongodb';
export class UpdateFaqDto {
  @ApiProperty()
  _id?: ObjectID;

  @ApiProperty()
  @IsNotEmpty()
  @Length(3, 500)
  @IsString()
  question: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(0, 4000)
  response: string;
}
