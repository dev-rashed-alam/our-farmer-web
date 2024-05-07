"use client";

import React from "react";
import Header from "@/app/consumer/components/header";
import HomeBanner from "@/app/consumer/components/homeBanner";
import Product from "@/app/consumer/components/product";
import Footer from "@/app/consumer/components/footer";

const HomePage = () => {
    return (
        <div>
            <Header/>
            <HomeBanner/>
            <Product/>
            <Footer/>
        </div>

    );

};

export default HomePage;