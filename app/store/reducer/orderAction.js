import {API_BASE_URL} from "@/app/config/constant";
import axios from "axios";
import {getUserInfo, printApiErrors} from "@/app/config/utils";

export const fetchProductsRequest = () => ({
    type: 'FETCH_ORDERS_REQUEST',
});

export const fetchOrdersSuccess = (products) => ({
    type: 'GET_ORDERS',
    payload: products,
});

export const fetchOrdersFailure = (error) => ({
    type: 'FETCH_ORDERS_FAILURE',
    payload: error,
});


export const fetchAllOrders = async () => {
    try {
        const user = getUserInfo();
        const {data} = await axios.get(`${API_BASE_URL}/consumer/orders?phone=` + user.phoneNumber);
        //store the data in redux store and local storage
        localStorage.setItem('orders', JSON.stringify(data.data))
        return data
    } catch (e) {
        printApiErrors(e)
    }
}

