import axios from "axios";
import {API_BASE_URL} from "@/app/config/constant";
import {getReqConfig, getReqHeaderConfig, printApiErrors} from "@/app/config/utils";

export const findTnaByUser = async (token) => {
    try {
        const {data} = await axios.get(`${API_BASE_URL}/farmer/tna/by-user`, {
            headers: getReqConfig(token)
        })
        return data
    } catch (e) {
        printApiErrors(e)
    }
}

export const saveProductTna = async (postData) => {
    try {
        const {data} = await axios.post(`${API_BASE_URL}/admin/tna/save`, postData, {
            headers: getReqHeaderConfig()
        })
        return data
    } catch (e) {
        printApiErrors(e)
    }
}

export const getProductTnaById = async (id) => {
    try {
        const {data} = await axios.get(`${API_BASE_URL}/farmer/tna/${id}`, {
            headers: getReqHeaderConfig()
        })
        return data
    } catch (e) {
        printApiErrors(e)
    }
}

export const updateProductTnaById = async (id, postData) => {
    try {
        const {data} = await axios.put(`${API_BASE_URL}/farmer/tna/${id}`, postData, {
            headers: getReqHeaderConfig()
        })
        return data
    } catch (e) {
        printApiErrors(e)
    }
}