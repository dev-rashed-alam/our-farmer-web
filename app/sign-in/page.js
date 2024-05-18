"use client"

import React, {useState} from "react";
import "@/public/styles/farmer/Login.css"
import {useRouter} from "next/navigation";
import {doLogin} from "@/app/service/authService";
import {toast} from "react-toastify";
import {saveUserInfoInStorage} from "@/app/config/utils";
import Cookies from 'js-cookie';

const Login = () => {
    const [inputData, setInputData] = useState({});
    const [errors, setErrors] = useState({});
    const router = useRouter()

    const handleInputChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setInputData((prev) => ({...prev, [name]: value}));
    };

    const handleInvalidCredential = (data) => {
        setInputData((prev) => ({...prev, password: ''}));

    };

    const isValidForm = () => {
        const errorsObj = {};
        if (!inputData.phoneNumber) {
            errorsObj['phoneNumber'] = 'Phone number is required';
        }
        if (!inputData.password) {
            errorsObj['password'] = 'Password is required';
        }
        setErrors(errorsObj);
        return Object.keys(errorsObj).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isValidForm()) {
            try {
                const data = await doLogin(inputData)
                saveUserInfoInStorage(data)
                let userInfo = data.data;
                if (userInfo.id) {
                    Cookies.set('userInfo', JSON.stringify(userInfo));
                    Cookies.set('token', JSON.stringify(data.access_token));
                    toast.success("Login successful!")
                    if (userInfo.userType === "FARMER") {
                        router.push("/farmer")
                    } else if (userInfo.userType === "ADMIN") {
                        router.push("/admin")
                    }
                }
            } catch (e) {
                console.log(e)
            }
        }
    };

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <form onSubmit={handleSubmit} autoComplete="off">
                    <h3>Sign In</h3>
                    <div className="mb-3">
                        <label htmlFor="phoneNumber">
                            Phone Number <span className="star">*</span>
                        </label>
                        <input
                            autoComplete="off"
                            type="text"
                            id="phoneNumber"
                            className="form-control"
                            placeholder="Enter phone number"
                            value={inputData.phoneNumber || ''}
                            name="phoneNumber"
                            onChange={handleInputChange}
                        />
                        <p className="field-error">{errors.phoneNumber}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            Password <span className="star">*</span>
                        </label>
                        <input
                            autoComplete="off"
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="Enter password"
                            value={inputData.password || ''}
                            name="password"
                            onChange={handleInputChange}
                        />
                        <p className="field-error">{errors.password}</p>
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary btn-full">
                            Submit
                        </button>
                    </div>
                    <div className="d-grid mt-2">
                        <p onClick={() => router.push("/sign-up")} className="paragraph cursor-pointer">Don&apos;t have
                            an account?
                            Sign up</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;