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
                    <Container className='account'>
                        <Row>
                            <Col md={3}>
                                <div className='account-sidebar'>
                                    <h3>My Account</h3>
                                    <ul>
                                        <li><a href='/consumer/myaccount'>Dashboard</a></li>
                                        <li><a href='/consumer/myaccount/orders'>Orders</a></li>
                                        <li><a href='/consumer/myaccount/profile'>Profile</a></li>
                                        <li><a href='/consumer/myaccount/address'>Address</a></li>
                                        <li><a href='/consumer/myaccount/logout'>Logout</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={9}>
                                <div className='account-content'>
                                    <h3>Dashboard</h3>
                                    <p>Welcome back, {user.name}</p>
                                    <p>From your account dashboard you can view your recent orders, manage your shipping and billing addresses and edit your password and account details.</p>
                                    <h4>Recent Orders</h4>
                                    <table className='table'>
                                        <thead>
                                        <tr>
                                            <th>Order ID</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                            <th>Total</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {orders.map(order => (
                                            <tr key={order.id}>
                                                <td>{order.id}</td>
                                                <td>{order.date}</td>
                                                <td>{order.status}</td>
                                                <td>{order.total}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
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
