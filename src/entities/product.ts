import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { User } from "./User";
import { ProductDetail } from "./productDetails";

@Entity()
export class Product{
    static create(productData: Product): Product | PromiseLike<Product> {
        throw new Error("Method not implemented.");
      }
      save() {
        throw new Error("Method not implemented.");
      }
    

    @PrimaryGeneratedColumn('uuid')
    id : number;

    @Column()
    productId : number;

    @Column()
    productCount : number;

    @Column()
    totalRate : number;

    @ManyToMany(() => User, (user :User) => user.product)
    user: User;

    @ManyToMany(() => ProductDetail, (productDetail :ProductDetail) => productDetail.product)
    productDetail: ProductDetail;


}
export default Product;