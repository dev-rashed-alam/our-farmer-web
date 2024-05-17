"use client";
import React, {useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {useSelector} from "react-redux";
import {redirect, useRouter} from "next/navigation";
const Page = () => {
    const user = useSelector(state => state.user);
    const { push } = useRouter();
    useEffect(() => {
        if (!user) {
            redirect('/consumer/signin')
        }
    }, [user]);
    return (
        <Container className="my-account">
            <Row className="">
                <Col xs={12}>
                    <h2 className="text-center">My Account</h2>
                    <div className="account-details">
                        <h3>Account Details</h3>
                        <div className="account-info">
                            <p>Name: <span> {user && user.phone_number}</span></p>
                            <p>Email: <span>
                            </span></p>
                            <p>Phone Number: <span>1234567890</span></p>
                        </div>
                    </div>
                </Col>
            </Row>
            {/*my Ordered Details table*/}
            <Row>
                <Col xs={12}>
                <h3>Order Details</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Order Id</th>
                            <th>Order Date</th>
                            <th>Order Status</th>
                            <th>Order Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>12/12/2020</td>
                            <td>Delivered</td>
                            <td>1000</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>12/12/2020</td>
                            <td>Delivered</td>
                            <td>1000</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>12/12/2020</td>
                            <td>Delivered</td>
                            <td>1000</td>
                        </tr>
                    </tbody>
                </table>
                </Col>
            </Row>
        </Container>
    );
};

export default Page;
