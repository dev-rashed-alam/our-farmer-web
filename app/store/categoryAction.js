import {API_BASE_URL} from "@/app/config/constant";
import axios from "axios";
import {printApiErrors} from "@/app/config/utils";

export const fetchProductsRequest = () => ({
    type: 'FETCH_PRODUCTS_REQUEST',
});

export const fetchCategorySuccess = (products) => ({
    type: 'GET_ALL_CATEGORY',
    payload: products,
});

export const fetchCategoryFailure = (error) => ({
    type: 'FETCH_PRODUCTS_FAILURE',
    payload: error,
});


export const fetchAllCategories = async () => {
    try {
        const {data} = await axios.get(`${API_BASE_URL}/consumer/categories`);
        localStorage.setItem('categories', JSON.stringify(data.data))
        return data
    } catch (e) {
        printApiErrors(e)
    }
}

