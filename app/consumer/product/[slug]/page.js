"use client";

import NotFound from "@/app/consumer/components/404";
import {Button, Card, Col, Container, Row, Tabs, Tab} from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillStarFill, BsStar } from "react-icons/bs";

export default function Page({params}) {
    const  {slug} = params;
    //write code for fetch of product using axios api and filter the product by  param

    const products = [
        {
            id: 1,
            name: "Cauliflower (ফুলকপি)",
            slug: "cauliflower",
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
            slug: "pumpkin",
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
            slug: "spinach",
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
            slug: "ladys-finger",
            price: 6.99,
            image: "/images/products/3.jpeg",
            description: "Fresh organic Ladies-finger from the farm",
            discount: "20% off",
            types: null
        },
        {
            id: 5,
            name: "Rice (চাল)",
            slug: "rice",
            price: 7.99,
            image: "/images/products/4.jpeg",
            description: "Fresh organic pineapple from the farm",
            discount: null,
            types: "Organic"
        },
        {
            id: 6,
            name: "Potato (আলু)",
            slug: "potato",
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
            slug: "tomato",
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
            slug: "cabbage",
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
            slug: "green-chilli",
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
            slug: "ginger",
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
            slug: "garlic",
            price: 14.99,
            image: "/images/products/13.webp",
            description: "Fresh organic garlic from the farm",
            discount: "5% off",
            types: "Sales"
        },
        {
            id: 13,
            name: "Onion (পেঁয়াজ)",
            slug: "onion",
            price: 15.99,
            image: "/images/products/8.jpeg",
            description: "Fresh organic onion from the farm",
            discount: "15% off",
            types: "Organic"
        },
    ];
    const product = products.find(product => product.slug === slug);

    const handleAddToCart = ({id, name, price, quantity}) => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const newItem = { id, name, price, quantity: 1 };
        const existingItem = cartItems.find(item => item.id === id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartItems.push(newItem);
        }

        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    };
    return (
        <main>
            {
                product ? (
                   <div className="product-details">
                       <Container>
                           <Row>
                               <Col xs={5}>
                                   <div  className="text-center">
                                       <Image src={`${product.image}`} alt={''} width={300} height={300}/>
                                   </div>
                               </Col>
                               <Col xs={7}>
                                   <div className="border-bottom p-1">
                                    <span className="fw-bold h2">{product.name}</span>
                                       <div className="mt-1">SKU: E7F8G9H0</div>
                                   </div>
                                   <p className="mt-3">Lorem ipsum text nisl ut dolor dignissim semper. Nulla luctus Lorem ipsum tincidunt. Class aptent
                                       sociosqu ad litora torquent Lorem ipsum Lorem ipsum nisl ut dolor dignissim semper.</p>
                                   <p className="text-danger fw-bold h3 mt-3">TK: {product.price}</p>
                                   <div className="product-buttons">
                                       <Button className="text-dark product-cart-button" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                                       <Button className="text-dark product-buy-button">Buy Now</Button>
                                   </div>
                               </Col>

                           </Row>
                           <Row>
                               <Col xs={12}>
                                   <Tabs
                                       className="navtabs"
                                       defaultActiveKey="home"
                                       transition={false}
                                       id="noanim-tab-example"
                                   >
                                       <Tab eventKey="home" title="Description">
                                          <div className="m-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab delectus doloribus magni, natus nemo nesciunt,
                                              odit officiis omnis quae quisquam repellendus repudiandae tenetur voluptatem! Adipisci consequatur
                                              impedit modi officiis ut. Eaque eos harum quia tenetur. Ab enim modi nulla quae, qui quo
                                              rem sequi! Consequuntur, fuga, soluta. A beatae, debitis dicta ducimus esse eveniet illum
                                              iure minus quos tempora. Facilis minus nemo provident voluptatem! Aspernatur consectetur quos recusandae ullam? Accusamus,
                                              assumenda aut dolorum ducimus ea excepturi explicabo ipsa ipsum mollitia nisi nobis suscipit,
                                              tempora ut vel voluptatum? Blanditiis cupiditate debitis eius, error et impedit nihil officia? Atque doloribus incidunt minima?</div>

                                       </Tab>
                                       <Tab eventKey="profile" title="Reviews (2)">
                                           <Row className="m-3 border-bottom">
                                               <Col xs={8}>
                                                   <p className="author">
                                                      <span>
                                                        <BsFillStarFill className="bootstrap-star-icon" />
                                                        <BsFillStarFill className="bootstrap-star-icon" />
                                                        <BsFillStarFill className="bootstrap-star-icon" />
                                                        <BsFillStarFill className="bootstrap-star-icon" />
                                                        <BsStar className="bootstrap-star-icon-o" />
                                                      </span> MD. Sajjad
                                                   </p>
                                                   <div>
                                                       <p>অনেক ভালো একটি পণ্য অসাধারণ একটি পণ্য আপনারা চাইলে নিতে পারেন ধন্যবাদ তার দারাজকে</p>
                                                   </div>
                                               </Col>
                                               <Col xs={4}>
                                                   <span className="text-end">3 months ago</span>
                                               </Col>
                                           </Row>
                                           <Row className="m-3 border-bottom">
                                               <Col xs={8}>
                                                   <p className="author">
                                                      <span>
                                                        <BsFillStarFill className="bootstrap-star-icon" />
                                                        <BsFillStarFill className="bootstrap-star-icon" />
                                                        <BsFillStarFill className="bootstrap-star-icon" />
                                                        <BsStar className="bootstrap-star-icon-o" />
                                                          <BsStar className="bootstrap-star-icon-o" />
                                                      </span> Rashed
                                                   </p>
                                                   <div>
                                                       <p>অনেক ভালো একটি পণ্য অসাধারণ একটি পণ্য আপনারা চাইলে নিতে পারেন ধন্যবাদ তার দারাজকে</p>
                                                   </div>
                                               </Col>
                                               <Col xs={4}>
                                                   <span className="text-end">3 months ago</span>
                                               </Col>
                                           </Row>
                                       </Tab>
                                   </Tabs>
                               </Col>
                           </Row>

                       </Container>
                       <Container className="product-card">
                           {/* eslint-disable-next-line react/no-unescaped-entities */}
                           <Card.Title><span className="fw-bolder h3 p-0">Related Products </span></Card.Title>
                           <Row>
                               {
                                   products.map(item => (
                                       <Col xs={12} md={2} key={item.id}>
                                           <Card className="single-product-card">
                                               <Card.Text><span className={item.price > 8 && item.price < 16 ? "fw-bold badge bg-danger discounted" : "fw-bold badge bg-success discounted"}>{item.discount}</span></Card.Text>
                                               <Card.Img variant="top" className="p-3" src={`${item.image}`} />
                                               <Card.Body>
                                                   <Card.Text className="p"><Link href={'/consumer/product/' + `${item.slug}`} className="text-decoration-none">{item.name}</Link></Card.Text>
                                                   <Card.Text className="fw-bolder h5"><span className="text-danger">Tk </span>{item.price}</Card.Text>
                                                   <Button variant="light" className="fw-bold pr-3 custom-round-button add-to-cart">Add to Cart</Button>
                                               </Card.Body>
                                           </Card>
                                       </Col>
                                   ))
                               }
                           </Row>
                       </Container>
                   </div>
                ) : (
                   <NotFound />
                )
            }
        </main>
    );
}
