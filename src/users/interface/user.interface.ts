/* eslint-disable prettier/prettier */

import { Document } from 'mongoose';

export class IUser extends Document {
  readonly firstName: string;
  readonly lastName: string;
  readonly NIN: string;
  readonly VIN: string;
  readonly stateOfOrigin: string;
  readonly stateOfResidence: string;
  readonly LGAOfResidence: string;
  readonly address: string;
  readonly driverLicenceNo: string;
  readonly email: string;
  readonly phoneNo: number;
}
