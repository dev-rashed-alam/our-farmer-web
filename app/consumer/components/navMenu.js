import React, { useState } from 'react';
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
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    {/*<Navbar.Collapse id="basic-navbar-nav">*/}
                       <Row className="nav-menu-row">
                           <Col xs={4}>
                               <Nav className="me-auto">
                                   <Nav.Link to=""><Link href={'/consumer/about'} className="text-decoration-none text-body-secondary">About us</Link></Nav.Link>
                                   <Nav.Link to=""><Link href={'/consumer/myaccount'} className="text-decoration-none text-body-secondary">My Account</Link></Nav.Link>
                                   <Nav.Link to="#">Wishlist</Nav.Link>
                               </Nav>
                           </Col>
                           <Col xs={5}>
                               <Nav className="me-auto">
                                   <div className="align-content-end">
                                       <Nav.Link to="#" className={`nav-link ${active === 4 ? '' : ''}`} onClick={() => handleNavLinkClick(4)}>We deliver to you every day from <span className='text-danger fw-bold'>7:00 to 23:00</span></Nav.Link>
                                   </div>
                               </Nav>
                           </Col>
                           <Col xs={3}>
                               <Nav className="ms-auto">
                                   <Dropdown className="lang-dropdown">
                                       <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                                           English <svg width="16" height="17" viewBox="0 0 16 17" fill="none" className="text-token-text-tertiary"><path d="M11.3346 7.83203L8.00131 11.1654L4.66797 7.83203" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu>
                                           <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                                           <Dropdown.Item href="#/action-2">Bangla</Dropdown.Item>
                                       </Dropdown.Menu>
                                   </Dropdown>
                                   <Dropdown className="currency-dropdown">
                                       <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                                           BDT <svg width="16" height="17" viewBox="0 0 16 17" fill="none" className="text-token-text-tertiary"><path d="M11.3346 7.83203L8.00131 11.1654L4.66797 7.83203" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu>
                                           <Dropdown.Item href="#/action-1">BDT</Dropdown.Item>
                                           <Dropdown.Item href="#/action-2">USD</Dropdown.Item>
                                       </Dropdown.Menu>
                                   </Dropdown>
                                   <Nav.Link href={'/consumer/order-tracking'}>Order Tracking</Nav.Link>
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
