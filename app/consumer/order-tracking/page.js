"use client";

import {React, useState, useEffect} from "react";
import "@/public/styles/consumer/cart.css";
import {Button, Card, Col, Container, Form, FormControl, Image, InputGroup, Row, Table} from "react-bootstrap";
import Link from "next/link";

export default function Page() {
    // tracking is from request response
    const [tracking, setTracking] = useState(null);
    const [orderDetails, setOrderDetails] = useState([]);

    const handleOrderTrack = () => {
        //get tracking info from local storage and json parse
        const orders = JSON.parse(localStorage.getItem('orderDetails'));
        //const details = localStorage.getItem('orderDetails');
        //filter for tracking number
        if (orders.trackingNumber != tracking) {
            setOrderDetails([])
            return;
        }
        if (tracking == orders.trackingNumber && orders.orderItems.length > 0) {
                setOrderDetails(orders.orderItems)
        }

    }
    return (
        <Container className="cart-container text-center">
            <span className="cart-title ">Order Tracking Number : {tracking}</span>
            <Row className="justify-content-center mt-5">
                <Col xs={12} md={6}>
                    <Form>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Enter Tracking Number"
                                aria-label="Enter Tracking Number"
                                aria-describedby="basic-addon2"
                                value={tracking}
                                onChange={(e) => setTracking(e.target.value)}
                            />
                            <Button variant="outline-secondary" id="button-addon2" onClick={()=>handleOrderTrack()}>
                                Track
                            </Button>
                        </InputGroup>
                    </Form>
                </Col>
            </Row>
            {
                orderDetails.length > 0 ?
                    <Row>
                        <Col xs={12}>
                            <div className="">
                                <Card.Text className="mb-2 text-danger">Order Status: Delivered</Card.Text>
                                <br/>
                                <Card.Text className="mb-2 text-danger">Order Date: 12/12/2021</Card.Text>
                                <br/>
                                <Card.Text className="mb-2 text-danger">Order Total: $100</Card.Text>
                                <br/>
                                <Card.Text className="mb-2 text-danger">Order Payment Method: Credit Card</Card.Text>
                                <br/>
                                <Card.Text className="mb-2 text-danger">Order Payment Status: Paid</Card.Text>
                                <br/>
                                <Card.Text className="mb-2 text-danger">Order Shipping Address: 1234 Street, City, State, 12345</Card.Text>
                                <br/>
                                <Card.Text className="mb-2 text-danger">Order Billing Address: 1234 Street, City, State, 12345</Card.Text>
                                <br/>
                                <Card.Text className="mb-2 text-danger">Order Items: 2</Card.Text>

                                {/*order items table*/}
                                <Table bordered>
                                    <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Product 1</td>
                                        <td>$50</td>
                                        <td>1</td>
                                        <td>$50</td>
                                    </tr>
                                    <tr>
                                        <td>Product 2</td>
                                        <td>$50</td>
                                        <td>1</td>
                                        <td>$50</td>
                                    </tr>
                                    </tbody>
                                </Table>
                                <Link href={'/'} variant="primary" className="back-to-home text-decoration-none">Back To Home</Link>
                            </div>
                        </Col>
                    </Row>
                    :
                    <Row>
                        <Col xs={12}>
                            <div className="">
                                <Card.Text className="mb-2 text-danger">No Order Found</Card.Text>
                            </div>
                        </Col>
                    </Row>
            }

        </Container>
    )
}
