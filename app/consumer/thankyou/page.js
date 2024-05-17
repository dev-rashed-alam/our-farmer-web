"use client";

import {React, useState, useEffect} from "react";
import "@/public/styles/consumer/cart.css";
import {Button, Card, Col, Container, Form, FormControl, Image, InputGroup, Row, Table} from "react-bootstrap";
import Link from "next/link";
import {useSelector} from "react-redux";

export default function Page() {
    const trackOrder = () => {
        console.log('Track Order');
    }
    //local storage
    const orderDetails  = JSON.parse(localStorage.getItem('orderDetails'));

    return (
        <Container className="cart-container text-center">
            <span className="cart-title ">Your Order is Sucessfully Completed</span>
            <Row>
                <Col xs={12}>
                    <div className="cart-empty ">
                        <Image src="/images/empty.png" width={200} height={200} alt="Empty Cart" className="text-center"/>
                        <Card.Text className="mb-2 text-danger">Order Tracking No: {orderDetails ? orderDetails.tracking_no : ''}</Card.Text>
                        <br/>
                        <Link href={'/'} variant="primary" className="back-to-home text-decoration-none">Back To Home</Link>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}
