import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne } from "typeorm";
import { User } from "./User";
import { Seller } from "./seller";

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

  @Column()
  city : string;

  @Column()
  pinCode : number;

  @ManyToOne(() => User, (user: User) => user.address,{
  onDelete: "CASCADE"})
  user: User;

  @ManyToOne(() => Seller, (seller: Seller) => seller.address,{
  onDelete: "CASCADE"})
  seller: Seller;
}
export default Address;
