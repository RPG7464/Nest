import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common/pipes';

@Module({
  imports: [
    CatsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Rafael',
      database: 'Nest',
      autoLoadEntities: true,
      synchronize: true,
      migrations: ['src/migrations/*.ts'],
      migrationsTableName: 'migrations_TypeORM',
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [],
  providers: [{ provide: APP_PIPE, useClass: ValidationPipe }],
})
export class AppModule {}
