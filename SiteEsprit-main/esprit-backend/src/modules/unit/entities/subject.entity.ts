import { IsNotEmpty, IsString } from 'class-validator';

export class Subject {
  @IsNotEmpty()
  @IsString()
  title: string;
  @IsNotEmpty()
  @IsString()
  ects: number;
}
