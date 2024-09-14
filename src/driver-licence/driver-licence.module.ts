/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { VehicleLicenceService } from './driver-licence.service';
import { VehicleLicenceController } from './driver-licence.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VehicleLicence, VehicleLicenceSchema } from './driver-licence.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: VehicleLicence.name, schema: VehicleLicenceSchema },
    ]),
  ],
  controllers: [VehicleLicenceController],
  providers: [VehicleLicenceService],
  exports: [VehicleLicenceService, MongooseModule],
})
export class VehicleLicenceModule {}
