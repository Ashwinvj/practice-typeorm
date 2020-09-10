import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne } from "typeorm";
import { Product } from "./product";
import { Seller } from "./seller";

@Entity()
export class ProductDetail {

    static create(productDetailData: ProductDetail): ProductDetail | PromiseLike<ProductDetail> {
        throw new Error("Method not implemented.");
      }
      save() {
        throw new Error("Method not implemented.");
      }
    

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    productId: number;

    @Column()
    productName: string;

    @Column()
    productDesc: string;

    @Column()
    productRate: number;

    @ManyToMany(() => Product, (product :Product) => product.productDetail)
    product: Product ;

    @ManyToOne(() => Seller, (seller: Seller) => seller.productDetail)
    seller: Seller;

}
export default ProductDetail;