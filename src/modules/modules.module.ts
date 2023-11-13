import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { CatsModule } from 'src/cats/cats.module';
import { DatabaseModule } from 'src/database/database.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [CatsModule, AuthModule, UsersModule, DatabaseModule],
  exports: [CatsModule, AuthModule, UsersModule, DatabaseModule],
})
export class ModulesModule {}
