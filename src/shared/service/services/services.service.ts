import {ActionResault} from "@/shared/model/base/action-resault";
import {ServicesDto} from "@/shared/model/dto/services/services.dto";
import {fetchData} from "@/shared/service/fetch/fetch.service";
import {REST_CONST} from "@/shared/const/rest.const";
import {ServiceItemsDto} from "@/shared/model/dto/services/service-items.dto";
import {creatorLink} from "@/shared/service-ui/helper-link";

export const services=async ():Promise<ActionResault<ServicesDto[]>> =>{
    return await fetchData<ActionResault<ServicesDto[]>>( REST_CONST.SERVICES,'get')
}

export const serviceItems=async (url:string):Promise<ActionResault<ServiceItemsDto>> =>{
    return await fetchData<ActionResault<ServiceItemsDto>>( creatorLink([REST_CONST.SERVICES,url]),'get')
}
