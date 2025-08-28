import {BaseEntity} from "@/shared/model/base/base-entity";
import {ImageSizeVm} from "@/shared/model/vm/image-size.vm";

export class PregnancyDto extends BaseEntity {
    read: number;
    image: ImageSizeVm;
}
