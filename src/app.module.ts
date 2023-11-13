import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common/pipes';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { ValidationSchema } from './config/validationSchema';
import { ModulesModule } from './modules/modules.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema: ValidationSchema,
    }),
    ModulesModule,
  ],
  controllers: [],
  providers: [{ provide: APP_PIPE, useClass: ValidationPipe }, ConfigService],
  exports: [ConfigModule],
})
export class AppModule {}
