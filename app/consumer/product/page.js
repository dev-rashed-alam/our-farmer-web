"use client"
import Header from "@/app/consumer/components/header";
import Footer from "@/app/consumer/components/footer";
import Product from "@/app/consumer/components/product";
import Breadcrumb from "@/app/consumer/components/breadcrumb";
export default function Page() {
    return (
        <main>
            <Header />
            <Breadcrumb />
            <Product />
            <Footer />
        </main>
    );
}
