import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop({ nullable: false, unique: true })
  username: string;

  @Prop({ nullable: false })
  password: string;

  @Prop({ default: 'user' })
  role: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
