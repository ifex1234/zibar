import { Injectable } from '@nestjs/common';
import { CreateProofOfOwnershipDto } from './dto/create-proof-of-ownership.dto';
import { UpdateProofOfOwnershipDto } from './dto/update-proof-of-ownership.dto';

@Injectable()
export class ProofOfOwnershipService {
  create(createProofOfOwnershipDto: CreateProofOfOwnershipDto) {
    return 'This action adds a new proofOfOwnership';
  }

  findAll() {
    return `This action returns all proofOfOwnership`;
  }

  findOne(id: number) {
    return `This action returns a #${id} proofOfOwnership`;
  }

  update(id: number, updateProofOfOwnershipDto: UpdateProofOfOwnershipDto) {
    return `This action updates a #${id} proofOfOwnership`;
  }

  remove(id: number) {
    return `This action removes a #${id} proofOfOwnership`;
  }
}
