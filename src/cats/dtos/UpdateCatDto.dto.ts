import { IsString } from 'class-validator';
import { IsInt, IsNumber, IsPositive, MinLength,} from 'class-validator';
import { IsOptional } from 'class-validator/types/decorator/decorators';
import {PartialType} from '@nestjs/swagger'
import { CreateCatDto } from './create-cat.dto';

export class UpdateCatDto extends PartialType(CreateCatDto) {
}
