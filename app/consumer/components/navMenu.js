import React, { useState } from 'react';
import { Container, Navbar, Nav, Dropdown } from 'react-bootstrap';
import '@/public/styles/consumer/navmenu.css';

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
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link to="#" className={`nav-link ${active === 1 ? 'active' : ''}`} onClick={() => handleNavLinkClick(1)}>About us</Nav.Link>
                            <Nav.Link to="#" className={`nav-link ${active === 2 ? 'active' : ''}`} onClick={() => handleNavLinkClick(2)}>My Account</Nav.Link>
                            <Nav.Link to="#" className={`nav-link ${active === 3 ? 'active' : ''}`} onClick={() => handleNavLinkClick(3)}>Wishlist</Nav.Link>
                            <Nav.Link to="#" className={`nav-link ${active === 4 ? '' : ''}`} onClick={() => handleNavLinkClick(4)}>We deliver to you every day from <span className='text-danger fw-bold'>7:00 to 23:00</span></Nav.Link>
                        </Nav>
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
                            <Nav.Link href="#">Order Tracking</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default NavMenu;
