import { Test, TestingModule } from '@nestjs/testing';
import { DriverLicenceController } from './vehicle-licence.controller';
import { DriverLicenceService } from './vehicle-licence.service';

describe('DriverLicenceController', () => {
  let controller: DriverLicenceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriverLicenceController],
      providers: [DriverLicenceService],
    }).compile();

    controller = module.get<DriverLicenceController>(DriverLicenceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
