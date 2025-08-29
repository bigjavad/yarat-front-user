import {fetchData} from "@/shared/service/fetch/fetch.service";
import {REST_CONST} from "@/shared/const/rest.const";
import {ActionResault} from "@/shared/model/base/action-resault";
import {LoginDto} from "@/shared/model/dto/auth/login.dto";

export const loginService=async (data:LoginDto):Promise<ActionResault<LoginDto>> => {
    return await fetchData(REST_CONST.AUTH.LOGIN, 'post', data)
}

export const registerService = async (data:LoginDto):Promise<ActionResault<LoginDto>> => {
    return await fetchData(REST_CONST.AUTH.VALID_SECURITY_CODE, 'post', data)
}
