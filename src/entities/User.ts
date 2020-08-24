import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany} from "typeorm";
import { Address } from "./Address";
import { Product } from "./product";

@Entity()
export class User {
    [x: string]: any;
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
    age: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    phoneNumber: number;

    @OneToMany(() => Address, (address: Address) => address.user)
    address: Address[];

    @ManyToMany(() => Product, (product : Product) => product.user)
    product : Product;

}
export default User;

//async setPassword(newPassword: string) {
  //  this.password = await bcrypt.hash(newPassword, 10);


  

