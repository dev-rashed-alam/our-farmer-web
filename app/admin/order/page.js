import React from 'react';
import '@/public/styles/farmer/Table.css';
import Link from "next/link"
import {capitalizeFirstLetter, changeDateFormat} from "@/app/config/utils";
import {FaEye} from "react-icons/fa";
import {CiEdit} from "react-icons/ci";
import DeleteCatalog from "@/app/admin/catalog/components/DeleteCatalog";
import {fetchAllOrders} from "@/app/service/orderService";
import {FcApprove} from "react-icons/fc";

const Page = async () => {
    const orderResponse = await fetchAllOrders()


    const renderOrders = () => {
        console.log('orderResponse', orderResponse)
        return orderResponse?.data?.map((order) => {
            return (<tr className="crud-table__row" key={`order_${order.id}`}>
                <td className="crud-table__cell">
                    <Link
                        href="#"
                        className="clickable"
                    >
                        {order.firstName + " " + order.lastName}
                    </Link>
                </td>
                <td className="crud-table__cell">
                    {order.phone}
                </td>
                <td className="crud-table__cell">
                    {order.totalPrice}
                </td>
                <td className="crud-table__cell">
                    <span className={order.isDelivered =='PENDING'? "badge bg-info": "badge bg-success"}>
                        {capitalizeFirstLetter(order.isDelivered)}
                    </span>
                </td>
                <td className="crud-table__cell">
                    {order.isPaid ? "Paid" : "Not Paid"}
                </td>
                <td className="crud-table__cell">
                    {changeDateFormat(order.createdAt, "YYYY-MM-DD", "DD MMM, YYYY")}
                </td>
                <td className="crud-table__cell">
                    <span>
                        <Link
                            href={`/admin/order/show/${order.id}?type=view`}
                            className="clickable"
                        >
                            <FaEye/>
                        </Link>
                    </span>
                </td>
            </tr>);
        });
    };

    return (<>
        <table className="crud-table">
            <thead className="crud-table__header">
            <tr className="crud-table__row">
                <th className="crud-table__header-cell">Consumer Name</th>
                <th className="crud-table__header-cell">Phone Number</th>
                <th className="crud-table__header-cell">Total Amount</th>
                <th className="crud-table__header-cell">Order Status</th>
                <th className="crud-table__header-cell">Payment Status</th>
                <th className="crud-table__header-cell">Order Date</th>
                <th className="crud-table__header-cell">Actions</th>
            </tr>
            </thead>
            <tbody className="crud-table__body">
            {renderOrders()}
            </tbody>
        </table>
    </>);
};

export default Page;
