import {API_BASE_URL} from "@/app/config/constant";
import axios from "axios";
import {getReqConfig, getReqHeaderConfig, printApiErrors} from "@/app/config/utils";

export const findAllCatalogs = async (token) => {
    const res = await fetch(`${API_BASE_URL}/farmer/catalogs`, {cache: 'no-store', headers: getReqConfig(token)})
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export const findAllCatalogsByUser = async () => {
    const res = await fetch(`${API_BASE_URL}/farmer/catalogs/by-user`, {
        cache: 'no-store',
        headers: getReqHeaderConfig()
    })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export const findCatalogById = async (id, token) => {
    try {
        const {data} = await axios.get(`${API_BASE_URL}/farmer/catalog/${id}`, {
            headers: getReqConfig(token)
        })
        return data
    } catch (e) {
        printApiErrors(e)
    }
}

export const findAllCountryData = async () => {
    try {
        const {data} = await axios.get(`${API_BASE_URL}/master-data/country`, {
            headers: getReqHeaderConfig()
        });
        return data
    } catch (e) {
        printApiErrors(e)
    }
}

export const findAllCategories = async () => {
    try {
        const {data} = await axios.get(`${API_BASE_URL}/farmer/categories`, {
            headers: getReqHeaderConfig()
        });
        return data
    } catch (e) {
        printApiErrors(e)
    }
}

export const saveCatalogByStage = async (inputData, stage) => {
    try {
        const {data} = await axios.post(`${API_BASE_URL}/farmer/catalog/save/${stage}`, inputData, {
            headers: getReqHeaderConfig()
        });
        return data
    } catch (e) {
        printApiErrors(e)
    }
}

export const updateCatalogByStage = async (inputData, stage, id) => {
    try {
        const {data} = await axios.put(`${API_BASE_URL}/farmer/catalog/update/${stage}/${id}`, inputData, {
            headers: getReqHeaderConfig()
        });
        return data
    } catch (e) {
        printApiErrors(e)
    }
}
export const updateCatalogByStatus = async (status, id) => {
    try {
        const {data} = await axios.put(`${API_BASE_URL}/farmer/catalog/change/status/${status}/${id}`, {}, {
            headers: getReqHeaderConfig()
        });
        return data
    } catch (e) {
        printApiErrors(e)
    }
}
export const deleteCatalogById = async (id) => {
    try {
        const {data} = await axios.delete(`${API_BASE_URL}/farmer/remove/catalog/${id}`, {
            headers: getReqHeaderConfig()
        });
        return data
    } catch (e) {
        printApiErrors(e)
    }
}

export const saveCatalogService = async (inputData) => {
    try {
        const {data} = await axios.post(`${API_BASE_URL}/farmer/service/save`, inputData, {
            headers: getReqHeaderConfig()
        });
        return data
    } catch (e) {
        printApiErrors(e)
    }
}

export const updateCatalogService = async (id, inputData) => {
    try {
        const {data} = await axios.put(`${API_BASE_URL}/farmer/service/update/${id}`, inputData, {
            headers: getReqHeaderConfig()
        });
        return data
    } catch (e) {
        printApiErrors(e)
    }
}

export const findAllCatalogServicesByUser = async (token) => {
    const res = await fetch(`${API_BASE_URL}/farmer/services/by-user`, {
        cache: 'no-store',
        headers: getReqConfig(token)
    })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export const findAllCatalogServices = async (token) => {
    const res = await fetch(`${API_BASE_URL}/farmer/services`, {
        cache: 'no-store',
        headers: getReqConfig(token)
    })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export const findServiceById = async (id, token) => {
    try {
        const {data} = await axios.get(`${API_BASE_URL}/farmer/service/${id}`, {
            headers: getReqConfig(token)
        })
        return data
    } catch (e) {
        printApiErrors(e)
    }
}

export const deleteServiceById = async (id) => {
    try {
        const {data} = await axios.delete(`${API_BASE_URL}/farmer/service/remove/${id}`, {
            headers: getReqHeaderConfig()
        });
        return data
    } catch (e) {
        printApiErrors(e)
    }
}