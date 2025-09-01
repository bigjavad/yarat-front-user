import {BaseEntity} from "@/shared/model/base/base-entity";

export class OrdersDto extends BaseEntity {
    carId:number | null;
    content:string;
}
