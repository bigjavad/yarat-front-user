import {BaseEntity} from "@/shared/model/base/base-entity";
import {CarPropertyDto} from "@/shared/model/dto/car/car-property.dto";
import {EN_CarStatusEnum} from "@/shared/enum/form/EN_CarStatus.enum";
import {EN_CarCategoryEnum} from "@/shared/enum/form/EN_CarCategory.enum";

export class CarDto extends BaseEntity {
    title?: string;
    image?: string[];
    description?:string;
    slug?:string;
    body?:string;
    capacity?:number;
    price?:number;
    hasDiscount?:boolean;
    discount?:number;
    warranty:CarPropertyDto[];
    facilitiesList:CarPropertyDto[];
    carBodyColorId: number[];
    engine:CarPropertyDto[];
    suspensions:CarPropertyDto[];
    tire:CarPropertyDto[];
    break:CarPropertyDto[];
    dimensionsCapacity: CarPropertyDto[];
    expert:CarPropertyDto[];
    facilities:string[];
    carStatus: EN_CarStatusEnum;
    carCategory: EN_CarCategoryEnum;

}
