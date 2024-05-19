"use client";
import React, {useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {redirect, useRouter} from "next/navigation";
import {getUserInfo, isConsumer} from "@/app/config/utils";
import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchAllOrders, fetchOrdersFailure, fetchOrdersSuccess} from "@/app/store/reducer/orderAction";
import "@/public/styles/consumer/account.css";

const Page = () => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const user = getUserInfo();
    const orders = useSelector(state => state.orders);
    const dispatch = useDispatch();
    const { push } = useRouter();
    useEffect(() => {
        if (!isConsumer() || !user){
            redirect('/consumer/signin')
        }
        setIsUserLoggedIn(true)
        const orders = fetchAllOrders()
        orders.then(response => {
            dispatch(fetchOrdersSuccess(response.data))
        }).catch(error => {
            dispatch(fetchOrdersFailure(error))
        })

    }, [user]);
    return (
        <>
            {
                user ? (
                        <Container className="my-account">
                            <Row className="header-row text-center">
                                <Col className="header-row-body">
                                    <h1>My Account </h1>
                                    <p>Manage your account information and view your orders</p>
                                </Col>
                            </Row>
                            <Row className="">
                                <Col xs={12}>
                                    <h5 className="mt-3 p-3 common-sytle text-uppercase">Account Information</h5>
                                    <table className="table table-borderless">
                                        <thead>
                                        <tr>
                                            <th>Full Name</th>
                                            <th>Email</th>
                                            <th>Phone Number</th>
                                            <th>Address</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>{user.firstName + " " + user.lastName}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phoneNumber}</td>
                                            <td>{user.address}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </Col>
                            </Row>
                            {/*my Ordered Details table*/}
                            <Row>
                                <Col xs={12}>
                                    <div className="mt-3 p-3 common-sytle">
                                        <p className="text-uppercase">My Orders</p>
                                        <span className="small text-warning">
                        This section gives you the snapshot of all orders placed from this account. You can find the status of your Orders
                    </span>
                                    </div>
                                    <table className="table table-striped">
                                        <thead>
                                        <tr>
                                            <th>Order Id</th>
                                            <th>Order Date</th>
                                            <th>Order Tracking Number</th>
                                            <th>Order Status</th>
                                            <th>Order Total</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            orders.length > 0 ? orders.map(order => (
                                                    <tr key={order.id}>
                                                        <td>{order.id}</td>
                                                        <td>{order.trackingNumber}</td>
                                                        <td>{order.createdAt.toString()}</td>
                                                        <td><span className={order.isDelivered == 'PENDING' ? "badge bg-info" : "badge bg-success"}>{order.isDelivered}</span></td>
                                                        <td>{order.totalPrice}</td>
                                                    </tr>
                                                )):
                                                <tr>
                                                    <td colSpan="4">No orders found</td>
                                                </tr>
                                        }
                                        </tbody>
                                    </table>
                                </Col>
                            </Row>
                        </Container>
                ):
                    <div>Loading...</div>
            }
        </>
    );
};

export default Page;
