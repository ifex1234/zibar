/* eslint-disable prettier/prettier */
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  IsEmail,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateLoginDto {
  @IsString()
  @MaxLength(15)
  @IsNotEmpty()
  @ApiProperty()
  username: string;
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;
  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  password: string;
}
