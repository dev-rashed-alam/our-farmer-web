"use client";

import React from 'react';
import {Container, Row, Col, FormControl, Form, InputGroup, Nav} from 'react-bootstrap';
import '@/public/styles/consumer/footer.css';
import Button from "react-bootstrap/Button";
import Link from "next/link";
const Footer = () => {
    return (
        <footer className="footer p-3">
            <Container>
                <Row className="sub-footer">
                    <Col md={6} sm={12} className="left-side">
                        <h5>Join our newsletter for TK10 offs</h5>
                        <p className="text-body-secondary subscribe-agreement">Register now to get latest updates on promotions <br/> & coupons.Don’t worry, we not spam!</p>
                    </Col>
                    <Col md={6} sm={12}>
                        <div>
                            <Form>
                                <InputGroup>
                                    <InputGroup.Text id="basic-addon1" className="input-inline-icon"><svg width="139px" height="139px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 8L17.4392 9.97822C15.454 11.0811 14.4614 11.6326 13.4102 11.8488C12.4798 12.0401 11.5202 12.0401 10.5898 11.8488C9.53864 11.6326 8.54603 11.0811 6.5608 9.97822L3 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="#000000" stroke-width="0.4800000000000001" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></InputGroup.Text>
                                    <FormControl
                                        type="text"
                                        placeholder="Enter your email address"
                                        className="mr-2 d-inline subscribe-input p-0"
                                        aria-label="Enter your email address"
                                    />
                                    <Button variant="primary" type="submit" className="d-inline fw-bolder subscribe-button">SEND</Button>
                                </InputGroup>
                            </Form>
                            <p className="pt-3 text-body-secondary subscribe-agreement">By subscribing you agree to our <Link href="#" className="text-decoration-none subscribe-anchor">Terms & Conditions</Link> and <Link href="#" className="text-decoration-none subscribe-anchor">Privacy & Cookies Policy</Link>.</p>
                        </div>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col md={3} sm={12}>
                        <div className="main-footer">
                            <span className="footer-title">Do You Need Help?</span>
                            <p className="text-body-secondary small footer-subtitle lh-2">Register now to get latest updates on promotions & coupons.Don’t worry, we not spam!</p>
                        </div>
                    </Col>
                    <Col md={2} sm={12}>
                        <div className="main-footer">
                            <span className="footer-title">Let Us Help You</span>
                            <Nav>
                                <Nav.Item>
                                    <Nav.Link href="/" className="text-body-secondary m-0 p-0">Accessibility Statement</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1" className="text-body-secondary m-0 p-0">Your Orders</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-2" className="text-body-secondary m-0 p-0">Refund and Return Policy</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-2" className="text-body-secondary m-0 p-0">Privacy Policy</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-2" className="text-body-secondary m-0 p-0">Terms and Conditions</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-2" className="text-body-secondary m-0 p-0">Help Center</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </Col>
                    <Col md={2} sm={12}>
                        {/* Main Footer */}
                        <div className="main-footer">
                            <span className="footer-title">Make Money with Us</span>
                            <Nav>
                                <Nav.Item>
                                    <Nav.Link href="/" className="text-body-secondary m-0 p-0">Sell on OurFarmer</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1" className="text-body-secondary m-0 p-0">Sell Services on OurFarmer</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-2" className="text-body-secondary m-0 p-0">Become an Affiliate</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-2" className="text-body-secondary m-0 p-0">Become an Blowwe Vendor</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </Col>
                    <Col md={2} sm={12}>
                        <div className="main-footer">
                            <span className="footer-title">Get to Know Us</span>
                            <Nav>
                                <Nav.Item>
                                    <Nav.Link href="/home" className="text-body-secondary m-0 p-0">About OurFarmer</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1" className="text-body-secondary m-0 p-0">Customer Reviews</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-2" className="text-body-secondary m-0 p-0">Social Responsibility</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-2" className="text-body-secondary m-0 p-0">Our Blog</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </Col>
                    <Col md={3} sm={12}>
                        <div className="main-footer">
                            <span className="footer-title">Connect with us</span>
                            <p className="social-media">Follow us on social media:</p>
                            <div className="social-icons">
                                <Link href="#"><img src="/images/footer/facebook.svg" alt="Facebook"/></Link>
                                <Link href="#"><img src="/images/footer/twitter.svg" alt="Twitter"/></Link>
                                <Link href="#"><img src="/images/footer/instagram.svg" alt="Instagram"/></Link>
                                <Link href="#"><img src="/images/footer/linkedin.svg" alt="Linkedin"/></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col md={8} sm={12}>
                        <div className="copyright-section">
                            <p className="text-body-secondary">Copyright 2024 © <span className="fw-bolder">OurFarmer</span>. All right reserved. Powered by <span className="fw-bolder">OurFarmer</span>.</p>
                        </div>
                    </Col>
                    <Col md={4} sm={12}>
                        <div className="copyright-section">
                            <p className="small">
                                <Link href="#" className="p-2 text-body-secondary">Terms and Conditions</Link>
                                <Link href="#" className="p-2 text-body-secondary">Privacy Policy</Link>
                                <Link href="#" className="p-2 text-body-secondary">Order Tracking</Link>
                            </p>
                        </div>
                    </Col>

                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
