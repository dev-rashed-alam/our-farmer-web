import React from 'react';
import '@/public/styles/farmer/Table.css';
import Link from "next/link"
import {findAllCatalogs} from "@/app/service/catalogService";
import {capitalizeFirstLetter, changeDateFormat} from "@/app/config/utils";
import {FaEye} from "react-icons/fa";
import {CiEdit} from "react-icons/ci";
import {cookies} from "next/headers";

const Page = async () => {
    let tokenStr = cookies().get("token")?.value;
    const catalogResponse = await findAllCatalogs(tokenStr)

    const renderCatalogs = () => {
        return catalogResponse?.data?.map((catalog) => {
            return (<tr className="crud-table__row" key={`catalog_${catalog.id}`}>
                <td className="crud-table__cell">
                    <Link
                        href={`/farmer/catalog/${catalog.id}?type=view`}
                        className="clickable"
                    >
                        {catalog.productTitle}
                    </Link>
                </td>
                <td className="crud-table__cell">
                    <div dangerouslySetInnerHTML={{__html: catalog.description}}></div>
                </td>
                <td className="crud-table__cell">{changeDateFormat(catalog.createdAt, "YYYY-MM-DD", "DD MMM, YYYY")}</td>
                <td className="crud-table__cell">
                    {catalog.superVisor?.firstName + " " + catalog.superVisor?.lastName}
                </td>
                <td className="crud-table__cell">
                    {capitalizeFirstLetter(catalog.status)}
                </td>
                <td className="crud-table__cell">
                        <span>
                             <Link
                                 href={`/farmer/catalog/${catalog.id}?type=view`} className="clickable"
                             >
                                <FaEye/>
                             </Link>
                        </span>
                    <span>
                            <Link
                                href={`/farmer/catalog/${catalog.id}?type=edit`}
                                className="clickable"
                            >
                            <CiEdit/>
                            </Link>
                        </span>
                </td>
            </tr>);
        });
    };

    return (<>
        <div className="page-heading mb-2">
            <div className="title">
                <h3>Catalog page</h3>
            </div>
            <div className="button-wrapper">
                <Link
                    href="/farmer/catalog/create"
                    className="btn btn-primary custom-btn">
                    Create new catalog
                </Link>
            </div>
        </div>
        <table className="crud-table">
            <thead className="crud-table__header">
            <tr className="crud-table__row">
                <th className="crud-table__header-cell">Title</th>
                <th className="crud-table__header-cell">Description</th>
                <th className="crud-table__header-cell">Creation date</th>
                <th className="crud-table__header-cell">Assign to</th>
                <th className="crud-table__header-cell">Status</th>
                <th className="crud-table__header-cell">Actions</th>
            </tr>
            </thead>
            <tbody className="crud-table__body">
            {renderCatalogs()}
            </tbody>
        </table>
    </>);
};

export default Page;
