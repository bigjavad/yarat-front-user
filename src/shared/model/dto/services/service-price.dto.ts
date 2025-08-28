import {BaseEntity} from "@/shared/model/base/base-entity";

export class ServicePriceDto extends BaseEntity{
    price: string;
    discount: string;
    intro_text: string;
    body: string;
}
