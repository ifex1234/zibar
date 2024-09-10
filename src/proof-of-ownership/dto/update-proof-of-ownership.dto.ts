import { PartialType } from '@nestjs/swagger';
import { CreateProofOfOwnershipDto } from './create-proof-of-ownership.dto';

export class UpdateProofOfOwnershipDto extends PartialType(CreateProofOfOwnershipDto) {}
