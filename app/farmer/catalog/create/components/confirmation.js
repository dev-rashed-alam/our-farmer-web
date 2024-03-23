'use client'
import React from "react";
import "@/public/styles/Confirmation.css"
import {useRouter} from "next/navigation";

const Confirmation = () => {

    const router = useRouter()

    return (
        <div className="content">
            <div className="wrapper-1">
                <div className="wrapper-2">
                    <h1>Thank you !</h1>
                    <p>Thanks for creating catalog to our platform. </p>
                    <p>you should receive a confirmation email soon </p>
                    <button type="button" className="go-home" onClick={() => router.push('/farmer')}>
                        go home
                    </button>
                </div>
                <div className="footer-like">
                    <p>Email not received?
                        <a href="#">Click here to send again</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Confirmation