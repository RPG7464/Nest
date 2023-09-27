import { BadRequestException, Injectable,UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  //se encarga de buscar si existe el usuario en la BD
  async validate({ username, password }: RegisterDto) {
    const user = await this.userService.findOneByUsername(username);
    const pass = await bcrypt.compare(password, user.password);
    if (user && pass) {
      return user;
    }
    return null;
  }
  //se encarga de registrar el usuario en la BD buscando primero si este se encuentra para sino lanzar una excepcion y encripta la contraseña
  async register({ username, password }: RegisterDto) {
    const user = await this.userService.findOneByUsername(username);
    if (user) {
      throw new BadRequestException('Usuario ya existente en la Base de Datos');
    } else {
      return await this.userService.create({
        username,
        password: await bcrypt.hash(password, 10),
      });
    }
  }

  //se encarga de loguear al usuario proporcionandole una JWT
  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
