import bcrypt from 'bcryptjs';
import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique, UpdateDateColumn, OneToOne } from 'typeorm';
import Address from './address';

@Entity()
@Unique(['email'])
export class User {
  static findOne(arg0: { where: { userId: any; }; relations: string[]; }) {
    throw new Error("Method not implemented.");
  }
  static create(userData: User) {
    throw new Error("Method not implemented.");
  }

  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToOne(() => Address, (address: Address) => address.user)
  address: Address[];

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  async setPassword(newPassword: string) {
    this.password = await bcrypt.hash(newPassword, 10);
  }

  @BeforeInsert()
  async encryptPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

}
