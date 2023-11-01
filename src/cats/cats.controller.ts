import {Patch,Delete,Body,Controller,Get,Param,Post,UseGuards,} from '@nestjs/common';
import { CreateCatDto } from './dtos/create-cat.dto';
import { CatsService } from './cats.service';
import { UpdateCatDto } from './dtos/UpdateCatDto.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Roles } from 'src/auth/decorators/role.decorator';
import { Role } from 'src/auth/enum/role.enum';
import { RoleGuard } from 'src/auth/guards/role.guard';
import { Auth } from 'src/auth/decorators/auth.decorator';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  @Auth(Role.User)
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
