"use client"
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

import Header from "@/app/consumer/components/header";
import Footer from "@/app/consumer/components/footer";
import '@/public/styles/consumer/about.css'

const teamMembers = [
    {
        name: 'John Doe',
        role: 'CEO',
        image: '/images/john.jpg',
        twitter: '#',
        linkedin: '#',
        github: '#'
    },
    {
        name: 'Jane Smith',
        role: 'CTO',
        image: '/images/jane.jpg',
        twitter: '#',
        linkedin: '#',
        github: '#'
    },
    {
        name: 'Alice Johnson',
        role: 'COO',
        image: '/images/alice.jpg',
        twitter: '#',
        linkedin: '#',
        github: '#'
    }
];

const About = () => {
    return (
      <div>
          <Header/>
          <Container className="about-page">
              <Row className="header-row text-center my-5">
                  <Col>
                      <h1>About Us</h1>
                      <p>Learn more about our team and mission.</p>
                  </Col>
              </Row>
              <Row className="team-section text-center">
                  <Col>
                      <h2>Our Team</h2>
                  </Col>
              </Row>
              <Row>
                  {teamMembers.map((member, index) => (
                      <Col md={4} key={index} className="my-3">
                          <Card className="team-card">
                              <Card.Img variant="top" src={member.image} />
                              <Card.Body>
                                  <Card.Title>{member.name}</Card.Title>
                                  <Card.Text>{member.role}</Card.Text>
                                  <div className="social-icons">
                                      <a href={member.twitter} className="twitter"><FaTwitter /></a>
                                      <a href={member.linkedin} className="linkedin"><FaLinkedin /></a>
                                      <a href={member.github} className="github"><FaGithub /></a>
                                  </div>
                              </Card.Body>
                          </Card>
                      </Col>
                  ))}
              </Row>
              <Row className="mission-section text-center my-5">
                  <Col>
                      <h2>Our Mission</h2>
                      <p>We aim to revolutionize the industry with our innovative solutions and dedicated team.</p>
                      <Button variant="primary">Learn More</Button>
                  </Col>
              </Row>
          </Container>
          <Footer/>
      </div>
    );
};

export default About;
