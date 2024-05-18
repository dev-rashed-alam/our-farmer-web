"use client"

import React, {useState} from "react";
import "@/public/styles/farmer/Login.css"
import {useRouter} from "next/navigation";
import {doRegistration} from "@/app/service/authService";
import {toast} from "react-toastify";
import {getInputFieldError} from "@/app/config/utils";

const Registration = () => {
    const [inputData, setInputData] = useState({});
    const [errors, setErrors] = useState({});
    const router = useRouter();

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
        if (!inputData.firstName) {
            errorsObj['firstName'] = 'First name is required';
        }
        if (!inputData.lastName) {
            errorsObj['lastName'] = 'Last name is required';
        }
        if (!inputData.email) {
            errorsObj['email'] = 'Email is required';
        }
        if (!inputData.phoneNumber) {
            errorsObj['phoneNumber'] = 'Phone number is required';
        }
        if (!inputData.password) {
            errorsObj['password'] = 'Password is required';
        }
        if (!inputData.confirmPassword) {
            errorsObj['confirmPassword'] = 'Password does not matched!';
        }
        setErrors(errorsObj);
        return Object.keys(errorsObj).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isValidForm()) {
            try {
                const data = await doRegistration(inputData);
                if (data) {
                    toast.success("Registration Successful!");
                    router.push("/sign-in");
                }
            } catch (e) {
                if (e.errors) {
                    let errorObj = getInputFieldError(e.errors);
                    setErrors(prev => ({...prev, ...errorObj}))
                }
            }
        }
    };

    console.log(errors)

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <form onSubmit={handleSubmit} autoComplete="off">
                    <h3>Sign Up</h3>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="firstName">
                                First Name <span className="star">*</span>
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                className="form-control"
                                placeholder="Enter first name"
                                value={inputData.firstName || ''}
                                name="firstName"
                                onChange={handleInputChange}
                            />
                            <p className="field-error">{errors.firstName}</p>
                        </div>
                        <div className="col">
                            <label htmlFor="lastName">
                                Last Name <span className="star">*</span>
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                className="form-control"
                                placeholder="Enter last name"
                                value={inputData.lastName || ''}
                                name="lastName"
                                onChange={handleInputChange}
                            />
                            <p className="field-error">{errors.lastName}</p>
                        </div>
                    </div>
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
                        <label htmlFor="phoneNumber">
                            Phone Number <span className="star">*</span>
                        </label>
                        <input
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
                    <div className="mb-3">
                        <label htmlFor="confirmPassword">
                            Confirm Password <span className="star">*</span>
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="form-control"
                            placeholder="Enter password"
                            value={inputData.confirmPassword || ''}
                            name="confirmPassword"
                            onChange={handleInputChange}
                        />
                        <p className="field-error">{errors.confirmPassword}</p>
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary btn-full">
                            Submit
                        </button>
                    </div>
                    <div className="d-grid mt-2">
                        <p onClick={() => router.push("/sign-in")} className="paragraph cursor-pointer">Already have an
                            account? Sign In</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;