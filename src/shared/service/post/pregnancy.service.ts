import {ActionResault} from "@/shared/model/base/action-resault";
import {fetchData} from "@/shared/service/fetch/fetch.service";
import {REST_CONST} from "@/shared/const/rest.const";
import {PregnancyDto} from "@/shared/model/dto/post/pregnancy.dto";
import {PregnancyItemDto} from "@/shared/model/dto/post/pregnancy-item.dto";
import {creatorLink} from "@/shared/service-ui/helper-link";

export const pregnancy=async ():Promise<ActionResault<PregnancyDto[]>> =>{
    return await fetchData<ActionResault<PregnancyDto[]>>( REST_CONST.POST.PREGNANCY,'get')
}

export const pregnancyItem=async (slug:string):Promise<ActionResault<PregnancyItemDto>> =>{
    return await fetchData<ActionResault<PregnancyItemDto>>( creatorLink([REST_CONST.POST.PREGNANCY,slug]),'get')
}
