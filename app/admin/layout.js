'use client'
import React, {useEffect, useState} from 'react';
import Link from "next/link"
import Image from "next/image";
import {ImUsers} from 'react-icons/im';
import {MdLogout} from 'react-icons/md';
import {FaServicestack} from "react-icons/fa";
import '@/public/styles/admin/layout.css';
import {BsFillChatSquareQuoteFill, BsJournalBookmarkFill} from 'react-icons/bs';
import {clearStorage, getUserInfo, isAdmin} from "@/app/config/utils";
import {usePathname, useRouter} from "next/navigation";
import ProfileImage from "@/public/images/profile.jpeg";

function AdminLayout({children}) {
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false)
    const router = useRouter();
    const pathname = usePathname();
    const permissions = ["ALL"];

    useEffect(() => {
        if (isAdmin()) {
            setIsAdminLoggedIn(true)
        } else {
            router.back()
        }
    }, [])

    const handleLogOut = () => {
        clearStorage();
        router.push('/sign-in')
    };

    const getProfilePic = () => {
        if (getUserInfo()?.avatar) return getUserInfo()?.avatar;
        return ProfileImage;
    };


    const renderAdminContent = () => {
        if (isAdminLoggedIn) {
            return (
                <>
                    <header>
                        <div className="top-bar float-end">
                            <div className="top-right-details">
                               <span>
                                   <Link
                                       href={`/admin/user/edit/${getUserInfo().id}`}>
                                        <Image
                                            className="rounded-circle p-1 bg-primary mt-2"
                                            src={getProfilePic()}
                                            alt="profile-image"
                                            width={40}
                                            height={40}
                                        />
                                    </Link>
                                </span>
                                <span>
                                    <Link
                                        href="/sign-in"
                                        className="nav_link top_nav_link"
                                        onClick={handleLogOut}
                                    >
                                    <span className="nav_icon">
                                        <MdLogout/>
                                    </span>
                                <span className="nav_name">Log Out</span>
                            </Link>
                           </span>
                            </div>
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
                                        <Link href="/admin/user"
                                              className={`nav_link ${pathname === "/admin/user" ? 'active' : ''}`}>
                                    <span className="nav_icon">
                                        <ImUsers/>
                                    </span>
                                            <span className="nav_name">Manage Farmers</span>
                                        </Link>
                                    </li>
                                )}
                                {permissions.includes('ALL') && (
                                    <li>
                                        <Link href="/admin/catalog"
                                              className={`nav_link ${pathname === "/admin/catalog" ? 'active' : ''}`}>
                                            <span className="nav_icon">
                                                <BsFillChatSquareQuoteFill/>
                                            </span>
                                            <span className="nav_name">Manage Catalogs</span>
                                        </Link>
                                    </li>
                                )}
                                {permissions.includes('ALL') && (
                                    <li>
                                        <Link href="/admin/service" className="nav_link">
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
            )
        }
    }

    return (
        <>
            {renderAdminContent()}
        </>
    );
}

export default AdminLayout;
