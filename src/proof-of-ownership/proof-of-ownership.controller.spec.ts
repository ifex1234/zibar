import { Test, TestingModule } from '@nestjs/testing';
import { ProofOfOwnershipController } from './proof-of-ownership.controller';
import { ProofOfOwnershipService } from './proof-of-ownership.service';

describe('ProofOfOwnershipController', () => {
  let controller: ProofOfOwnershipController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProofOfOwnershipController],
      providers: [ProofOfOwnershipService],
    }).compile();

    controller = module.get<ProofOfOwnershipController>(ProofOfOwnershipController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
