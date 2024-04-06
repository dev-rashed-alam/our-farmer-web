import React from "react";
import '@/public/styles/farmer/Dashboard.css';
import { SiTvtime } from "react-icons/si";
import Link from "next/link";
import {BsFillChatSquareQuoteFill} from "react-icons/bs";
import {FaServicestack} from "react-icons/fa";

const Page = () => {
    return (
        <section className="dashboard-buttons">
            <ul className="tile-button">
                <li>
                    <Link href="/farmer/catalog" className="card-link">
                        <div className="button-content">
                            <BsFillChatSquareQuoteFill/>
                            <br/>
                            Catalog
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/farmer/service" className="card-link">
                        <div className="button-content">
                            <FaServicestack/>
                            <br/>
                            Services
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/farmer/tna" className="card-link">
                        <div className="button-content">
                            <SiTvtime/>
                            <br/>
                            TNA
                        </div>
                    </Link>
                </li>
            </ul>
        </section>
    )
}

export default Page