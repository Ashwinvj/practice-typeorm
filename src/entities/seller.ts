import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import {Address } from "./address";
import { ProductDetail } from "./productDetails";
import { User } from "./User";

@Entity()
export class Seller {
    static create(sellerData: Seller): Seller | PromiseLike<Seller> {
        throw new Error("Method not implemented.");
      }
      save() {
        throw new Error("Method not implemented.");
      }
    

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    sellerName: string;

    @Column()
    email: string;

    @OneToMany(() => Address, (address: Address) => address.seller)
    address: Address[];

    @OneToMany(() => ProductDetail, (productDetail: ProductDetail) => productDetail.seller)
    productDetail: ProductDetail[];

}
export default Seller;

    