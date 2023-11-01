import { IsString } from 'class-validator';
import {
  IsNotEmpty,
  IsStrongPassword,
} from 'class-validator/types/decorator/decorators';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsStrongPassword()
  @IsNotEmpty()
  password: string;

  role: string;
}
