import {toast} from "react-toastify";
import moment from "moment";

export const printApiErrors = (error) => {
    if (error?.response?.data?.message) {
        toast.error(error.response.data.message)
    } else {
        toast.error('Something wen wrong!')
    }
    throw error.response.data;
}

export const saveUserInfoInStorage = (data) => {
    localStorage.setItem("token", data.access_token);
    localStorage.setItem("user", JSON.stringify(data.data))
}

export const clearStorage = (data) => {
    localStorage.clear()
}

export const getUserInfo = () => {
    let user = localStorage.getItem("user")
    return JSON.parse(user)
}

export const isFarmer = () => {
    let user = getUserInfo();
    return user?.userType === "FARMER";
}

export const isAdmin = () => {
    let user = getUserInfo();
    return user?.userType === "ADMIN";
}

export const isConsumer = () => {
    let user = getUserInfo();
    return user?.userType === "CONSUMER";
}

export const getInputFieldError = (errorObj) => {
    let errors = {}
    for(let item in errorObj){
        errors[item] = errorObj[item].msg
    }
    return errors
}

export const changeDateFormat = (date, currentFormat = 'DD/MM/YYYY', newFormat = 'Do MMM, YY') => {
    if (date === undefined) return;
    return moment(date, currentFormat).format(newFormat);
};
