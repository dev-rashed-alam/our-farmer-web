"use client";

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
import {useSelector} from "react-redux";
import {useRouter} from "next/navigation";
import axios from "axios";
import {API_BASE_URL} from "@/app/config/constant";
import {createNewOrder} from "@/app/service/orderService";
import {toast} from "react-toastify";
import React, {useState} from "react";

export default function Page() {
    const { push } = useRouter();
    const [inputData, setInputData] = useState({});
    const [errors, setErrors] = useState({});

    const cartItems = useSelector(state => state.cartItems);
    const totalPrice = cartItems && cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const subTotal = cartItems.reduce((acc, item) => {
        return acc + (item.discountType =='PERCENTAGE'
                ? ((item.discount > 0 ? item.price - (item.price * item.discount / 100) : item.price) * item.quantity)
                : (item.discount > 0 ? item.price - item.discount : item.price) * item.quantity
        );

    }, 0);
    const delivery = 5.00;


    const handleInputChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setInputData((prev) => ({...prev, [name]: value}));
    }
    const isValidForm = () => {
        const errorsObj = {};
        if (inputData.first_name == '') {
            errorsObj['first_name'] = 'First Name is required';
        }
        if (inputData.phone == '') {
            errorsObj['phone'] = 'Phone number is required';
        }
        if (inputData.address == '') {
            errorsObj['address'] = 'Address is required';
        }
        if (inputData.city =='') {
            errorsObj['city'] = 'City is required';
        }
        if (inputData.zip ='') {
            errorsObj['zip'] = 'Zip is required';
        }
        setErrors(errorsObj);
        return Object.keys(errorsObj).length === 0;
    };
    const handlePlaceOrder = async () => {
        const userDetails = document.getElementById('checkout-page');

        const orderDetails = {
            firstName: userDetails.querySelector('#first_name').value,
            lastName: userDetails.querySelector('#last_name').value,
            email: userDetails.querySelector('#email').value,
            phone: userDetails.querySelector('#phone').value,
            address: userDetails.querySelector('#address').value,
            city: userDetails.querySelector('#city').value,
            state: userDetails.querySelector('#state').value,
            zip: userDetails.querySelector('#zip').value,
            country: userDetails.querySelector('#country').value,
            isCreateAccount: userDetails.querySelector('#is_create_account').checked,
            order_notes: userDetails.querySelector('#order_notes').value,
            totalPrice: totalPrice + delivery,
            paymentMethod: 'Cash on delivery',
            //generate random tracking number
            trackingNumber: Math.floor(Math.random() * 10000000000),
            orderItems: cartItems,
            shippingPrice: delivery
        }

        if (!orderDetails.firstName || !orderDetails.phone || !orderDetails.address || !orderDetails.city || !orderDetails.zip) {
            toast.error('Fist Name, Phone, Address, City and Zip are required');
        }
        if (isValidForm()) {
            const order = createNewOrder(orderDetails).then((data) => {
                console.log("newUser", data.data.newUser)
                console.log("data", data.data)
                localStorage.removeItem('cartItems');
                localStorage.setItem('orderDetails', JSON.stringify(orderDetails));

                sessionStorage.setItem('consumerInfo', JSON.stringify(data.data.newUser));
                toast.success('Order placed successfully');
                push('/consumer/thankyou')
            }).catch((error) => {
                console.log(error);
            });
        }
    }
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
                                        <FormLabel>First Name <span className="text-danger">*</span></FormLabel>
                                        <Form.Control type="text" placeholder="First Name" className="checkout-input" id='first_name' required onChange={handleInputChange}/>
                                        <p className="field-error">{errors.first_name}</p>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <FormLabel>Last Name</FormLabel>
                                        <Form.Control type="text" placeholder="Last Name" className="checkout-input" id='last_name'/>
                                    </FormGroup>
                                </Col>
                            </Row >
                            <Row className="mb-1">
                                <Col>
                                    <FormGroup>
                                        <FormLabel>Email</FormLabel>
                                        <Form.Control type="email" placeholder="Email" className="checkout-input" id='email'/>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <FormLabel>Phone <span className="text-danger">*</span></FormLabel>
                                        <Form.Control type="text" placeholder="Phone" className="checkout-input" id='phone' required/>
                                        <p className="field-error">{errors.phone}</p>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row className="mb-1">
                                <Col>
                                    <FormGroup>
                                        <FormLabel>Address <span className="text-danger">*</span></FormLabel>
                                        <Form.Control type="text" placeholder="Address" className="checkout-input" id='address' required/>
                                        <p className="field-error">{errors.address}</p>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <FormLabel>City <span className="text-danger">*</span></FormLabel>
                                        <Form.Control type="text" placeholder="City" className="checkout-input" id='city' required/>
                                        <p className="field-error">{errors.city}</p>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row className="mb-1">
                                <Col>
                                    <FormGroup>
                                        <FormLabel>State</FormLabel>
                                        <Form.Control type="text" placeholder="State" className="checkout-input" id='state'/>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <FormLabel>Zip/Post Code <span className="text-danger">*</span></FormLabel>
                                        <Form.Control type="text" placeholder="Zip" className="checkout-input" id='zip' required/>
                                        <p className="field-error">{errors.zip}</p>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row className="mb-1">
                                <Col>
                                    <FormGroup>
                                        <FormLabel>Country <span className="text-danger">*</span></FormLabel>
                                        <FormSelect id='country'>
                                            <option value="bangladesh">Bangladesh</option>
                                        </FormSelect>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row className="mb-1">
                                <Col>
                                    <FormGroup>
                                        <FormCheck type="checkbox" label="Create an account?" id='is_create_account' className="fw-bold"/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            {/*<Row className="mb-1">*/}
                            {/*    <Col>*/}
                            {/*        <FormGroup className="fw-bold">*/}
                            {/*            <FormCheck type="checkbox" label="Ship to different address?" />*/}
                            {/*        </FormGroup>*/}
                            {/*    </Col>*/}
                            {/*</Row>*/}
                            <Row className="mb-1">
                                <Col>
                                    <FormGroup>
                                        <FormLabel>Order Notes</FormLabel>
                                        <Form.Control as="textarea" rows={3} placeholder="Notes about your order, e.g. special notes for delivery." id='order_notes' />
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
                        {cartItems && cartItems.map(item => (
                            <Row className="border-bottom p-3" key={item.id}>
                                <Col xs={8}>
                                    <div>
                                        <span className="text-body-secondary">{item.name} x {item.quantity}</span>
                                    </div>
                                </Col>
                                <Col xs={4}>
                                    <div>
                                        <span className="text-body-secondary">Tk {item.price * item.quantity}</span>

                                    </div>
                                </Col>
                            </Row>
                        ))}
                        <Row className="border-bottom p-3">
                            <Col xs={8}>
                                <div>
                                    <span className="text-body-secondary">Delivery</span>
                                </div>
                            </Col>
                            <Col xs={4}>
                                <div>
                                    <span className="text-body-secondary">Tk 5.00</span>
                                </div>
                            </Col>
                        </Row>
                        <Row className="border-bottom p-3">
                            <Col xs={8}>
                                <div>
                                    <span className="text-body-secondary">Discount</span>
                                </div>
                            </Col>
                            <Col xs={4}>
                                <div>
                                    <span className="text-body-secondary">Tk {totalPrice - subTotal}</span>
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
                                    <span className="fw-bold">Tk {delivery + totalPrice - (totalPrice - subTotal)}</span>
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
                                <FormCheck type="checkbox" name="agree" id="agree" label="I have read and agree to the website terms and conditions."/>
                                {
                                    !inputData.agree &&
                                    <FormText className="text-danger">Please agree to the terms and conditions</FormText>
                                }
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Button className="checkout-button" onClick={()=>handlePlaceOrder()}>Place Order</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}
