"use client";

import React from "react";
import "@/public/styles/consumer/cart.css";
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import Link from "next/link";

export default function Page() {
    const orderDetails  = JSON.parse(localStorage.getItem('orderDetails'));
    const consumerInfo = JSON.parse(sessionStorage.getItem('consumerInfo'));
    return (
        <Container className="cart-container text-center">
            <span className="cart-title ">Your Order is Sucessfully Completed</span>
            <Row>
                <Col xs={12}>
                    <div className="cart-empty ">
                        <Image src="/images/empty.png" width={200} height={200} alt="Empty Cart" className="text-center"/>
                        <Card.Text className="mb-2 text-danger">Order Tracking No: {orderDetails ? orderDetails.trackingNumber : ''}</Card.Text>
                        <br/>
                        <Card.Text className="mb-2 text-danger">Your Order will be delivered within 3-5 business days</Card.Text>
                        <br/>
                        {
                            consumerInfo && consumerInfo.userType === "CONSUMER" ?
                            <Card>
                                <Card.Body>
                                    <Card.Title className="mb-2">Your Account Details</Card.Title>
                                    <Card.Text className="">Phone Number: {consumerInfo ? consumerInfo.phoneNumber : '' }</Card.Text>
                                    <Card.Text className="">Temporary Password: {consumerInfo ? "123456" : ''}</Card.Text>
                                    <br/>
                                   <Card.Text className="text-danger">Please change your password after login</Card.Text>
                                </Card.Body>
                            </Card>
                                : ''
                        }
                        <br/>
                        <br/>
                        <Link href={'/'} variant="primary" className="back-to-home text-decoration-none">Back To Home</Link>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}
