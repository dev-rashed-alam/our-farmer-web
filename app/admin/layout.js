'use client'
import React from 'react';
import Link from "next/link"
import Image from "next/image";
import {ImUsers} from 'react-icons/im';
import {MdLogout} from 'react-icons/md';
import {FaServicestack} from "react-icons/fa";
import '@/public/styles/admin/layout.css';
import {BsFillChatSquareQuoteFill, BsJournalBookmarkFill} from 'react-icons/bs';

function AdminLayout({children}) {
    const permissions = ["ALL"];

    const handleLogOut = () => {

    };

    return (
        <>
            <header>
                <div className="top-bar float-end">
                    <Link href="/sign-in" className="nav_link top_nav_link" onClick={handleLogOut}>
                        <span className="nav_icon">
                            <MdLogout/>
                        </span>
                        <span className="nav_name">Log Out</span>
                    </Link>
                </div>
            </header>

            <div className="nav-wrapper" id="navbar">
                <nav className="nav">
                    <div>
                        <div className="nav_brand">
                            <Link className="navbar-brand" href="/admin">
                                <Image
                                    src="/images/logo.png"
                                    alt="Vercel Logo"
                                    width={60}
                                    height={60}
                                />
                                &nbsp;&nbsp; Our Farmer
                            </Link>
                        </div>
                    </div>
                    <ul>
                        {permissions.includes('ALL') && (
                            <li>
                                <Link href="#" className="nav_link">
                                    <span className="nav_icon">
                                        <ImUsers/>
                                    </span>
                                    <span className="nav_name">Manage Farmers</span>
                                </Link>
                            </li>
                        )}
                        {permissions.includes('ALL') && (
                            <li>
                                <Link href="#" className="nav_link">
                                    <span className="nav_icon">
                                        <BsFillChatSquareQuoteFill/>
                                    </span>
                                    <span className="nav_name">Manage Catalogs</span>
                                </Link>
                            </li>
                        )}
                        {permissions.includes('ALL') && (
                            <li>
                                <Link href="#" className="nav_link">
                                    <span className="nav_icon">
                                        <FaServicestack/>
                                    </span>
                                    <span className="nav_name">Manage Services</span>
                                </Link>
                            </li>
                        )}
                        {permissions.includes('ALL') && (
                            <li>
                                <Link href="#" className="nav_link">
                                    <span className="nav_icon">
                                        <BsJournalBookmarkFill/>
                                    </span>
                                    <span className="nav_name">Manage TNA</span>
                                </Link>
                            </li>
                        )}
                    </ul>
                    <Link href="/sign-in" className="nav_link" onClick={handleLogOut}>
                        <span className="nav_icon">
                            <MdLogout/>
                        </span>
                        <span className="nav_name">Log Out</span>
                    </Link>
                </nav>
            </div>

            <div className="custom-wrapper wrapper-padding">{children}</div>
        </>
    );
}

export default AdminLayout;
