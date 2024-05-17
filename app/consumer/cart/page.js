"use client";

import {React, useState, useEffect} from "react";
import "@/public/styles/consumer/cart.css";
import {Button, Card, Col, Container, Form, FormControl, Image, InputGroup, Row, Table} from "react-bootstrap";
import Link from "next/link";
import product from "@/app/consumer/components/product";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, removeFromCart, increaseQuantity, decreaseQuantity} from "@/app/store/cartAction";

export default function Page() {
    const dispatch = useDispatch();

    const cartItems = useSelector(state => state.cartItems);

    const removeItem = (product) => {
        dispatch(removeFromCart(product));
    }

    const increaseQty = (product) => {
        dispatch(increaseQuantity(product));
    }
    const decreaseQty = (product) => {
        dispatch(decreaseQuantity(product));
    }

    const totalPrice = cartItems && cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const delivery = 5.00;
    return (
        <>
            { cartItems.length > 0 ? (
                    <Container className="cart-container">
                <span className="cart-title">MY SHOPPING BAG</span>
                <Row>
                    <Col xs={8}>
                        <Table bordered>
                            <thead>
                            <tr>
                                <th></th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>x</th>
                            </tr>
                            </thead>
                            <tbody>
                            {cartItems.map(item => (
                                <tr key={item.id}>
                                    <td>
                                        <img src={item.image} alt="product" className="img-fluid" width={100} height={100}/>
                                    </td>
                                    <td>
                                        <span className="fw-bold text-body-secondary">{item.name}</span>
                                        <span className="d-block text-body-secondary"> {item.description}</span>
                                        <span className="text-body-secondary">Quantity: {item.quantity}</span>
                                    </td>
                                    <td>Tk {parseFloat(item.price).toFixed(2)}</td>
                                    <td>
                                        <Button variant="outline-primary quantity-style" onClick={() => decreaseQty(item)}>-</Button>
                                        <span className="mx-2">{item.quantity}</span>
                                        <Button variant="outline-primary quantity-style" onClick={() => increaseQty(item)}>+</Button>
                                    </td>
                                    <td>
                                        Tk {parseFloat(item.price * item.quantity).toFixed(2)}
                                    </td>
                                    <td>
                                    <Button variant="outline-danger" onClick={() => removeItem(item)} className="ms-2">x</Button>
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
                                        <td>Tk {parseFloat(totalPrice).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td>Shipping</td>
                                        <td>Tk {parseFloat(delivery).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td>Tax</td>
                                        <td>Tk 0.00</td>
                                    </tr>
                                    <tr>
                                        <td>Total</td>
                                        <td>Tk {parseFloat(totalPrice+ delivery).toFixed(2)}</td>
                                    </tr>
                                    </tbody>
                                </Table>
                                <Button href={'/consumer/checkout'} variant="primary" className="checkout-button">Checkout</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
                ):
                <Container className="cart-container text-center">
                    <span className="cart-title text-center">MY SHOPPING BAG</span>
                    <Row>
                        <Col xs={12}>
                            <div className="cart-empty ">
                                <Image src="/images/empty.png" width={200} height={200} alt="Empty Cart" className="text-center"/>
                                <Card.Text className="mb-2 text-danger fw-bolder">Your cart is currently empty.</Card.Text>
                                <br/>
                                <Link href={'/'} variant="primary" className="mt-2 back-to-home text-decoration-none">Back To Home</Link>
                            </div>
                        </Col>
                    </Row>

                </Container>
            }

        </>
    )
}
