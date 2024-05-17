"use client";

import React from "react";
import "@/public/styles/consumer/layout.css"
import NavMenu from "@/app/consumer/components/navMenu";
import SearchMenu from "@/app/consumer/components/serachMenu";
import MegaMenu from "@/app/consumer/components/megaMenu";
import HomeBanner from "@/app/consumer/components/homeBanner";
import Product from "@/app/consumer/components/product";
import Footer from "@/app/consumer/components/footer";
const Header = () => {
    return (
        <div>
            <NavMenu/>
            <SearchMenu/>
            <MegaMenu/>
        </div>

    );

};

export default Header;