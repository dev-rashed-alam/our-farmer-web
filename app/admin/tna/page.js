import React from 'react';
import '@/public/styles/farmer/Table.css';
import Link from "next/link"
import {findTnaByUser} from "@/app/service/tnaService";
import {cookies} from "next/headers";
import {RxUpdate} from "react-icons/rx";

const Page = async () => {
    let tokenStr = cookies().get("token")?.value;
    const {data} = await findTnaByUser(tokenStr)

    const renderTnaList = () => {
        return data?.map((task) => {
            return (
                <tr className="crud-table__row" key={`task_${task.id}`}>
                    <td className="crud-table__cell">
                        {task.serviceInfo.productCatalog.productTitle}
                    </td>
                    <td className="crud-table__cell">{task.serviceInfo.serviceType.label}</td>
                    <td className="crud-table__cell">{task.serviceInfo.tenureType.label}</td>
                    <td className="crud-table__cell">{task.serviceInfo.productCatalog.unitType.label}</td>
                    <td className="crud-table__cell">{task.serviceInfo.sellingPrice}</td>
                    <td className="crud-table__cell">{task.serviceInfo.productCatalog.moq}</td>
                    <td className="crud-table__cell">{task.serviceInfo.productCatalog.unitCost}</td>
                    <td className="crud-table__cell">
                        <Link href={`/admin/tna/${task.id}`} className="clickable">
                            <RxUpdate/>
                        </Link>
                    </td>
                </tr>
            );
        });
    };

    return (
        <>
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
