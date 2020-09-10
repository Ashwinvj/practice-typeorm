import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { SubService } from "./subService";
import { ServiceProvider } from "./serviceProvider";



@Entity()
export class Service {

    static create(serviceData: Service): Service | PromiseLike<Service> {
        throw new Error("Method not implemented.");
      }
      save() {
        throw new Error("Method not implemented.");
      }
    

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: number;

    @Column()
    iconName: string;

    @Column()
    description: string;

    @Column()
    active: true;

    @OneToMany(() => SubService, (subService :SubService) => subService.service)
    subService: SubService ;

    @ManyToOne(() => ServiceProvider, (serviceProvider: ServiceProvider) => serviceProvider.service)
    serviceProvider: ServiceProvider;

}
