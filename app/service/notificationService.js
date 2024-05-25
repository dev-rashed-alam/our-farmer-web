import {getReqConfig, getReqHeaderConfig, printApiErrors} from "@/app/config/utils";
import axios from "axios";
import {API_BASE_URL} from "@/app/config/constant";

export const findAllNotifications = async () => {
    try {
        const {data} = await axios.get(`${API_BASE_URL}/notification/all`, {
            headers: getReqHeaderConfig()
        })
        return data
    } catch (e) {
        printApiErrors(e)
    }
}
export const toggleNotificationReadStatusById = async (id, isRead) => {
    try {
        const {data} = await axios.get(`${API_BASE_URL}/notification/change-status/${id}/${isRead}`, {
            headers: getReqHeaderConfig()
        })
        return data
    } catch (e) {
        printApiErrors(e)
    }
}