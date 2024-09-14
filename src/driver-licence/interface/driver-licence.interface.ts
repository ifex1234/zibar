/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';

export interface IVehicleLicence extends Document {
  readonly fileNumber: number;

  readonly regNumber: string;

  readonly engineNumber: number;

  readonly chassisNumber: number;

  readonly vehicleMake: string;

  readonly colour: string;

  readonly licenceFee: number;

  readonly dateIssued: Date;

  readonly dateExpiry: Date;
}
