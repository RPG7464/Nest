import { IsString } from 'class-validator';
import { IsInt, IsNumber, IsPositive, MinLength,} from 'class-validator';
import { IsOptional } from 'class-validator/types/decorator/decorators';

export class CreateCatDto {
  @IsString()
  nombre: string;

  @IsString()
  raza: string;

  @IsString()
  sexo: string;

  @IsInt()
  @IsPositive()
  edad: number;
}
