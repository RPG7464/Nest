import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './cats.schema';
import { CreateCatDto } from './dtos/create-cat.dto';
import { UpdateCatDto } from './dtos/UpdateCatDto.dto';
import { Model } from 'mongoose';

@Injectable()
export class CatsService {
  constructor(
    @InjectModel(Cat.name)
    private catsModel: Model<Cat>,
  ) {}

  async create(createCatDto: CreateCatDto) {
    try {
      return await this.catsModel.create(createCatDto);
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    return await this.catsModel.find();
  }

  async findOne(id: string) {
    try {
      const cat = await this.catsModel.findOne({ id });
      if (!cat) {
        throw new NotFoundException('The cat was not found');
      }
      return cat;
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: string, updateCatDto: UpdateCatDto) {
    try {
      const cat = await this.catsModel.findById(id);
      if (!cat) throw new NotFoundException('The cat was not found');
      return await this.catsModel
        .updateOne(updateCatDto, {
          new: true,
        })
        .exec();
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: string) {
    try {
      const cat = await this.catsModel.findById(id);
      if (!cat) throw new NotFoundException('The cat was not found');
      return await this.catsModel.deleteOne({ id });
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
