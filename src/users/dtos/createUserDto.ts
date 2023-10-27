import { IsString } from 'class-validator';
import { IsStrongPassword } from 'class-validator/types/decorator/decorators';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsStrongPassword()
  password: string;
}
