import {toast} from "react-toastify";
import moment from "moment";

export const getReqConfig = (token) => {
    return {
        'Content-Type': 'application/json', Accept: 'application/json', Authorization: `Bearer ${token.slice(1, -1)}`
    };
}

export const getReqHeaderConfig = () => {
    return {
        'Content-Type': 'application/json', Accept: 'application/json', Authorization: `Bearer ${getToken()}`
    };
}

export const getReqHeaderConfigWithMultiPart = () => {
    return {
        'Content-Type': 'multipart/form-data', Accept: 'application/json', Authorization: `Bearer ${getToken()}`
    };
}


export const printApiErrors = (error) => {
    if (error?.response?.data?.message) {
        toast.error(error.response.data.message)
    } else {
        toast.error('Something went wrong!')
    }
    throw error.response.data;
}

export const saveUserInfoInStorage = (data) => {
    localStorage.setItem("token", data.access_token);
    localStorage.setItem("user", JSON.stringify(data.data))
}

export const getToken = () => {
    return localStorage?.getItem("token") || ""
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
    for (let item in errorObj) {
        errors[item] = errorObj[item].msg
    }
    return errors
}

export const changeDateFormat = (date, currentFormat = 'DD/MM/YYYY', newFormat = 'Do MMM, YY') => {
    if (date === undefined) return;
    return moment(date, currentFormat).format(newFormat);
};

export const landAcquisitionTypes = [
    {
        value: 6, label: "Six Months"
    },
    {
        value: 3, label: "Three Months"
    },
    {
        value: 1, label: "One Year"
    }
]
export const landSizeUnits = [
    {
        value: "SQUARE_FEET", label: "Square Feet"
    },
    {
        value: 'BIGHA', label: "Bigha"
    },
    {
        value: 'HECTARES', label: "Hectares"
    },
    {
        value: 'ACRES', label: "Acres"
    }
]
export const legalAffairs = [
    {
        value: "YES", label: "Yes"
    },
    {
        value: 'NO', label: "No"
    }
]

export const productionUnits = [
    {value: "KG", label: "Kilogram"},
    {value: "TONN", label: "Tonns"},
    {value: "BUSHELS", label: "Bushels"},
]

export const serviceType = [
    {
        value: "FINANCIAL_SUPPORT", label: "Financial Support"
    },
    {
        value: 'BINIMOY_MANAGEMENT', label: "Binimoy Management"
    },
    {
        value: 'SELLING_THROUGH_PLATFORM', label: "Selling Through Platform"
    }
]

export const tenureType = [
    {
        value: 3, label: "Three Month"
    },
    {
        value: 6, label: "Six Month"
    },
    {
        value: 12, label: "Twelve Month"
    }
]

export const capitalizeFirstLetter = (str) => {
    if (str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
};

export const isValidFileType = (allowedFileTypes, fileType) => {
    return allowedFileTypes.includes(fileType)
}

export const getErrorMessages = (err) => {
    let errorObj = {};
    if (err?.inner) {
        for (let item of err.inner) {
            errorObj[item.path] = item.message;
        }
    }
    return errorObj;
};

export const filterPostData = (obj) => {
    return Object.fromEntries(
        Object.entries(obj).filter(([_, v]) => v != null && v !== "")
    );
};

export const sortByObjectKey = (data) => {
    const keys = Object.keys(data);
    keys.sort();
    const sortedData = {};
    keys.forEach(key => {
        sortedData[key] = data[key];
    });
    return sortedData;
}


export const groupByPhaseId = (tasks) => {
    let tmpData = tasks.reduce((acc, task) => {
        const phaseId = task.phase.id;
        if (!acc[phaseId]) {
            acc[phaseId] = [];
        }
        acc[phaseId].push(task);
        return acc;
    }, {});
    return tmpData;
}

export const convertNumberToUSFormat = (value, removeFloating = false) => {
    if (!value && value !== 0) return;
    let formatter;
    if (removeFloating) {
        formatter = new Intl.NumberFormat('en-us');
        return formatter.format(Math.floor(value));
    } else {
        formatter = new Intl.NumberFormat('en-us', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
        });
        return formatter.format(value);
    }
};


export const getNumberUnit = (value, removeFloating = false) => {
    if (value < 1e3) return convertNumberToUSFormat(value, removeFloating);
    if (value >= 1e3 && value < 1e6) return convertNumberToUSFormat(+(value / 1e3), removeFloating) + 'K';
    if (value >= 1e6 && value < 1e9) return convertNumberToUSFormat(+(value / 1e6), removeFloating) + 'M';
    if (value >= 1e9 && value < 1e12) return convertNumberToUSFormat(+(value / 1e9), removeFloating) + 'B';
    if (value >= 1e12) return convertNumberToUSFormat(+(value / 1e12), removeFloating) + 'T';
};

export const monthList = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]