'use client'
import React, {useEffect, useState} from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import '@/public/styles/farmer/Layout.css';
import Link from 'next/link';
import Image from "next/image";
import {useRouter} from 'next/navigation'
import {clearStorage, isFarmer} from "@/app/config/utils";

const Layout = ({children}) => {
    const [isFarmerLoggedIn, setIsFarmerLoggedIn] = useState(false);
    const router = useRouter()

    useEffect(() => {
        if (isFarmer()) {
            setIsFarmerLoggedIn(true)
        } else {
            router.back();
        }
    }, [])

    const handleLogout = () => {
        clearStorage();
        router.push('/sign-in')
    };

    const renderLayout = () => {
        if (isFarmerLoggedIn) {
            return (
                <div className="body-wrapper">
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Link className="navbar-brand" href="/farmer">
                                <Image
                                    src="/images/logo.png"
                                    alt="Vercel Logo"
                                    width={60}
                                    height={60}
                                />
                                &nbsp;&nbsp; Our Farmer
                            </Link>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto pe-3">
                                    <Link href="/farmer" className="nav-link">
                                        Dashboard
                                    </Link>
                                    <Link href="/farmer/catalog" className="nav-link">
                                        Catalog
                                    </Link>
                                    <Link href="/farmer/service" className="nav-link">
                                        Services
                                    </Link>
                                </Nav>
                                <Navbar.Text>
                                    Signed in as: <span>Farmer</span> |{' '}
                                    <span className="cursor-pointer" onClick={handleLogout}>
                                Logout
                             </span>
                                </Navbar.Text>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <Container className="body-container">
                        {children}
                    </Container>
                    <footer className="footer">
                        <Container>
                            <span className="text-muted">&copy; Our farmer 2024</span>
                        </Container>
                    </footer>
                </div>
            )
        }
    }

    return (
        <>{renderLayout()}</>
    );
};

export default Layout;
