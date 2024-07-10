"use client";

import React from "react";
import "@/public/styles/consumer/cart.css";
import {Button, Card, Col, Container, Form, FormControl, Image, InputGroup, Row, Table} from "react-bootstrap";
import Link from "next/link";
import {
    fetchAllOrders, fetchOrdersByTrackingFailure,
    fetchOrdersByTrackingSuccess,
    fetchOrdersFailure,
    fetchOrdersSuccess
} from "@/app/store/reducer/orderAction";
import {fetchOrderByTrackingNumber} from "@/app/store/reducer/orderAction";
import {useDispatch, useSelector} from "react-redux";

export default function Page() {
    // tracking is from request response
    const [tracking, setTracking] = useState(null);
    const ordersByTracking = useSelector(state => state.ordersByTracking);
    const dispatch = useDispatch();

    const handleOrderTrack = () => {
        const orders = fetchOrderByTrackingNumber(tracking)
        orders.then(response => {
            dispatch(fetchOrdersByTrackingSuccess(response.data))
            console.log(response.data)
        }).catch(error => {
            dispatch(fetchOrdersByTrackingFailure(error))
        })
        console.log(ordersByTracking)
    }
    return (
        <Container className="cart-container text-center">
            <span className="cart-title">Track Your Order</span>
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
                            <Button variant="outline-secondary" id="button-addon2" className="checkout-button" onClick={()=>handleOrderTrack()}>
                                Track
                            </Button>
                        </InputGroup>
                    </Form>
                </Col>
            </Row>
            {
                ordersByTracking && ordersByTracking.length > 0 ?
                    ordersByTracking.map((order, index) => {
                        return (
                            <Row key={index} className="justify-content-center mt-5">
                                <Col xs={12} md={6}>
                                    <Card>
                                        <Card.Header>Order Details</Card.Header>
                                        <Card.Body>
                                            <Card.Title>Order ID: {order.trackingNumber}</Card.Title>
                                            <Card.Text>
                                                <Table striped bordered hover>
                                                    <thead>
                                                    <tr>
                                                        <th>Product Name</th>
                                                        <th>Quantity</th>
                                                        <th>Price</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {
                                                        order.orderItems.map((item, index) => {
                                                            return (
                                                                <tr key={index}>
                                                                    <td>{item.name}</td>
                                                                    <td>{item.quantity}</td>
                                                                    <td>{item.price}</td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                    </tbody>
                                                </Table>
                                            </Card.Text>
                                            <Card.Text>
                                                <span>Order Status: {order.isDelivered ? 'Delivered' : 'Pending'}</span>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        )
                    })
                    :
                    <Row>
                        <Col xs={12}>
                            <div className="">
                                <Card.Text className="mb-2 text-danger">Sorry! Found Nothing.</Card.Text>
                            </div>
                        </Col>
                    </Row>
            }

        </Container>
    )
}
