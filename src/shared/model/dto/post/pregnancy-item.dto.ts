import {BaseEntity} from "@/shared/model/base/base-entity";
import {ImageSizeVm} from "@/shared/model/vm/image-size.vm";
import {UserDto} from "@/shared/model/dto/user/user.dto";

export class PregnancyItemDto extends BaseEntity{
    read:number;
    intro:string;
    body:string;
    extra:{
        diet:string;
        medicinal_supplements:string;
        daily:string[];
        danger:string[];
    }
    image:ImageSizeVm;
    video:string;
    tags:string[];
    user:UserDto;
}
