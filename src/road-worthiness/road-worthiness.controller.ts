import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoadWorthinessService } from './road-worthiness.service';
import { CreateRoadWorthinessDto } from './dto/create-road-worthiness.dto';
import { UpdateRoadWorthinessDto } from './dto/update-road-worthiness.dto';

@Controller('road-worthiness')
export class RoadWorthinessController {
  constructor(private readonly roadWorthinessService: RoadWorthinessService) {}

  @Post()
  create(@Body() createRoadWorthinessDto: CreateRoadWorthinessDto) {
    return this.roadWorthinessService.create(createRoadWorthinessDto);
  }

  @Get()
  findAll() {
    return this.roadWorthinessService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roadWorthinessService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoadWorthinessDto: UpdateRoadWorthinessDto) {
    return this.roadWorthinessService.update(+id, updateRoadWorthinessDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roadWorthinessService.remove(+id);
  }
}
