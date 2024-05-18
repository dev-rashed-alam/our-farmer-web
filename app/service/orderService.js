import axios from "axios";
import {API_BASE_URL} from "@/app/config/constant";
import {printApiErrors} from "@/app/config/utils";

export const createNewOrder = async (reqData) => {
    try {
        const data = await axios.post(`${API_BASE_URL}/consumer/orders`, reqData)
        return data;
    } catch (e) {
        printApiErrors(e)
    }
}
