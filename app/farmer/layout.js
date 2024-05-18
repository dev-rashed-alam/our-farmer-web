'use client'
import React, {useEffect, useState} from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import '@/public/styles/farmer/Layout.css';
import Link from 'next/link';
import Image from "next/image";
import {useRouter} from 'next/navigation'
import {clearStorage, getUserInfo, isFarmer} from "@/app/config/utils";
import ProfileImage from "@/public/images/profile.jpeg";
import {MdLogout} from "react-icons/md";

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

    const getProfilePic = () => {
        if (getUserInfo()?.avatar) return getUserInfo()?.avatar;
        return ProfileImage;
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
                                    <Link
                                        href={`/farmer/user/edit/${getUserInfo().id}`}>
                                        <Image
                                            className="rounded-circle p-1 bg-primary"
                                            src={getProfilePic()}
                                            alt="profile-image"
                                            width={40}
                                            height={40}
                                        />
                                    </Link>
                                    <Link
                                        href="/sign-in"
                                        className="nav_link top_nav_link m-2"
                                        onClick={handleLogout}
                                    >
                                        <MdLogout/>
                                        &nbsp;
                                        Log Out
                                    </Link>
                                </Nav>
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
