import { Injectable } from '@nestjs/common';
import { CreateRoadWorthinessDto } from './dto/create-road-worthiness.dto';
import { UpdateRoadWorthinessDto } from './dto/update-road-worthiness.dto';

@Injectable()
export class RoadWorthinessService {
  create(createRoadWorthinessDto: CreateRoadWorthinessDto) {
    return 'This action adds a new roadWorthiness';
  }

  findAll() {
    return `This action returns all roadWorthiness`;
  }

  findOne(id: number) {
    return `This action returns a #${id} roadWorthiness`;
  }

  update(id: number, updateRoadWorthinessDto: UpdateRoadWorthinessDto) {
    return `This action updates a #${id} roadWorthiness`;
  }

  remove(id: number) {
    return `This action removes a #${id} roadWorthiness`;
  }
}
