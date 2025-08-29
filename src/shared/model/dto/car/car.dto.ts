import {BaseEntity} from "@/shared/model/base/base-entity";

export class CarDto extends BaseEntity {
    title?: string;
    image?: string[];
    description?:string;
    // body?:string;
    capacity?:number;
    // price?:number;
    // hasDiscount?:boolean;
    // discount?:number;
}
