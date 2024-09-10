import { Module } from '@nestjs/common';
import { RoadWorthinessService } from './road-worthiness.service';
import { RoadWorthinessController } from './road-worthiness.controller';

@Module({
  controllers: [RoadWorthinessController],
  providers: [RoadWorthinessService],
})
export class RoadWorthinessModule {}
