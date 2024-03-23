"use client"

import React, {useState} from "react";
import "@/public/styles/Login.css"
import {useRouter} from "next/navigation";

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
        if (!inputData.email) {
            errorsObj['email'] = 'User name is required';
        }
        if (!inputData.password) {
            errorsObj['password'] = 'Password is required';
        }
        setErrors(errorsObj);
        return Object.keys(errorsObj).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        router.push('/farmer')
    };

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <form onSubmit={handleSubmit}>
                    <h3>Sign In</h3>
                    <div className="mb-3">
                        <label htmlFor="email">
                            Email <span className="star">*</span>
                        </label>
                        <input
                            type="text"
                            id="email"
                            className="form-control"
                            placeholder="Enter email"
                            value={inputData.email || ''}
                            name="email"
                            onChange={handleInputChange}
                        />
                        <p className="field-error">{errors.email}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            Password <span className="star">*</span>
                        </label>
                        <input
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
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                    <div className="d-grid mt-2">
                        <p className="peragraph">Don&apos;t have an account? Sign up</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;