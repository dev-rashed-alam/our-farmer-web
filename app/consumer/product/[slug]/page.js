"use client";

import NotFound from "@/app/consumer/components/404";
import {Button, Card, Col, Container, Row, Tabs, Tab} from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import React, {useEffect} from "react";
import { BsFillStarFill, BsStar } from "react-icons/bs";
import {useRouter} from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "@/app/store/cartAction";

export default function Page({params}) {
    const dispatch = useDispatch();
    const  {slug} = params;
    const products = useSelector(state => state.allProducts);

    const product = products.find(product => product.slug === slug);

    const relatedProducts = products.filter(item => item.category == product?.category && item.id !== product?.id);


    const handleAddToCartz = ({id, name, price, quantity}) => {
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
    const handleAddToCart = (product) => {
        console.log(product)
        dispatch(addToCart(product));
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
                                    <span className="fw-bold h2">{product.name} {product.nameBn ? '(' + product.nameBn + ')' : ''}</span>
                                       <div className="mt-1">SKU: {product.sku}</div>
                                   </div>
                                   <p className="mt-3">{product.description}</p>
                                   <p className="text-dark fw-bold h3 mt-3">
                                       TK:{
                                           product.discountType =='PERCENTAGE' ?
                                               (product.discount > 0 ? product.price - (product.price * product.discount / 100) : product.price):
                                               product.discount > 0 ? product.price - product.discount : product.price
                                       }
                                       &nbsp; <del className="text-danger">Tk {product.price}</del>
                                   </p>
                                   <div className="product-buttons">
                                       {
                                             product.stock > 0 ? (
                                                  <>
                                                      <Button className="text-dark product-cart-button" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                                                      <Button className="text-dark product-buy-button" onClick={() => handleAddToCart(product)} href={'/consumer/checkout'}>Buy Now</Button>
                                                  </>
                                             ) : (
                                                  <Button variant="light" className="fw-bold pr-3 custom-round-button add-to-cart text-danger" disabled>Out of Stock</Button>
                                             )
                                       }
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
                                          <div className="m-3">{product.description}</div>
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
                                   relatedProducts && relatedProducts.map(item => (
                                       <Col xs={12} md={2} key={item.id}>
                                           <Card className="single-product-card">
                                               <Card.Text><span className={item.price > 8 && item.price < 16 ? "fw-bold badge bg-danger discounted" : "fw-bold badge bg-success discounted"}>{item.discount}</span></Card.Text>
                                               <Card.Img variant="top" className="p-3" src={`${item.image}`} />
                                               <Card.Body>
                                                   <Card.Text className="p"><Link href={'/consumer/product/' + `${item.slug}`} className="text-decoration-none">{item.name}</Link></Card.Text>
                                                   <Card.Text className="fw-bolder h5"><span className="text-danger">Tk </span>{item.price}</Card.Text>
                                                   {
                                                       item.stock > 0 ?
                                                           <Button variant="light" className="fw-bold pr-3 custom-round-button add-to-cart" onClick={()=>handleAddToCart(item)}>Add to Cart</Button>
                                                           :
                                                           <Button variant="light" className="fw-bold pr-3 custom-round-button add-to-cart text-danger" disabled>Out of Stock</Button>
                                                   }
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
