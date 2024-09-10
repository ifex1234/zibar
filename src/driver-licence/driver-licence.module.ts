import { Module } from '@nestjs/common';
import { DriverLicenceService } from './driver-licence.service';
import { DriverLicenceController } from './driver-licence.controller';

@Module({
  controllers: [DriverLicenceController],
  providers: [DriverLicenceService],
})
export class DriverLicenceModule {}
