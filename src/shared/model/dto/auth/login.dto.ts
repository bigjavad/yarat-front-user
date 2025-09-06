import {BaseEntity} from "@/shared/model/base/base-entity";
import {EN_RoleEnum} from "@/shared/enum/form/EN_Role.enum";

export class LoginDto extends BaseEntity {
    phoneNumber: string | number | undefined;
    password: string | undefined;
    token: string | undefined;
    fullName: string;
    code: number | undefined;
    firstname: string | undefined;
    lastname: string | undefined;
    role: EN_RoleEnum | undefined;
    provinceId: number;
    cityId: number;
}
