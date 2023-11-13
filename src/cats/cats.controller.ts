import {
  Patch,
  Delete,
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { CreateCatDto } from './dtos/create-cat.dto';
import { CatsService } from './cats.service';
import { UpdateCatDto } from './dtos/UpdateCatDto.dto';
import { Role } from 'src/auth/enum/role.enum';
import { Auth } from 'src/auth/decorators/auth.decorator';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }
  @Get()
  findAll() {
    return this.catsService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catsService.findOne(id);
  }
  @Patch(':id')
  @Auth(Role.Admin)
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(id, updateCatDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.remove(id);
  }
}
