import {BaseEntity} from "@/shared/model/base/base-entity";
import {ImageDetailVm} from "@/shared/model/vm/image-detail.vm";

export class ServicesDto extends BaseEntity{
    intro_text: string;
    image: ImageDetailVm;
}
