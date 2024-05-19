"use client";

import React, {useState} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '@/public/styles/consumer/signin.css';
import { useRouter } from 'next/navigation';
import {useDispatch, useSelector} from 'react-redux';
import {doLogin} from "@/app/service/authService";
import {saveUserInfoInStorage} from "@/app/config/utils";
import {toast} from "react-toastify";
const Page = () => {
    const [formData, setFormData] = useState({});
    const { push } = useRouter();
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
                    toast.success("Login successful!")
                    if (userInfo.userType === "CONSUMER") {
                        router.push("/farmer")
                    }
                }
            } catch (e) {
                console.log(e)
            }
        }
    }


    return (
        <Container className="consumer-login-page">
            <Row className="justify-content-md-center">
                <Col xs={5}>
                    <div className="login-form">
                        <h2 className="text-center">Sign in</h2>
                        <Form>
                            <Form.Group controlId="formPhoneNumber">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter phone number"
                                    name="phoneNumber"
                                    onChange={handleInputChange}
                                    value={inputData.phoneNumber || ''} required={true}
                                />
                                <p className="field-error">{errors.phoneNumber}</p>
                            </Form.Group>

                            <Form.Group controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name='password'
                                    placeholder="Enter password"
                                    onChange={handleInputChange}
                                    value={inputData.password || ''} required={true}/>
                                <p className="field-error">{errors.password}</p>
                            </Form.Group>
                            <Button className="w-100 mt-3 custom-round-button bg-transparent text-dark" onClick={()=>handleSubmit(event)}>
                                Login
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Page;
