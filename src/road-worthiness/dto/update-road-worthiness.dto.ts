import { PartialType } from '@nestjs/swagger';
import { CreateRoadWorthinessDto } from './create-road-worthiness.dto';

export class UpdateRoadWorthinessDto extends PartialType(CreateRoadWorthinessDto) {}
