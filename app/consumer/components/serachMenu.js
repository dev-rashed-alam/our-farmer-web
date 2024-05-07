"use client";

import React from 'react';
import {Container, Navbar, Nav, Form, FormControl, Button, Col, Row, Dropdown, NavItem} from 'react-bootstrap';
import '@/public/styles/consumer/searchmenu.css';
import Image from "next/image";
import Link from "next/link";

function SearchMenu() {
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
                                        <Link href={'/'}>
                                            <Image
                                                src="/images/cart.svg"
                                                width={30}
                                                height={30}
                                                alt="Add to Cart"
                                                className='cart-icon'
                                            />
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