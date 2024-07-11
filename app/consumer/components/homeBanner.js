"use client";

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '@/public/styles/consumer/homeBanner.css';
import Button from "react-bootstrap/Button";
const WebBanner = () => {
    return (
        <Container className="web-banner">
            <Row>
                {/* Featured Product Card */}
                <Col xs={12} md={3} className="mb-3 mb-md-0">


                    <Card className="featured-product-card">
                        <Card.Body>
                            <Card.Title className="text-danger title">Organic Featured Products</Card.Title>
                            <Card.Text className="fw-bolder h3 lh-3">We are always here to help you with your grocery</Card.Text>
                           <Button variant="light" className="fw-bold pr-3 custom-round-button">Shop Now →</Button>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Web Banner */}
                <Col xs={12} md={9}>
                    <div className="web-banner-content">
                        <p></p>
                        <Button variant="primary" className='shop-now'>Shop Now</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default WebBanner;
