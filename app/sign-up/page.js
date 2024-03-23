"use client"

import React, {useState} from "react";
import "@/public/styles/Login.css"

const Registration = () => {
    const [inputData, setInputData] = useState({});
    const [errors, setErrors] = useState({});

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

    };

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <form onSubmit={handleSubmit}>
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
                                value={inputData.email || ''}
                                name="firstName"
                                onChange={handleInputChange}
                            />
                            <p className="field-error">{errors.email}</p>
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
                                value={inputData.email || ''}
                                name="lastName"
                                onChange={handleInputChange}
                            />
                            <p className="field-error">{errors.email}</p>
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
                            value={inputData.email || ''}
                            name="phoneNumber"
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
                    <div className="mb-3">
                        <label htmlFor="confirmPassword">
                            Confirm Password <span className="star">*</span>
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="form-control"
                            placeholder="Enter password"
                            value={inputData.password || ''}
                            name="confirmPassword"
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
                        <p className="peragraph">Already have an account? Sign In</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;