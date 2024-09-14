/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/swagger';
import { CreateVehicleLicenceDto } from './create-driver-licence.dto';

export class UpdateVehicleLicenceDto extends PartialType(
  CreateVehicleLicenceDto,
) {}
