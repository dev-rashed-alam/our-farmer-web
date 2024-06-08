import axios from "axios";
import {API_BASE_URL} from "@/app/config/constant";
import {getReqHeaderConfig, printApiErrors} from "@/app/config/utils";

export const findSummary = async () => {
    try {
        const {data} = await axios.get(`${API_BASE_URL}/dashboard/admin/summary`, {
            headers: getReqHeaderConfig()
        })
        return data
    } catch (e) {
        printApiErrors(e)
    }
}
export const findOrderSummary = async () => {
    try {
        const {data} = await axios.get(`${API_BASE_URL}/dashboard/admin/orderSummary`, {
            headers: getReqHeaderConfig()
        })
        return data
    } catch (e) {
        printApiErrors(e)
    }
}