import { Test, TestingModule } from '@nestjs/testing';
import { RoadWorthinessController } from './road-worthiness.controller';
import { RoadWorthinessService } from './road-worthiness.service';

describe('RoadWorthinessController', () => {
  let controller: RoadWorthinessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoadWorthinessController],
      providers: [RoadWorthinessService],
    }).compile();

    controller = module.get<RoadWorthinessController>(RoadWorthinessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
