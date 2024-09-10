import { Test, TestingModule } from '@nestjs/testing';
import { RoadWorthinessService } from './road-worthiness.service';

describe('RoadWorthinessService', () => {
  let service: RoadWorthinessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoadWorthinessService],
    }).compile();

    service = module.get<RoadWorthinessService>(RoadWorthinessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
