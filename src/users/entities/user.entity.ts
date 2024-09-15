/* eslint-disable prettier/prettier */

import { ApiProperty } from '@nestjs/swagger';

export class UserEntity {
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
  @ApiProperty()
  VIN: string;
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  NIN: string;
  @ApiProperty()
  stateOfOrigin: string;
  @ApiProperty()
  stateOfResidence: string;
  @ApiProperty()
  LGAOfResidence: string;
  @ApiProperty()
  address: string;
  @ApiProperty()
  driverLicenceNo: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  phoneNo: number;
}
