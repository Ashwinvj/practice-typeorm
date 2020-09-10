import bcrypt from 'bcryptjs';
import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique, UpdateDateColumn, OneToOne, OneToMany, ManyToMany } from 'typeorm';
import Address from './address';
import { Order } from './order';

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
  mobile: string;

  @Column()
  password: string;

  @OneToMany(() => Address, (address: Address) => address.user)
  address: Address[];

  @ManyToMany(() => Order, (order : Order) => order.user)
  order : Order;

  @UpdateDateColumn()
  updatedDate: Date;

  @BeforeInsert()
  async setPassword() {
    // console.log("password",newPassword,this.password)
   this.password = await bcrypt.hash(this.password,10);
  }

  
}
