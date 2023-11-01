import { UseGuards, applyDecorators } from '@nestjs/common';
import { Role } from '../enum/role.enum';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { RoleGuard } from '../guards/role.guard';
import { Roles } from './role.decorator';

export function Auth(role: Role) {
  return applyDecorators(Roles(role), UseGuards(JwtAuthGuard, RoleGuard));
}
