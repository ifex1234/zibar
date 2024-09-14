/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type VehicleLicenceDocument = HydratedDocument<VehicleLicence>;

@Schema({ timestamps: true })
export class VehicleLicence {
  @Prop({ unique: true, immutable: true })
  fileNumber: number;
  @Prop({ unique: true, immutable: true })
  regNumber: string;
  @Prop({ unique: true, immutable: true })
  engineNumber: number;
  @Prop({ unique: true, immutable: true })
  chassisNumber: number;
  @Prop({ unique: true, immutable: true })
  vehicleMake: string;
  @Prop({ unique: true, immutable: true })
  colour: string;
  @Prop({ unique: true, immutable: true })
  licenceFee: number;
  @Prop({ unique: true, immutable: true })
  dateIssued: Date;
  @Prop({ unique: true, immutable: true })
  dateExpiry: Date;
}
export const VehicleLicenceSchema =
  SchemaFactory.createForClass(VehicleLicence);
