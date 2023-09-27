import { IsInt, IsString, IsStrongPassword } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @Column({ primary: true, generated: true })
  userId: number;

  @Column({ nullable: false })
  username: string;

  @Column({ nullable: false })
  @IsStrongPassword()
  password: string;
}
