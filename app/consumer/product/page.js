"use client"
import React, {Suspense, useEffect} from 'react';
import {Container, Row, Col, Card, Button, Image} from 'react-bootstrap';
import {useSearchParams} from 'next/navigation'
import {useSelector, useDispatch} from 'react-redux';
import {addToCart} from "@/app/store/cartAction";
import Link from "next/link";

export default function Page(request) {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    const category = [
        {
            id: 1,
            name: "Vegetables"
        },
        {
            id: 2,
            name: "Fruits"
        },
        {
            id: 3,
            name: "Meat"
        },
        {
            id: 4,
            name: "Fish"
        },
        {
            id: 5,
            name: "Grocery"
        },
        {
            id: 6,
            name: "Daily Needs"
        },
        {
            id: 7,
            name: 'Bakery'
        },
        {
            id: 8,
            name: 'Bevarages'
        },
        {
            id: 9,
            name: 'Snacks'
        },
        {
            id: 10,
            name: 'Others'
        }
    ]

    const searchParams = useSearchParams()

    const categoryParam = searchParams.get('category')
    const srcParams = searchParams.get('src')
    const trendingParam = searchParams.get('isTrending')
    const featuredParam = searchParams.get('isFeatured')

    useEffect(() => {
        dispatch({type: 'GET_PRODUCTS', payload: {src: srcParams}})
        if (categoryParam) {
            dispatch({type: 'GET_PRODUCTS', payload: {category: categoryParam}})
        }
        if (trendingParam) {
            dispatch({type: 'GET_PRODUCTS', payload: {isTrending: trendingParam}})
        }
        if (featuredParam) {
            dispatch({type: 'GET_PRODUCTS', payload: {isFeatured: featuredParam}})
        }
    }, [srcParams]);

    const handleAddToCart = (product) => {
        console.log(product)
        dispatch(addToCart(product));
    };

    const categoryName = category.find(cat => cat.id === parseInt(categoryParam))

    return (
        <Suspense>
            <Container className="product-card">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <Row className="header-row text-center">
                    <Col className="header-row-body">
                        <h1>Products </h1>
                        <p>Get your daily needs from our store</p>
                    </Col>
                </Row>
                {
                    products.length > 0 ? <Row className="mb-3">
                        <Col>
                            <h2 className="fw-bold">{categoryName && categoryName.name}</h2>
                        </Col>
                        <Col className="text-end">
                            <Button variant="light" className="fw-bold pr-3 custom-round-button">View All</Button>
                        </Col>
                    </Row> : ''
                }

                <Row>
                    {
                        products.length > 0 ? products.map(product => (
                                <Col xs={12} md={2} key={product.id}>
                                    <Card className="single-product-card">
                                        {
                                            product.discount > 0 ?
                                                <Card.Text><span
                                                    className={product.price > 8 && product.price < 16 ? "fw-bold badge bg-danger discounted" : "fw-bold badge bg-success discounted"}>{product.discount} off</span></Card.Text>
                                                : ''
                                        }
                                        <Card.Img variant="top" className="p-3" src={`${product.image}`}/>
                                        <Card.Body>
                                            <Card.Text className="p"><Link href={'/consumer/product/' + `${product.slug}`} className="text-decoration-none text-body-secondary fw-bold">{product.name} {product.nameBn ? '(' + product.nameBn + ')' : ''} </Link></Card.Text>
                                            <Card.Text className="fw-bolder h5"><span
                                                className="text-danger">Tk </span>{product.price}</Card.Text>
                                            {
                                                product.stock > 0 ?
                                                    <Button variant="light"
                                                            className="fw-bold pr-3 custom-round-button add-to-cart"
                                                            onClick={() => handleAddToCart(product)}>Add
                                                        to Cart</Button>
                                                    :
                                                    <Button variant="light"
                                                            className="fw-bold pr-3 custom-round-button add-to-cart text-danger"
                                                            disabled>Out of Stock</Button>
                                            }

                                        </Card.Body>
                                    </Card>
                                </Col>
                            )) :
                            <Col>
                                <Card className="text-center border-0">
                                    <Card.Body>
                                        <Image src="/images/products/404.webp" alt="Not Found" className="img-fluid"
                                               width={'400'} height={'400'}/>
                                        <Card.Title>No product found</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                    }
                </Row>

            </Container>
        </Suspense>
    );
}
