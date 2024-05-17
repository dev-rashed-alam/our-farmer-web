"use client";

import Header from "@/app/consumer/components/header";
import Footer from "@/app/consumer/components/footer";
import Breadcrumb from "@/app/consumer/components/breadcrumb";

const Layout = ({children}) => {
    return (
        <>
            <Header />
            <Breadcrumb />
            {children}
            <Footer />
        </>
    );
}
export default Layout;