/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
export class VehicleLicenceEntity {
  @ApiProperty()
  fileNumber: number;
  @ApiProperty()
  regNumber: string;
  @ApiProperty()
  engineNumber: number;
  @ApiProperty()
  chassisNumber: number;
  @ApiProperty()
  vehicleMake: string;
  @ApiProperty()
  colour: string;
  @ApiProperty()
  licenceFee: number;
  @ApiProperty()
  dateIssued: Date;
  @ApiProperty()
  dateExpiry: Date;
}
//Entity class that will be used to represent the object in the API layer, shape what we are expecting from our response.
