import {BaseEntity} from "@/shared/model/base/base-entity";
import {EN_RoleEnum} from "@/shared/enum/form/EN_Role.enum";

export class LoginDto extends BaseEntity{
    phoneNumber:string;
    password:string;
    token:string;
    fullName:string;
    code:number;
    firstname:string;
    lastname:string;
    role: EN_RoleEnum;
    provinceId: number;
    cityId: number;
}
