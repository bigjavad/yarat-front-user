import {EN_status} from "@/shared/enum/base/EN_status";
import {Meta} from "@/shared/model/base/meta";

export class ActionResault<T>{
    data:T
    message:string
    toast:boolean
    status:EN_status
    success: boolean
    httpMessage: string
    code:string
    meta:Meta
}
