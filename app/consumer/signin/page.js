"use client";

import React, {useState} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '@/public/styles/consumer/signin.css';
import { useRouter } from 'next/navigation';
import {useDispatch, useSelector} from 'react-redux';
const Page = () => {
    const [formData, setFormData] = useState({});
    const { push } = useRouter();
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setFormData((prev) => ({ ...prev, [name]: value }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        const data = {
            phone_number: formData.phone_number,
            password: formData.password
        }
        dispatch({ type: 'SIGN_IN_USER', payload: data });
        localStorage.setItem('auth_info', JSON.stringify(data));
        push('/consumer/myaccount');
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
                                <Form.Control type="text" name='phone_number' placeholder="Enter phone number"   onChange={handleInputChange}
                                              value={formData.phone_number || ''} required={true}/>
                            </Form.Group>

                            <Form.Group controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name='password' placeholder="Password" onChange={handleInputChange} value={formData.password || ''} required={true}/>
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
