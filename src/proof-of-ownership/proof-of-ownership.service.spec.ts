import { Test, TestingModule } from '@nestjs/testing';
import { ProofOfOwnershipService } from './proof-of-ownership.service';

describe('ProofOfOwnershipService', () => {
  let service: ProofOfOwnershipService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProofOfOwnershipService],
    }).compile();

    service = module.get<ProofOfOwnershipService>(ProofOfOwnershipService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
