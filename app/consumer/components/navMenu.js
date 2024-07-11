import React, {useState} from 'react';
import {Container, Navbar, Nav, Dropdown, Row, Col} from 'react-bootstrap';
import '@/public/styles/consumer/navmenu.css';
import Link from "next/link";

const NavMenu = () => {
    const [active, setActive] = useState(null);

    const handleNavLinkClick = (index) => {
        setActive(index);
    };

    return (
        <header className="nav-menu">
            <Navbar expand="lg" variant="dark" className="navbar">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    {/*<Navbar.Collapse id="basic-navbar-nav">*/}
                    <Row className="nav-menu-row">
                        <Col xs={4}>
                            <Nav className="me-auto">
                                <Link
                                    href={'/consumer/about'}
                                    className="text-decoration-none text-body-secondary top-menu"
                                >
                                    About us
                                </Link>
                                <Link
                                    href={'/sign-up'}
                                    className="text-decoration-none text-body-secondary top-menu"
                                >
                                    Sell on Our Farmer
                                </Link>
                            </Nav>
                        </Col>
                        <Col xs={5}>
                            <Nav className="me-auto">
                                <div className="align-content-end">
                                    <Link
                                        href="#"
                                        className={`nav-link ${active === 4 ? '' : ''}`}
                                        onClick={() => handleNavLinkClick(4)}
                                    >
                                        We deliver to you every day from&nbsp;
                                        <span className='text-danger fw-bold'>
                                            7:00 to 23:00
                                        </span>
                                    </Link>
                                </div>
                            </Nav>
                        </Col>
                        <Col xs={3}>
                            <Nav className="ms-auto">
                                <Link href={'/consumer/order-tracking'} className="top-menu">Order Tracking</Link>
                            </Nav>
                        </Col>
                    </Row>
                    {/*</Navbar.Collapse>*/}
                </Container>
            </Navbar>
        </header>
    );
}

export default NavMenu;
