import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsInt, IsString } from 'class-validator';

@Schema()
export class Cat {
  @Prop()
  nombre: string;

  @Prop()
  @IsString()
  raza: string;

  @Prop()
  @IsString()
  sexo: string;

  @Prop()
  @IsInt()
  edad: number;
}
export const CatSchema = SchemaFactory.createForClass(Cat);