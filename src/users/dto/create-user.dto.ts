/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  firstName: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  lastName: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  NIN: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  stateOfOrigin: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  stateOfResidence: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  LGAOfResidence: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  address: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  driverLicenceNo: string;
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  email: string;
  @IsNotEmpty()
  @ApiProperty()
  phoneNo: number;
}
