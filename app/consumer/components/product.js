"use client";

import React, {useEffect} from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '@/public/styles/consumer/product.css';
import Button from "react-bootstrap/Button";
import Link from "next/link";
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from "@/app/store/cartAction";
import axios from "axios";
import {API_BASE_URL} from "@/app/config/constant";
import {fetchAllProducts, fetchProductsFailure, fetchProductsSuccess} from "@/app/store/productAction";
const Product = () => {
    const products = useSelector(state => state.products);

    const bestSales = products.filter(product => product.isFeatured).slice(0, 4);
    const firstTwoProducts = bestSales.slice(0, 2);
    const lastTwoProducts = bestSales.slice(2);

    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        console.log(product)
        dispatch(addToCart(product));
    };

    useEffect(() => {
        const products = fetchAllProducts()
        products.then(response => {
            dispatch(fetchProductsSuccess(response.data))
        }).catch(error => {
            dispatch(fetchProductsFailure(error))
        })
    }, []);

    return (
        <Container className="product-card">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <Card.Title><span className="fw-bolder h3 p-0">New Arrivals </span><span className="small text-body-secondary"> Don't miss this opportunity at a special discount just for this week.</span></Card.Title>
            <Row>
                {
                    products.map(product => (

                        <Col xs={12} md={2} key={product.id}>
                            <Card className="single-product-card">
                                {
                                    product.discountType =='PERCENTAGE' ? (product.discount > 0 ?
                                        <Card.Text><span className={product.price > 8 && product.price < 16 ? "fw-bold badge bg-danger discounted" : "fw-bold badge bg-success discounted"}>{product.discount}% off</span></Card.Text>
                                        : ''):
                                        (product.discount > 0 ? <Card.Text><span className={product.price > 8 && product.price < 16 ? "fw-bold badge bg-danger discounted" : "fw-bold badge bg-info text-white discounted"}>Tk{product.discount} off</span></Card.Text> : '')
                                }
                                <Card.Img variant="top" className="p-3" src={`${product.image}`} />
                                <Card.Body>
                                    <Card.Text className="p "><Link href={'/consumer/product/' + `${product.slug}`} className="text-decoration-none text-body-secondary fw-bold">{product.name} {product.nameBn ? '(' + product.nameBn + ')' : ''}</Link></Card.Text>
                                    <Card.Text className="fw-bolder h5">
                                        <span className="text-danger">Tk </span>
                                        {
                                         product.discountType =='PERCENTAGE' ?
                                             (product.discount > 0 ? product.price - (product.price * product.discount / 100) : product.price):
                                             product.discount > 0 ? product.price - product.discount : product.price
                                        }
                                        { product.discount > 0 ? <small><del>Tk {product.price}</del></small> : ''}
                                    </Card.Text>
                                    {
                                        product.stock > 0 ?
                                            <Button variant="light" className="text-body-secondary fw-bold pr-3 custom-round-button add-to-cart" onClick={()=>handleAddToCart(product)}>Add to Cart</Button>
                                            :
                                            <Button variant="light" className="fw-bold pr-3 custom-round-button add-to-cart text-danger" disabled>Out of Stock</Button>
                                    }
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
                                    {
                                        product.discountType =='PERCENTAGE' ? (product.discount > 0 ?
                                                <Card.Text><span className={product.price > 8 && product.price < 16 ? "fw-bold badge bg-danger discounted" : "fw-bold badge bg-success discounted"}>{product.discount}% off</span></Card.Text>
                                                : ''):
                                            (product.discount > 0 ? <Card.Text><span className={product.price > 8 && product.price < 16 ? "fw-bold badge bg-danger discounted" : "fw-bold badge bg-info text-white discounted"}>Tk{product.discount} off</span></Card.Text> : '')
                                    }
                                    <Card.Img variant="top" className="p-3" src={`${product.image}`} />
                                    <Card.Body>
                                        <Card.Text className="p "><Link href={'/consumer/product/' + `${product.slug}`} className="text-decoration-none text-body-secondary fw-bold">{product.name} {product.nameBn ? '(' + product.nameBn + ')' : ''}</Link></Card.Text>
                                        <Card.Text className="fw-bolder h5">
                                            <span className="text-danger">Tk </span>
                                            {
                                                product.discountType =='PERCENTAGE' ?
                                                    (product.discount > 0 ? product.price - (product.price * product.discount / 100) : product.price):
                                                    product.discount > 0 ? product.price - product.discount : product.price
                                            } { product.discount > 0 ? <small><del>Tk {product.price}</del></small> : ''}
                                        </Card.Text>
                                        {
                                            product.stock > 0 ?
                                                <Button variant="light" className="text-body-secondary fw-bold pr-3 custom-round-button add-to-cart" onClick={()=>handleAddToCart(product)}>Add to Cart</Button>
                                                :
                                                <Button variant="light" className="fw-bold pr-3 custom-round-button add-to-cart text-danger" disabled>Out of Stock</Button>
                                        }
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
                                    <Button variant="light" className="fw-bold pr-3 custom-round-button" href={'/consumer/product'}>Shop Now →</Button>
                                </Card.Body>
                            </Card.Body>
                        </Card>
                    </Col>

                    {
                        lastTwoProducts.map(product => (
                            <Col xs={12} md={2} key={product.id}>
                                <Card className="single-product-card">
                                    {
                                        product.discountType =='PERCENTAGE' ? (product.discount > 0 ?
                                                <Card.Text><span className={product.price > 8 && product.price < 16 ? "fw-bold badge bg-danger discounted" : "fw-bold badge bg-success discounted"}>{product.discount}% off</span></Card.Text>
                                                : ''):
                                            (product.discount > 0 ? <Card.Text><span className={product.price > 8 && product.price < 16 ? "fw-bold badge bg-danger discounted" : "fw-bold badge bg-info text-white discounted"}>Tk{product.discount} off</span></Card.Text> : '')
                                    }
                                    <Card.Img variant="top" className="p-3" src={`${product.image}`} />
                                    <Card.Body>
                                        <Card.Text className="p "><Link href={'/consumer/product/' + `${product.slug}`} className="text-decoration-none text-body-secondary fw-bold">{product.name} ({product.nameBn})</Link></Card.Text>
                                        <Card.Text className="fw-bolder h5">
                                            <span className="text-danger">Tk </span>
                                            {
                                                product.discountType =='PERCENTAGE' ?
                                                    (product.discount > 0 ? product.price - (product.price * product.discount / 100) : product.price):
                                                    product.discount > 0 ? product.price - product.discount : product.price
                                            } <small><del>Tk {product.price}</del></small></Card.Text>
                                        {
                                            product.stock > 0 ?
                                                <Button variant="light" className="text-body-secondary fw-bold pr-3 custom-round-button add-to-cart" onClick={()=>handleAddToCart(product)}>Add to Cart</Button>
                                                :
                                                <Button variant="light" className="fw-bold pr-3 custom-round-button add-to-cart text-danger" disabled>Out of Stock</Button>
                                        }
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
