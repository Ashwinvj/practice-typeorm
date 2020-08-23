import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Address {
  static create(addressData: Address): Address | PromiseLike<Address> {
    throw new Error("Method not implemented.");
  }
  save() {
    throw new Error("Method not implemented.");
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;
 
  @Column()
  street: string;
 
  @Column()
  door: string;

  @OneToOne(() => User, (user: User) => user.address,{
  onDelete: "CASCADE"})
  user: User
}
export default Address;
