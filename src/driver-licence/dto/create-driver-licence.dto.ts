/* eslint-disable prettier/prettier */
// import { Date } from 'mongoose';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateVehicleLicenceDto {
  // validation file
  //The CreatevehicleLicenceDTO defines the properties that need to be sent to the POST /create-driver-licence
  //endpoint to create a new document.
  @ApiProperty()
  @IsNotEmpty()
  fileNumber: number;
  @ApiProperty()
  @IsNotEmpty()
  regNumber: string;
  @ApiProperty()
  @IsNotEmpty()
  engineNumber: number;
  @ApiProperty()
  @IsNotEmpty()
  chassisNumber: number;
  @ApiProperty()
  @IsNotEmpty()
  vehicleMake: string;
  @ApiProperty()
  @IsNotEmpty()
  colour: string;
  @ApiProperty()
  @IsNotEmpty()
  licenceFee: number;
  @ApiProperty()
  @IsNotEmpty()
  dateIssued: Date;
  @ApiProperty()
  @IsNotEmpty()
  dateExpiry: Date;
}
