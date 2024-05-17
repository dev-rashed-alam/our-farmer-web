"use client";

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '@/public/styles/consumer/contact.css'
import Header from "@/app/consumer/components/header";
import Footer from "@/app/consumer/components/footer";

const contactInfo = {
    phone: "+880 1867 131 561",
    email: "contact@ourfarmer.com",
    address: "Merul Badda, Dhaka, Bangladesh"
};

const Page = () => {
    return (
       <>
       <Header/>
           <Container className="contact-page">
               <Row className="header-row text-center my-5">
                   <Col>
                       <h1>Contact Us</h1>
                       <p>Get in touch with us through the following contact information.</p>
                   </Col>
               </Row>
               <Row className="contact-info-section text-center">
                   <Col md={4}>
                       <Card className="contact-card">
                           <Card.Body>
                               <FaPhone className="contact-icon" />
                               <Card.Title>Phone</Card.Title>
                               <Card.Text>{contactInfo.phone}</Card.Text>
                           </Card.Body>
                       </Card>
                   </Col>
                   <Col md={4}>
                       <Card className="contact-card">
                           <Card.Body>
                               <FaEnvelope className="contact-icon" />
                               <Card.Title>Email</Card.Title>
                               <Card.Text>{contactInfo.email}</Card.Text>
                           </Card.Body>
                       </Card>
                   </Col>
                   <Col md={4}>
                       <Card className="contact-card">
                           <Card.Body>
                               <FaMapMarkerAlt className="contact-icon" />
                               <Card.Title>Address</Card.Title>
                               <Card.Text>{contactInfo.address}</Card.Text>
                           </Card.Body>
                       </Card>
                   </Col>
               </Row>
           </Container>
       <Footer/>
       </>
    );
};

export default Page;
