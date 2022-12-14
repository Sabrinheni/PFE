import { CustomPhoneNumber } from './PhoneNumberValidator';
import { IsNotEmpty, IsString, IsOptional, Length, IsEmail, Validate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ContactFormDto {
  @ApiProperty()
  @IsNotEmpty()
  @Length(3, 80)
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @Length(3, 80)
  @IsString()
  subject: string;

  @ApiProperty()
  @IsOptional()
  @Validate(CustomPhoneNumber)
  @IsString()
  number: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  service: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(0, 2000)
  message: string;
}
