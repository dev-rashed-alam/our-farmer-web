"use client";

import Header from "@/app/consumer/components/header";
import Footer from "@/app/consumer/components/footer";
import {
    Container,
    Row,
    Col,
    Form,
    FormText,
    FormGroup,
    FormLabel,
    FormCheck,
    FormSelect,
    Button
} from "react-bootstrap";
import Link from "next/link";
import "@/public/styles/consumer/checkout.css";
export default function Page() {
    return (
        <main className="checkout-page mt-4" id="checkout-page">
            <Container>
                <Row>
                    <Col xs={8} className="billing-details">
                        <Row className="mb-1">
                            <Col>
                                <p className="fw-bold mb-2">Billing and Shiping details</p>
                            </Col>
                        </Row>
                        <Form>
                            <Row className="mb-1">
                                <Col>
                                    <FormGroup>
                                        <FormLabel>First Name</FormLabel>
                                        <Form.Control type="text" placeholder="First Name" className="checkout-input"/>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <FormLabel>Last Name</FormLabel>
                                        <Form.Control type="text" placeholder="Last Name" className="checkout-input"/>
                                    </FormGroup>
                                </Col>
                            </Row >
                            <Row className="mb-1">
                                <Col>
                                    <FormGroup>
                                        <FormLabel>Email</FormLabel>
                                        <Form.Control type="email" placeholder="Email" className="checkout-input"/>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <FormLabel>Phone</FormLabel>
                                        <Form.Control type="text" placeholder="Phone" className="checkout-input"/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row className="mb-1">
                                <Col>
                                    <FormGroup>
                                        <FormLabel>Address</FormLabel>
                                        <Form.Control type="text" placeholder="Address" className="checkout-input"/>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <FormLabel>City</FormLabel>
                                        <Form.Control type="text" placeholder="City" className="checkout-input"/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row className="mb-1">
                                <Col>
                                    <FormGroup>
                                        <FormLabel>State</FormLabel>
                                        <Form.Control type="text" placeholder="State" className="checkout-input"/>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <FormLabel>Zip</FormLabel>
                                        <Form.Control type="text" placeholder="Zip" className="checkout-input"/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row className="mb-1">
                                <Col>
                                    <FormGroup>
                                        <FormLabel>Country</FormLabel>
                                        <FormSelect>
                                            <option value="bangladesh">Bangladesh</option>
                                        </FormSelect>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row className="mb-1">
                                <Col>
                                    <FormGroup>
                                        <FormCheck type="checkbox" label="Create an account?" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row className="mb-1">
                                <Col>
                                    <FormGroup className="fw-bold">
                                        <FormCheck type="checkbox" label="Ship to different address?" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row className="mb-1">
                                <Col>
                                    <FormGroup>
                                        <FormLabel>Order Notes</FormLabel>
                                        <Form.Control as="textarea" rows={3} placeholder="Notes about your order, e.g. special notes for delivery." />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col xs={4} className="bg-body-tertiary p-3 place-order">
                        <Row className="mb-1">
                            <Col>
                                <p className="fw-bold mb-2">Your Order</p>
                            </Col>
                        </Row>
                        <Row className="border-bottom p-3">
                            <Col xs={8}>
                                <div>
                                    <span className="text-body-secondary fw-bold">Product</span>
                                </div>
                            </Col>
                            <Col xs={4}>
                                <div>
                                    <span className="text-body-secondary fw-bold">Subtotal</span>
                                </div>
                            </Col>
                        </Row>
                        <Row className="border-bottom p-3">
                            <Col xs={8}>
                                <div>
                                    <span className="text-body-secondary">Marketside Fresh Organic Bananas</span>
                                </div>
                            </Col>
                            <Col xs={4}>
                                <div>
                                    <span className="text-body-secondary">Tk 10.00</span>
                                </div>
                            </Col>
                        </Row>

                        <Row className="border-bottom p-3">
                            <Col xs={8}>
                                <div>
                                    <span className="text-body-secondary">Delivery</span>
                                </div>
                            </Col>
                            <Col xs={4}>
                                <div>
                                    <span className="text-body-secondary">Tk 2.00</span>
                                </div>
                            </Col>
                        </Row>
                        <Row className="border-bottom p-3">
                            <Col xs={8}>
                                <div>
                                    <span className="fw-bold">Total</span>
                                </div>
                            </Col>
                            <Col xs={4}>
                                <div>
                                    <span className="fw-bold">Tk {2.00 + 10.00}</span>
                                </div>
                            </Col>
                        </Row>
                         <Row className="border-bottom p-3">
                        {/*    Cash on delivery*/}
                            <Col xs={8}>
                                <div>
                                    <span className="text-body-secondary">Payment Method</span>
                                </div>
                            </Col>
                            <Col xs={4}>
                                <div>
                                    <span className="text-body-secondary fw-bolder">Cash on delivery</span>
                                </div>
                            </Col>
                        </Row>
                        <Row className="border-bottom p-3">
                            <Col xs={12}>
                                    <span className="text-body-secondary small">Your personal data will be used to process your order,support your experience throughout this website, and forother purposes described in our <Link href={'#'}>privacy policy</Link></span>
                            </Col>
                        </Row>
                        <Row className="border-bottom p-3">
                            <Col xs={12}>
                                <FormCheck type="checkbox" label="I have read and agree to the website terms and conditions." />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Button className="checkout-button">Place Order</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}
