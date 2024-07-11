import axios from "axios";
import {API_BASE_URL} from "@/app/config/constant";
import {printApiErrors} from "@/app/config/utils";

export const createNewProduct = async (reqData) => {
    try {
        const formData = new FormData();
        for (let item in reqData) {
            formData.append(item, reqData[item])
        }
        return await axios.post(`${API_BASE_URL}/admin/products`, formData);
    } catch (e) {
        printApiErrors(e)
    }
}

export const fetchAllProducts = async () => {
    const res = await fetch(`${API_BASE_URL}/admin/products`, {cache: 'no-store'})
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}