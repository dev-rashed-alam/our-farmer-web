"use client"
import React, {Suspense} from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

import Header from "@/app/consumer/components/header";
import Footer from "@/app/consumer/components/footer";
import '@/public/styles/consumer/about.css'

const teamMembers = [
    {
        name: 'Md. Rashed Alam',
        role: '203015007',
        image: 'https://avatars.githubusercontent.com/u/85504794?v=4',
        twitter: '#',
        linkedin: '#',
        github: '#'
    },
    {
        name: 'Mohammad Sajjad Hossain',
        role: '203015006',
        image: 'https://gitlab.com/uploads/-/system/user/avatar/2035473/avatar.png',
        twitter: '#',
        linkedin: '#',
        github: '#'
    },
    {
        name: 'Mariom Akther',
        role: '201015049',
        image: 'https://www.svgrepo.com/show/382100/female-avatar-girl-face-woman-user-7.svg',
        twitter: '#',
        linkedin: '#',
        github: '#'
    }
];

const About = () => {
    return (
        <Suspense>
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
                                    <Card.Img variant="top" src={member.image}/>
                                    <Card.Body>
                                        <Card.Title>{member.name}</Card.Title>
                                        <Card.Text>{member.role}</Card.Text>
                                        <div className="social-icons">
                                            <a href={member.twitter} className="twitter"><FaTwitter/></a>
                                            <a href={member.linkedin} className="linkedin"><FaLinkedin/></a>
                                            <a href={member.github} className="github"><FaGithub/></a>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <Row className="mission-section text-center my-5 bg-info-subtle">
                        <Col>
                            <h2>Our Mission</h2>
                            {/*Our Farmer Mission*/}
                            <p>Our mission is to empower farmers to improve their livelihoods and build a sustainable
                                future.
                                <br/>
                                We believe that by providing farmers with the tools and resources they need to succeed,
                                we can help them
                                build a better life for themselves and their families.</p>
                            {/*<Button variant="primary">Learn More</Button>*/}
                        </Col>
                    </Row>
                    <Row className="mission-section text-center my-5">
                        <Col>
                            <h2>Our Vision</h2>
                            {/*Our Farmer Mission*/}
                            <p>Our vision is to create a world where every farmer has the opportunity to thrive.
                                <br/>
                                We believe that by working together, we can build a more sustainable future for all.</p>
                            {/*<Button variant="primary">Learn More</Button>*/}
                        </Col>
                    </Row>
                </Container>
                <Footer/>
            </div>
        </Suspense>
    );
};

export default About;
