/* eslint-disable prettier/prettier */
import {
  IsNotEmpty,
  IsNumber,
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
  readonly username: string;
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly code: number;
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  readonly email: string;
  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  readonly password: string;
}
