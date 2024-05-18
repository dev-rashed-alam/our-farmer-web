import {API_BASE_URL} from "@/app/config/constant";
import axios from "axios";
import {printApiErrors} from "@/app/config/utils";

export const fetchProductsRequest = () => ({
    type: 'FETCH_PRODUCTS_REQUEST',
});

export const fetchProductsSuccess = (products) => ({
    type: 'GET_PRODUCTS',
    payload: products,
});

export const fetchProductsFailure = (error) => ({
    type: 'FETCH_PRODUCTS_FAILURE',
    payload: error,
});


export const fetchAllProducts = async () => {
    try {
        const {data} = await axios.get(`${API_BASE_URL}/consumer/products`);
        //store the data in redux store and local storage
        localStorage.setItem('products', JSON.stringify(data.data))
        return data
    } catch (e) {
        printApiErrors(e)
    }
}

