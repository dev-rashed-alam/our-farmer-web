"use client";
import {Inter} from "next/font/google";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import { Provider } from 'react-redux';
import store from '@/app/store/index';

const inter = Inter({subsets: ["latin"]});

 const metadata = {
    title: "Our Farmer",
    description: "Generated by create next app",
};

export default function RootLayout({children}) {
    return (
        <Provider store={store}>
            <html lang="en">
            <body className={inter.className}>
            {children}
            <ToastContainer/>
            </body>
            </html>
        </Provider>
    );
}
