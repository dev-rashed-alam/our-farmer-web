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

export const fetchAllOrders = async () => {
    const res = await fetch(`${API_BASE_URL}/admin/orders`, {cache: 'no-store'})
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export const fetchOrderById = async (id) => {
    const res = await fetch(`${API_BASE_URL}/admin/orders/${id}`, {cache: 'no-store'})
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export const updateOrder = async (id, reqData) => {
    const res = await axios.put(`${API_BASE_URL}/admin/orders/${id}`, {cache: 'no-store'})
    if (res.status != 200) {
        throw new Error('Failed to fetch data')
    }
    return res;
}