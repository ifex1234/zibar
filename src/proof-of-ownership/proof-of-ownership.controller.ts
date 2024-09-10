import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProofOfOwnershipService } from './proof-of-ownership.service';
import { CreateProofOfOwnershipDto } from './dto/create-proof-of-ownership.dto';
import { UpdateProofOfOwnershipDto } from './dto/update-proof-of-ownership.dto';

@Controller('proof-of-ownership')
export class ProofOfOwnershipController {
  constructor(private readonly proofOfOwnershipService: ProofOfOwnershipService) {}

  @Post()
  create(@Body() createProofOfOwnershipDto: CreateProofOfOwnershipDto) {
    return this.proofOfOwnershipService.create(createProofOfOwnershipDto);
  }

  @Get()
  findAll() {
    return this.proofOfOwnershipService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proofOfOwnershipService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProofOfOwnershipDto: UpdateProofOfOwnershipDto) {
    return this.proofOfOwnershipService.update(+id, updateProofOfOwnershipDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proofOfOwnershipService.remove(+id);
  }
}
