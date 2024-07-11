import {API_BASE_URL} from "@/app/config/constant";
import axios from "axios";
import {getReqConfig, getReqHeaderConfig, getReqHeaderConfigWithMultiPart, printApiErrors} from "@/app/config/utils";

export const findAllUsers = async (userType, token) => {
    const res = await fetch(`${API_BASE_URL}/admin/users?userType=${userType}`, {
        cache: 'no-store',
        headers: getReqConfig(token)
    })
    if (!res.ok) {
        console.log(res)
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export const findUserById = async (userId, token) => {
    const res = await fetch(`${API_BASE_URL}/admin/user/${userId}`, {cache: 'no-store', headers: getReqConfig(token)})
    if (!res.ok) {
        console.log(res)
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export const deleteUserById = async (id) => {
    try {
        const {data} = await axios.delete(`${API_BASE_URL}/admin/delete/user/${id}`, {
            headers: getReqHeaderConfig()
        });
        return data
    } catch (e) {
        printApiErrors(e)
    }
}

export const updateUserById = async (id, postData) => {
    try {
        const formData = new FormData();
        for (let item in postData) {
            formData.append(item, postData[item])
        }
        const {data} = await axios.put(`${API_BASE_URL}/admin/user/${id}`, formData, {
            headers: getReqHeaderConfigWithMultiPart()
        });
        return data
    } catch (e) {
        printApiErrors(e)
    }
}

export const updateUserStatusById = async (id, postData) => {
    try {
        const {data} = await axios.put(`${API_BASE_URL}/admin/user/change-status/${id}`, postData, {
            headers: getReqHeaderConfig()
        });
        return data
    } catch (e) {
        printApiErrors(e)
    }
}