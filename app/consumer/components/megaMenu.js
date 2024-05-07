import React from 'react';
import {Container, Navbar, Nav, NavDropdown, Badge} from 'react-bootstrap';
import '@/public/styles/consumer/megaMenu.css';
const MegaMenu = () => {
    return (
        <Navbar expand="lg" className='nav-mega-menu'>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title={<span>All Categories
                            <svg width="20" height="17" viewBox="0 0 16 17" fill="none" className="text-token-text-tertiary"><path d="M11.3346 7.83203L8.00131 11.1654L4.66797 7.83203" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </span>} id="basic-nav-dropdown" className='show'>
                            <NavDropdown.Item href="#">Fruits and Vegetables</NavDropdown.Item>
                            <NavDropdown.Item href="#">Cooking Essentials</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" className='fw-bold'>Home</Nav.Link>
                        <Nav.Link href="/consumer/product" className='fw-bold'>Shop
                        </Nav.Link>
                        <Nav.Link href="#" className='fw-bold'>Fruits and Vegetables</Nav.Link>
                        <Nav.Link href="#" className='fw-bold'>Contact</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link href="#" className="trending fw-bold">Trending Product</Nav.Link>
                        <Nav.Link href="#" className="text-danger">Almost Finished
                            <span className="sales">
                                Sales
                            </span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MegaMenu;
