import React from 'react';
import '@/public/styles/farmer/Table.css';
import Link from "next/link"
import {findAllCatalogServicesByUser} from "@/app/service/catalogService";
import {cookies} from "next/headers";
import {changeDateFormat} from "@/app/config/utils";
import {FaEye} from "react-icons/fa";
import {CiEdit} from "react-icons/ci";

const Page = async () => {
    let tokenStr = cookies().get("token")?.value;
    const {data} = await findAllCatalogServicesByUser(tokenStr)

    const renderServices = () => {
        return data?.map((service) => {
            return (
                <tr className="crud-table__row" key={`service_${service.id}`}>
                    <td className="crud-table__cell">
                        <Link href={`/farmer/service/${service.id}`} className="clickable">
                            {service.serviceType.label}
                        </Link>
                    </td>
                    <td className="crud-table__cell">{service?.productCatalog?.productTitle}</td>
                    <td className="crud-table__cell">{changeDateFormat(service.createdAt, "YYYY-MM-DD", "DD MMM, YYYY")}</td>
                    <td className="crud-table__cell">{service.tenureType.label}</td>
                    <td className="crud-table__cell">{service.productCatalog?.unitType?.label}</td>
                    <td className="crud-table__cell">{service.sellingPrice}</td>
                    <td className="crud-table__cell">{service?.productCatalog?.unitCost}</td>
                    <td className="crud-table__cell">{service.status}</td>
                    <td className="crud-table__cell">
                         <span>
                             <Link
                                 href={`/farmer/service/${service.id}?type=view`} className="clickable"
                             >
                                <FaEye/>
                             </Link>
                        </span>
                        <span>
                            <Link
                                href={`/farmer/service/${service.id}?type=edit`}
                                className="clickable"
                            >
                            <CiEdit/>
                            </Link>
                        </span>
                    </td>
                </tr>
            );
        });
    };

    return (
        <>
            <div className="page-heading mb-2">
                <div className="title">
                    <h3>Service page</h3>
                </div>
                <div className="button-wrapper">
                    <Link
                        href="/farmer/service/create"
                        className="btn btn-primary custom-btn">
                        Take a new service
                    </Link>
                </div>
            </div>
            <table className="crud-table">
                <thead className="crud-table__header">
                <tr className="crud-table__row">
                    <th className="crud-table__header-cell">Service Type</th>
                    <th className="crud-table__header-cell">Catalog Name</th>
                    <th className="crud-table__header-cell">Request Date</th>
                    <th className="crud-table__header-cell">Tenure Type</th>
                    <th className="crud-table__header-cell">Unit Type</th>
                    <th className="crud-table__header-cell">Selling Price</th>
                    <th className="crud-table__header-cell">Unit Cost</th>
                    <th className="crud-table__header-cell">Status</th>
                    <th className="crud-table__header-cell">Actions</th>
                </tr>
                </thead>
                <tbody className="crud-table__body">
                {renderServices()}
                </tbody>
            </table>
        </>
    );
};

export default Page;
