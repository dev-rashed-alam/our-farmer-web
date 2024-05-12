"use client";

import React from 'react';
import {Container, Navbar, Nav, Form, FormControl, Button, Col, Row, Dropdown, NavItem} from 'react-bootstrap';
import '@/public/styles/consumer/searchmenu.css';
import Image from "next/image";
import Link from "next/link";
import {useState, useEffect} from "react";
import { BsCart3 } from "react-icons/bs";


const  SearchMenu = () => {

    const [totalProducts, setTotalProducts] = useState(0);

    const searchProducts = (e) => {
        e.preventDefault();
        const search = e.target.value;
        console.log(search);
    }

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const total = cartItems.reduce((acc, item) => acc + item.quantity, 0);
        setTotalProducts(total);
    }, []);

    return (
        <header className="navbar-search-menu">
                <Container className='container'>
                    <Row>
                        <Col sm={2}>
                            <Row>
                                <Col sm={5}>
                                    <Image
                                        src="/images/logo2.png"
                                        width={70}
                                        height={30}
                                        alt="Location"
                                    />
                                </Col>
                                <Col sm={2}>
                                    <Image
                                        src="/images/map.svg"
                                        width={30}
                                        height={30}
                                        alt="Location"
                                        className='location-icon'
                                    />
                                </Col>
                                <Col sm={5}>
                                    <div className="me-auto">
                                        <div className='d-inline delivery-text'> Deliver to
                                            <br/><span className='fw-bolder delivery'>All</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                        </Col>
                        <Col sm={7}>
                            <div>
                                <Form className="d-flex">
                                    <FormControl
                                        type="search"
                                        placeholder="Search for products, categories or brands..."
                                        className="mr-2 search-bar"
                                        aria-label="Search for products, categories or brands..."
                                        name="search"
                                        onChange={searchProducts}
                                    />
                                </Form>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="ms-auto">
                                <Row>
                                    <Col sm={2}>
                                        <Link href={'/'}>
                                            <Image
                                                src="/images/profile.svg"
                                                width={30}
                                                height={30}
                                                alt="Profile"
                                                className='profile-icon'
                                            />
                                        </Link>
                                    </Col>
                                    <Col sm={4}>
                                        <div className="me-auto">
                                            <div className='d-inline sign-in'> Sign in
                                                <br/><span className='fw-bold my-account'>My Account</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={2}>
                                        <Link href={'/'}>
                                            <Image
                                                src="/images/fav.svg"
                                                width={30}
                                                height={30}
                                                alt='Favorite'
                                                className='fav-icon'
                                            />
                                        </Link>
                                    </Col>
                                    <Col sm={2}>
                                        <Link href={'/consumer/cart'}>
                                            {/*<Image*/}
                                            {/*    src="/images/cart.svg"*/}
                                            {/*    title={totalProducts}*/}
                                            {/*    width={30}*/}
                                            {/*    height={30}*/}
                                            {/*    alt="Add to Cart"*/}
                                            {/*    className='cart-icon'*/}
                                            {/*/>*/}
                                            <BsCart3 className='total-cart-icon position-relative'/>
                                            <span className="position-relative total-cart-items-icon">{totalProducts}</span>
                                        </Link>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
        </header>
    );
}

export default SearchMenu;