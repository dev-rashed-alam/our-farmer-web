"use client";

import React from "react";
import "@/public/styles/consumer/cart.css";
import {Button, Card, Col, Container, Form, FormControl, Image, InputGroup, Row, Table} from "react-bootstrap";
import Link from "next/link";

export default function Page() {
    const cartItems = [
        { id: 1, name: 'D116 Plus Smart watch Bracelets Fitness Tracker', price: 10, quantity: 2 },
        { id: 2, name: 'Smart watch Bracelets Fitnes', price: 15, quantity: 1 },
        { id: 3, name: 'Smart watch Bracelets Fitness Tracker', price: 20, quantity: 3 }
    ];

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <>
            <Container className="cart-container">
                <span className="cart-title">MY SHOPPING BAG</span>
                <Row>
                    <Col xs={8}>
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
                            {cartItems.map(item => (
                                <tr key={item.id}>
                                    <td>
                                        <Row>
                                            <Col xs={2}>
                                                <img src="https://via.placeholder.com/80" alt="product" className="img-fluid"/>
                                            </Col>
                                            <Col xs={10}>
                                                <span className="fw-bold text-body-secondary">{item.name}</span>
                                                <span className="d-block text-body-secondary"> Lorem ipsum dolor sit amet.</span>
                                                <br/>
                                            </Col>
                                        </Row>
                                    </td>
                                    <td>Tk {item.price}</td>
                                    <td>
                                        <Button variant="outline-primary quantity-style" onClick={() => decreaseQuantity(item.id)}>-</Button>
                                        <span className="mx-2">{item.quantity}</span>
                                        <Button variant="outline-primary quantity-style" onClick={() => increaseQuantity(item.id)}>+</Button>
                                    </td>
                                    <td>
                                        Tk {item.price * item.quantity}
                                        <Button variant="outline-danger" onClick={() => removeItem(item.id)} className="ms-2">x</Button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </Col>
                    <Col xs={4}>
                        <Card className="cart-summary">
                            <Card.Body>
                                <Card.Title className="border-bottom mb-2">Summary</Card.Title>
                                <Form>
                                    <Card.Text>
                                        Do you have a promo code?
                                    </Card.Text>
                                    <InputGroup>
                                        <FormControl
                                            type="text"
                                            placeholder="Enter your code"
                                            className="mr-2 d-inline coupon-input p-1"
                                            aria-label="Enter your code"
                                        />
                                        <Button variant="primary" type="submit" className="d-inline fw-bolder coupon-button">Apply</Button>
                                    </InputGroup>
                                </Form>
                                <Table borderless className="summary-table">
                                    <tbody>
                                    <tr>
                                        <td>Subtotal</td>
                                        <td>Tk {totalPrice}</td>
                                    </tr>
                                    <tr>
                                        <td>Shipping</td>
                                        <td>Tk 0.00</td>
                                    </tr>
                                    <tr>
                                        <td>Tax</td>
                                        <td>Tk 0.00</td>
                                    </tr>
                                    <tr>
                                        <td>Total</td>
                                        <td>Tk {totalPrice}</td>
                                    </tr>
                                    </tbody>
                                </Table>
                                <Button href={'/consumer/checkout'} variant="primary" className="checkout-button">Checkout</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
            <Container className="cart-container">
                <span className="cart-title text-center">MY SHOPPING BAG</span>
                <Row>
                    <Col xs={12}>
                        <div className="cart-empty ">
                            <Image src="/images/empty.png" width={200} height={200} alt="Empty Cart" className="text-center"/>
                            <Card.Text className="mb-2 text-danger">Your cart is currently empty.</Card.Text>
                            <Link href={'/'} variant="primary" className="back-to-home text-decoration-none">Back To Home</Link>
                        </div>
                    </Col>
                </Row>

            </Container>
        </>
    )
}
