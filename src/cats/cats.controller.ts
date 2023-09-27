import {Patch,Delete,Body,Controller,Get,Param,Post,UseGuards,} from '@nestjs/common';
import { CreateCatDto } from './dtos/create-cat.dto';
import { CatsService } from './cats.service';
import { UpdateCatDto } from './dtos/UpdateCatDto.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.catsService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.catsService.findOne(id);
  }
  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: number, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(id, updateCatDto);
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.catsService.remove(id);
  }
}
