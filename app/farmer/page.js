import React from "react";
import '@/public/styles/Dashboard.css';
import {FaTasks} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import Link from "next/link";

const Page = () => {
    return (
        <section className="dashboard-buttons">
            <ul className="tile-button">
                <li>
                    <Link href="/farmer/catalog" className="card-link">
                        <div className="button-content">
                            <FaTasks/>
                            <br/>
                            Catalog
                        </div>
                    </Link>
                </li>
                <li>
                    <div className="button-content">
                        <FiUsers/>
                        <br/>
                        Services
                    </div>
                </li>
                <li>
                    <div className="button-content">
                        <FiUsers/>
                        <br/>
                        Shop
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Page