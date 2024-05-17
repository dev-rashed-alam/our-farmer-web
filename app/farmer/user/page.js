import React from 'react';
import '@/public/styles/farmer/Table.css';
import Link from "next/link"
import {capitalizeFirstLetter, changeDateFormat} from "@/app/config/utils";
import {FaEye} from "react-icons/fa";
import {findAllUsers} from "@/app/service/userService";
import {FaUserEdit} from "react-icons/fa";

const Page = async () => {
    const userResponse = await findAllUsers('FARMER')

    const renderCatalogs = () => {
        return userResponse?.data?.map((user) => {
            return (<tr className="crud-table__row" key={`user_${user.id}`}>
                <td className="crud-table__cell">
                    {user?.firstName + " " + user?.lastName}
                </td>
                <td className="crud-table__cell">
                    {user?.phoneNumber}
                </td>
                <td className="crud-table__cell">
                    {user?.email}
                </td>
                <td className="crud-table__cell">{changeDateFormat(user.createdAt, "YYYY-MM-DD", "DD MMM, YYYY")}</td>
                <td className="crud-table__cell">
                    {capitalizeFirstLetter(user.status)}
                </td>
                <td className="crud-table__cell">
                    <span className="admin-icons">
                        <Link
                            href={`/admin/user/${user.id}`}
                            className="clickable"
                        >
                            <FaEye/>
                        </Link>
                    </span>
                    &nbsp;
                    <span className="admin-icons">
                        <Link
                            href={`/admin/user/edit/${user.id}`}
                            className="clickable"
                        >
                            <FaUserEdit/>
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
                <th className="crud-table__header-cell">User name</th>
                <th className="crud-table__header-cell">Mobile Number</th>
                <th className="crud-table__header-cell">Email</th>
                <th className="crud-table__header-cell">Onboarding Date</th>
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
