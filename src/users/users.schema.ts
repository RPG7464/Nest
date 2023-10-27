import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop({ nullable: false, unique: true })
  username: string;

  @Prop({ nullable: false })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
