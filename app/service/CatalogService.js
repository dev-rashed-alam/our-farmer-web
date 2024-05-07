import {API_BASE_URL} from "@/app/config/constant";
import axios from "axios";
import {printApiErrors} from "@/app/config/utils";

export const findAllCatalogs = async () => {
    const res = await fetch(`${API_BASE_URL}/farmer/catalogs`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export const findCatalogById = async (id) => {
    const res = await fetch(`${API_BASE_URL}/farmer/catalog/${id}`, {cache: 'no-store'})
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export const findAllCountryData = async () => {
    try {
        const {data} = await axios.get(`${API_BASE_URL}/master-data/country`);
        return data
    } catch (e) {
        printApiErrors(e)
    }
}

export const findAllCategories = async () => {
    try {
        const {data} = await axios.get(`${API_BASE_URL}/farmer/categories`);
        return data
    } catch (e) {
        printApiErrors(e)
    }
}

export const saveCatalogByStage = async (inputData, stage) => {
    try {
        const {data} = await axios.post(`${API_BASE_URL}/farmer/catalog/save/${stage}`, inputData);
        return data
    } catch (e) {
        printApiErrors(e)
    }
}

export const updateCatalogByStage = async (inputData, stage, id) => {
    try {
        const {data} = await axios.put(`${API_BASE_URL}/farmer/catalog/update/${stage}/${id}`, inputData);
        return data
    } catch (e) {
        printApiErrors(e)
    }
}