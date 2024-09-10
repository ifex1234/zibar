import { Module } from '@nestjs/common';
import { ProofOfOwnershipService } from './proof-of-ownership.service';
import { ProofOfOwnershipController } from './proof-of-ownership.controller';

@Module({
  controllers: [ProofOfOwnershipController],
  providers: [ProofOfOwnershipService],
})
export class ProofOfOwnershipModule {}
