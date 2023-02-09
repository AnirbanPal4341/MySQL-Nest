import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('demo_user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Name: string;

  @Column()
  Email: string;

  @Column()
  Pincode: number;

  @Column({ default: true })
  isActive: boolean;
}
