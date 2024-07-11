import React from 'react';
import '@/public/styles/farmer/Table.css';
import Link from "next/link"
import {capitalizeFirstLetter, changeDateFormat} from "@/app/config/utils";
import {FaEye} from "react-icons/fa";
import {fetchAllOrders} from "@/app/service/orderService";

const Page = async () => {
    const orderResponse = await fetchAllOrders()

    const renderOrders = () => {
        return orderResponse?.data?.map((order) => {
            return (<tr className="crud-table__row" key={`order_${order.id}`}>
                <td className="crud-table__cell">
                    {order.firstName + " " + order.lastName}
                </td>
                <td className="crud-table__cell">
                    {order.phone}
                </td>
                <td className="crud-table__cell">
                    {order.totalPrice}
                </td>
                <td className="crud-table__cell text-center">
                    <span className={order.isDelivered =='PENDING'? "badge bg-info status-badge": "badge bg-success status-badge"}>
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
                    <span className="admin-icons">
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
