import { Test, TestingModule } from '@nestjs/testing';
import { DriverLicenceService } from './driver-licence.service';

describe('DriverLicenceService', () => {
  let service: DriverLicenceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DriverLicenceService],
    }).compile();

    service = module.get<DriverLicenceService>(DriverLicenceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
