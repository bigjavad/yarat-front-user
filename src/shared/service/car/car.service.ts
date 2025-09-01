import {ActionResault} from "@/shared/model/base/action-resault";
import {fetchData} from "@/shared/service/fetch/fetch.service";
import {REST_CONST} from "@/shared/const/rest.const";
import {CarDto} from "@/shared/model/dto/car/car.dto";

export const getListCar = async ():Promise<ActionResault<CarDto[]>> => {
    return await fetchData(REST_CONST.CAR.GET_LIST, 'get')
}

export const getBySlug = async (slug:string):Promise<ActionResault<CarDto>> => {
    return await fetchData(`${REST_CONST.CAR.GET_BY_SLUG}${slug}`, 'get')
}
