import {API_BASE_URL} from "@/app/config/constant";
import axios from "axios";
import {printApiErrors} from "@/app/config/utils";

export const findAllUsers = async (userType) => {
    const res = await fetch(`${API_BASE_URL}/admin/users?userType=${userType}`, {cache: 'no-store'})
    if (!res.ok) {
        console.log(res)
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export const deleteUserById = async (id) => {
    try {
        const {data} = await axios.delete(`${API_BASE_URL}/admin/delete/user/${id}`);
        return data
    } catch (e) {
        printApiErrors(e)
    }
}