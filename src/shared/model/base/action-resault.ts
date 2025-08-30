import {EN_status} from "@/shared/enum/base/EN_status";
import {Meta} from "@/shared/model/base/meta";

export class ActionResault<T> {
    data: T | null = null;
    message: string = '';
    toast: boolean = false;
}