import axios from "axios";
import {API_BASE_URL} from "@/app/config/constant";
import {printApiErrors} from "@/app/config/utils";


export const doLogin = async (requestBody) => {
    try {
        const {data} = await axios.post(`${API_BASE_URL}/auth/login`, requestBody);
        return data
    } catch (e) {
        printApiErrors(e)
    }
}

export const doRegistration = async (requestBody) => {
    try {
        const {data} = await axios.post(`${API_BASE_URL}/auth/registration`, requestBody);
        return data
    } catch (e) {
        printApiErrors(e)
    }
}