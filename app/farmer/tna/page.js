import React from 'react';
import '@/public/styles/farmer/Table.css';
import Link from "next/link"
import {findServiceByStatus} from "@/app/service/tnaService";
import {cookies} from "next/headers";
import {RxUpdate} from "react-icons/rx";

const Page = async () => {
    let tokenStr = cookies().get("token")?.value;
    const {data} = await findServiceByStatus(tokenStr, "APPROVE")

    const renderTnaList = () => {
        return data?.map((task) => {
            return (
                <tr className="crud-table__row" key={`task_${task.id}`}>
                    <td className="crud-table__cell">
                        {task.productCatalog.productTitle}
                    </td>
                    <td className="crud-table__cell">{task.serviceType.label}</td>
                    <td className="crud-table__cell">{task.tenureType.label}</td>
                    <td className="crud-table__cell">{task.productCatalog.unitType.label}</td>
                    <td className="crud-table__cell">{task.sellingPrice}</td>
                    <td className="crud-table__cell">{task.productCatalog.moq}</td>
                    <td className="crud-table__cell">{task.productCatalog.unitCost}</td>
                    <td className="crud-table__cell">
                        <Link href={`/farmer/tna/update`} className="clickable">
                            <RxUpdate/>
                        </Link>
                    </td>
                </tr>
            );
        });
    };

    return (
        <>
            <div className="page-heading mb-2">
                <div className="title">
                    <h3>Time and action page</h3>
                </div>
            </div>
            <table className="crud-table">
                <thead className="crud-table__header">
                <tr className="crud-table__row">
                    <th className="crud-table__header-cell">Title</th>
                    <th className="crud-table__header-cell">Service Type</th>
                    <th className="crud-table__header-cell">Tenure Type</th>
                    <th className="crud-table__header-cell">Unit</th>
                    <th className="crud-table__header-cell">Selling Price</th>
                    <th className="crud-table__header-cell">MOQ</th>
                    <th className="crud-table__header-cell">Unit Cost</th>
                    <th className="crud-table__header-cell">Actions</th>
                </tr>
                </thead>
                <tbody className="crud-table__body">
                {renderTnaList()}
                </tbody>
            </table>
        </>
    );
};

export default Page;
