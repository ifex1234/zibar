import { PartialType } from '@nestjs/swagger';
import { CreateDriverLicenceDto } from './create-driver-licence.dto';

export class UpdateDriverLicenceDto extends PartialType(CreateDriverLicenceDto) {}
