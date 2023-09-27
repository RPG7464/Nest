import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class Cat {
  @PrimaryGeneratedColumn()
  @Column({ primary: true, generated: true })
  id: number;

  @Column()
  nombre: string;

  @Column()
  raza: string;

  @Column()
  sexo: string;

  @Column()
  edad: number;

  @DeleteDateColumn()
  deleteAt: Date;
}
