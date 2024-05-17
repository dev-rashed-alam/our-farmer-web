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
                <Row className="sub-footer border-bottom">
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
                <Row className="border-bottom">
                    <Col md={3} sm={12}>
                        <div className="main-footer">
                            <span className="footer-title">Do You Need Help?</span>
                            <p className="text-body-secondary small footer-subtitle lh-2">Register now to get latest updates on promotions & coupons.Don’t worry, we not spam!</p>
                            <Row>
                                <Col md={12} sm={12}>
                                    <Row>
                                        <Col md={2} sm={2}>
                                            <div className="contact-icon">
                                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22.3434 15.2661C21.13 15.1354 20.122 14.8648 19.3194 14.4541C18.7407 14.2301 18.148 14.1881 17.5414 14.3281C16.9347 14.4681 16.398 14.7434 15.9314 15.1541L14.8674 16.3301C12.5154 14.7994 10.574 12.8581 9.04338 10.5061L10.1074 9.44212C10.5554 8.99412 10.84 8.46678 10.9614 7.86012C11.0827 7.25345 11.0314 6.65145 10.8074 6.05412C10.4714 5.17678 10.238 4.16878 10.1074 3.03012C9.97672 2.26478 9.59872 1.62545 8.97338 1.11212C8.34805 0.598783 7.63405 0.342115 6.83138 0.342115H3.10738C2.52872 0.37945 2.01072 0.566116 1.55338 0.902117C1.09605 1.23812 0.741382 1.66745 0.489382 2.19012C0.237382 2.71278 0.130049 3.26345 0.167382 3.84212C0.354049 5.70878 0.764715 7.53345 1.39938 9.31612C2.03405 11.0988 2.87405 12.7741 3.91938 14.3421C5.78605 17.2914 8.19405 19.6994 11.1434 21.5661C12.73 22.5554 14.41 23.3674 16.1834 24.0021C17.9567 24.6368 19.7767 25.0754 21.6434 25.3181H22.0074C22.3994 25.3181 22.7914 25.2341 23.1834 25.0661C23.5754 24.8981 23.9207 24.6694 24.2194 24.3801C24.518 24.0908 24.7467 23.7501 24.9054 23.3581C25.064 22.9661 25.1434 22.5648 25.1434 22.1541V18.6541C25.1434 17.7954 24.882 17.0488 24.3594 16.4141C23.8367 15.7794 23.1647 15.3968 22.3434 15.2661ZM23.2674 18.5421V22.0421C23.2674 22.4341 23.118 22.7888 22.8194 23.1061C22.4834 23.4048 22.1287 23.5541 21.7554 23.5541H21.6434C19.926 23.3861 18.2554 23.0128 16.6314 22.4341C14.9514 21.8368 13.3927 21.0434 11.9554 20.0541C10.63 19.1954 9.39338 18.1921 8.24538 17.0441C7.09738 15.8961 6.08472 14.6501 5.20738 13.3061C4.27405 11.8501 3.51338 10.3008 2.92538 8.65812C2.33738 7.01545 1.93138 5.33545 1.70738 3.61812C1.76338 3.18878 1.93138 2.82945 2.21138 2.54012C2.49138 2.25078 2.82738 2.10612 3.21938 2.10612H6.83138C7.18605 2.10612 7.50805 2.23212 7.79738 2.48412C8.08672 2.73612 8.23138 3.03012 8.23138 3.36612C8.26872 3.85145 8.36205 4.39278 8.51138 4.99012C8.60472 5.36345 8.75405 5.90478 8.95938 6.61412L9.04338 6.86612C9.15538 7.16478 9.18338 7.44945 9.12738 7.72012C9.07138 7.99078 8.93138 8.21945 8.70738 8.40612L7.41938 9.80612C7.25138 9.91812 7.15338 10.0721 7.12538 10.2681C7.09738 10.4641 7.11138 10.6554 7.16738 10.8421C8.04472 12.3541 9.11338 13.7401 10.3734 15.0001C11.6334 16.2601 13.0194 17.3288 14.5314 18.2061C14.6994 18.3181 14.886 18.3554 15.0914 18.3181C15.2967 18.2808 15.4554 18.1968 15.5674 18.0661L17.1074 16.5541C17.294 16.3674 17.5367 16.2368 17.8354 16.1621C18.134 16.0874 18.3954 16.1061 18.6194 16.2181C19.702 16.6474 20.8687 16.9181 22.1194 17.0301C22.474 17.0861 22.7727 17.2681 23.0154 17.5761C23.258 17.8841 23.342 18.2061 23.2674 18.5421ZM14.8674 1.96612C16.3794 2.11545 17.7514 2.58212 18.9834 3.36612C20.2154 4.15012 21.2234 5.15812 22.0074 6.39012C22.7914 7.62212 23.258 8.99412 23.4074 10.5061C23.4074 10.7301 23.496 10.9214 23.6734 11.0801C23.8507 11.2388 24.0327 11.3181 24.2194 11.3181H24.3314C24.5554 11.3181 24.7467 11.2201 24.9054 11.0241C25.064 10.8281 25.1434 10.6088 25.1434 10.3661C24.9567 8.61145 24.3874 6.99678 23.4354 5.52212C22.5207 4.08478 21.3307 2.90878 19.8654 1.99412C18.4 1.07945 16.7807 0.528782 15.0074 0.342115C14.7647 0.342115 14.5454 0.42145 14.3494 0.580116C14.1534 0.738783 14.0554 0.920782 14.0554 1.12612C14.0554 1.33145 14.1347 1.52278 14.2934 1.70012C14.452 1.87745 14.6434 1.96612 14.8674 1.96612ZM14.0554 5.71812C13.9994 5.94212 14.046 6.15678 14.1954 6.36212C14.3447 6.56745 14.5314 6.69812 14.7554 6.75412C15.726 6.94078 16.5707 7.39812 17.2894 8.12612C18.008 8.85412 18.4887 9.72212 18.7314 10.7301C18.7874 10.9541 18.89 11.1268 19.0394 11.2481C19.1887 11.3694 19.3567 11.4301 19.5434 11.4301H19.6554C19.898 11.3741 20.0894 11.2434 20.2294 11.0381C20.3694 10.8328 20.4114 10.6088 20.3554 10.3661C20.1314 9.04078 19.5387 7.89278 18.5774 6.92212C17.616 5.95145 16.4634 5.31678 15.1194 5.01812C14.8767 4.96212 14.6527 4.99478 14.4474 5.11612C14.242 5.23745 14.1114 5.43812 14.0554 5.71812Z" fill="#111827"/>
                                                </svg>
                                            </div>
                                        </Col>
                                        <Col md={10} sm={10}>
                                            <div className="footer-contact">
                                                <span className="footer-contact-title text-body-secondary small">Monday-Friday: 08am-9pm</span>
                                                <p className="footer-contact-text fw-bolder h5">+880 1867 131 561</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={12} sm={12}>
                                    <Row>
                                        <Col md={2} sm={2}>
                                            <div className="contact-icon">
                                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22.0842 3.83588H3.43616C2.85749 3.83588 2.31616 3.97588 1.81216 4.25588C1.30816 4.53588 0.906823 4.91854 0.608156 5.40388C0.30949 5.88921 0.160156 6.42121 0.160156 6.99988V20.9999C0.160156 21.5785 0.304823 22.1199 0.594156 22.6239C0.88349 23.1279 1.27549 23.5292 1.77016 23.8279C2.26482 24.1265 2.82016 24.2759 3.43616 24.2759H22.0842C22.6628 24.2759 23.2042 24.1312 23.7082 23.8419C24.2122 23.5525 24.6135 23.1605 24.9122 22.6659C25.2108 22.1712 25.3602 21.6159 25.3602 20.9999V6.99988C25.3602 6.42121 25.2108 5.88921 24.9122 5.40388C24.6135 4.91854 24.2122 4.53588 23.7082 4.25588C23.2042 3.97588 22.6628 3.83588 22.0842 3.83588ZM3.43616 5.59988H22.0842C22.4948 5.59988 22.8308 5.73988 23.0922 6.01988C23.3535 6.29988 23.4842 6.62654 23.4842 6.99988V7.69988L13.4602 14.1119C13.2175 14.2239 12.9655 14.2799 12.7042 14.2799C12.4428 14.2799 12.1908 14.2239 11.9482 14.1119L2.03616 7.69988V6.99988C2.03616 6.58921 2.16682 6.25321 2.42816 5.99188C2.68949 5.73055 3.02549 5.59988 3.43616 5.59988ZM22.0842 22.5119H3.43616C3.04416 22.5119 2.71282 22.3672 2.44216 22.0779C2.17149 21.7885 2.03616 21.4665 2.03616 21.1119V9.79988L11.1362 15.6239C11.5282 15.9412 12.0695 16.0999 12.7602 16.0999C13.4508 16.0999 13.9922 15.9412 14.3842 15.6239L23.4842 9.79988V20.9999C23.4842 21.4105 23.3535 21.7652 23.0922 22.0639C22.8308 22.3625 22.4948 22.5119 22.0842 22.5119Z" fill="#111827"/>
                                                </svg>
                                            </div>
                                        </Col>
                                        <Col md={10} sm={10}>
                                            <div className="footer-contact">
                                                <span className="footer-contact-title text-body-secondary small">Need help with your order?</span>
                                                <p className="footer-contact-text">
                                                    <Link href="mailto:info@ourfarmer.com" className="text-decoration-none">
                                                        <span className="text-dark-emphasis fw-bold">
                                                            info@ourfarmer.com
                                                        </span>
                                                    </Link>
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
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
                                    <Nav.Link href={'/sign-up'} className="text-body-secondary m-0 p-0">Sell on OurFarmer</Nav.Link>
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
