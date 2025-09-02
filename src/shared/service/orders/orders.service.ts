import {ActionResault} from "@/shared/model/base/action-resault";
import {fetchData} from "@/shared/service/fetch/fetch.service";
import {REST_CONST} from "@/shared/const/rest.const";
import {OrdersDto} from "@/shared/model/dto/orders/orders.dto";

export const saveOrders = async (data?:OrdersDto):Promise<ActionResault<OrdersDto>> => {
    return await fetchData(REST_CONST.ORDERS.SAVE, 'post', data)
}
