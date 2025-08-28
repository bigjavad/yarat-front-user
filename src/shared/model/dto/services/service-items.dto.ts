import {BaseEntity} from "@/shared/model/base/base-entity";
import {ServicePriceDto} from "@/shared/model/dto/services/service-price.dto";
import {ImageDetailVm} from "@/shared/model/vm/image-detail.vm";

export class ServiceItemsDto extends BaseEntity{
    price: ServicePriceDto[];
    intro_text:string;
    body: string;
    alert_box: string;
    image: ImageDetailVm
    banner: ImageDetailVm
}
