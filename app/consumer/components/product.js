"use client";

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '@/public/styles/consumer/product.css';
import Button from "react-bootstrap/Button";
const Product = () => {
    const products = [
        {
            id: 1,
            name: "Cauliflower (ফুলকপি)",
            price: 5.99,
            image: "/images/products/1.png",
            description: "Fresh organic apple from the farm",
            discount: "10% off",
            types: "Sales",
            isFeatured: false
        },
        {
            id: 14,
            name: "Pumpkin (কুমড়ো)",
            price: 16.99,
            image: "/images/products/9.webp",
            description: "Fresh organic pumpkin from the farm",
            discount: "20% off",
            types: null,
            isFeatured: false
        },
        {
            id: 15,
            name: "Spinach (পালং)",
            price: 17.99,
            image: "/images/products/9.jpeg",
            description: "Fresh organic spinach from the farm",
            discount: null,
            types: "Organic",
            isFeatured: true
        },
        {
            id: 4,
            name: "Lady's finger (ঢেঁড়স)",
            price: 6.99,
            image: "/images/products/3.jpeg",
            description: "Fresh organic Ladies-finger from the farm",
            discount: "20% off",
            types: null
        },
        {
            id: 5,
            name: "Rice (চাল)",
            price: 7.99,
            image: "/images/products/4.jpeg",
            description: "Fresh organic pineapple from the farm",
            discount: null,
            types: "Organic"
        },
        {
            id: 6,
            name: "Potato (আলু)",
            price: 8.99,
            image: "/images/products/6.jpeg",
            description: "Fresh organic watermelon from the farm",
            discount: "10% off",
            types: "Sales",
            isFeatured: true
        },
        {
            id: 7,
            name: "Tomato (টমেটো)",
            price: 9.99,
            image: "/images/products/14.jpeg",
            description: "Fresh organic tomato from the farm",
            discount: "5% off",
            types: "Sales",
            isFeatured: true
        },
        {
            id: 9,
            name: "Cabbage (বাঁধাকপি)",
            price: 11.99,
            image: "/images/products/10.jpeg",
            description: "Fresh organic cabbage from the farm",
            discount: "20% off",
            types: null,
            isFeatured: true
        },
        {
            id: 10,
            name: "Green Chilli (মরিচ)",
            price: 12.99,
            image: "/images/products/11.webp",
            description: "Fresh organic green chilli from the farm",
            discount: null,
            types: "Organic",
            isFeatured: false

        },
        {
            id: 11,
            name: "Ginger (আদা)",
            price: 13.99,
            image: "/images/products/12.jpeg",
            description: "Fresh organic ginger from the farm",
            discount: "10% off",
            types: "Sales",
            isFeatured: true
        },
        {
            id: 12,
            name: "Garlic (রসুন)",
            price: 14.99,
            image: "/images/products/13.webp",
            description: "Fresh organic garlic from the farm",
            discount: "5% off",
            types: "Sales"
        },
        {
            id: 13,
            name: "Onion (পেঁয়াজ)",
            price: 15.99,
            image: "/images/products/8.jpeg",
            description: "Fresh organic onion from the farm",
            discount: "15% off",
            types: "Organic"
        },
        ];
    const bestSales = products.filter(product => product.isFeatured).slice(0, 4);
    const firstTwoProducts = bestSales.slice(0, 2);
    const lastTwoProducts = bestSales.slice(2);

    return (
        <Container className="product-card">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <Card.Title><span className="fw-bolder h3 p-0">New Arrivals </span><span className="small text-body-secondary"> Don't miss this opportunity at a special discount just for this week.</span></Card.Title>
            <Row>
                {
                    products.map(product => (
                        <Col xs={12} md={2} key={product.id}>
                            <Card className="single-product-card">
                                <Card.Text><span className={product.price > 8 && product.price < 16 ? "fw-bold badge bg-danger discounted" : "fw-bold badge bg-success discounted"}>{product.discount}</span></Card.Text>
                                <Card.Img variant="top" className="p-3" src={`${product.image}`} />
                                <Card.Body>
                                    <Card.Text className="p">{product.name}</Card.Text>
                                    <Card.Text className="fw-bolder h5"><span className="text-danger">Tk </span>{product.price}</Card.Text>
                                    <Button variant="light" className="fw-bold pr-3 custom-round-button add-to-cart">Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>

            <div className="mt-4">
                <Card.Title className="mt-3"><span className="fw-bolder h3 p-0">Best Sales </span><span className="small text-body-secondary"> Some of the new products arriving this weeks.</span></Card.Title>
                <Row>
                    {
                        firstTwoProducts.map(product => (
                            <Col xs={12} md={2} key={product.id}>
                                <Card className="single-product-card">
                                    <Card.Text><span className={product.price > 8 && product.price < 16 ? "fw-bold badge bg-danger discounted" : "fw-bold badge bg-success discounted"}>{product.discount}</span></Card.Text>
                                    <Card.Img variant="top" className="p-3" src={`${product.image}`} />
                                    <Card.Body>
                                        <Card.Text className="p">{product.name}</Card.Text>
                                        <Card.Text className="fw-bolder h5"><span className="text-danger">Tk </span>{product.price}</Card.Text>
                                        <Button variant="light" className="fw-bold pr-3 custom-round-button add-to-cart">Add to Cart</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                    {/* Ads Banner */}
                    <Col xs={12} md={4}>
                        <Card className="ads-card">
                            <Card.Body>
                                <Card.Body>
                                    <Card.Title className="text-danger">Only This Week</Card.Title>
                                    <Card.Text className="fw-bolder h3 lh-3">We are always here to help you with your grocery</Card.Text>
                                    <Button variant="light" className="fw-bold pr-3 custom-round-button">Shop Now →</Button>
                                </Card.Body>
                            </Card.Body>
                        </Card>
                    </Col>

                    {
                        lastTwoProducts.map(product => (
                            <Col xs={12} md={2} key={product.id}>
                                <Card className="single-product-card">
                                    <Card.Text><span className={product.price > 8 && product.price < 16 ? "fw-bold badge bg-danger discounted" : "fw-bold badge bg-success discounted"}>{product.discount}</span></Card.Text>
                                    <Card.Img variant="top" className="p-3" src={`${product.image}`} />
                                    <Card.Body>
                                        <Card.Text className="p">{product.name}</Card.Text>
                                        <Card.Text className="fw-bolder h5"><span className="text-danger">Tk </span>{product.price}</Card.Text>
                                        <Button variant="light" className="fw-bold pr-3 custom-round-button add-to-cart">Add to Cart</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </Container>
    );
}

export default Product;
