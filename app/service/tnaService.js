import axios from "axios";
import {API_BASE_URL} from "@/app/config/constant";
import {getReqConfig, printApiErrors} from "@/app/config/utils";

export const findServiceByStatus = async (token, status) => {
    try {
        const {data} = await axios.get(`${API_BASE_URL}/farmer/services/${status}`, {
            headers: getReqConfig(token)
        })
        return data
    } catch (e) {
        printApiErrors(e)
    }
}