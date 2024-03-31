'use client'
import React, {useState} from 'react';
import '@/public/styles/Table.css';
import Link from "next/link"

const Page = () => {

    const [services, setServices] = useState([
        {
            "id": 1,
            "serviceType": "Financial Support",
            "superVisorName": "Alice Smith",
            "status": "Pending",
            "requestDate": "2024-03-23"
        },
        {
            "id": 2,
            "serviceType": "Binimoy Management",
            "superVisorName": "Jhone Smith",
            "status": "Under verification",
            "requestDate": "2024-03-23"
        },
        {
            "id": 3,
            "serviceType": "Expert Support",
            "superVisorName": "Rashed Alam",
            "status": "Approved",
            "requestDate": "2024-03-23"
        },
    ])

    const handleTaskDelete = async (id) => {

    };

    const renderServices = () => {
        return services?.map((task) => {
            return (
                <tr className="crud-table__row" key={`task_${task.id}`}>
                    <td className="crud-table__cell">
                        <Link href={`/tasks/${task.id}`} className="clickable">
                            {task.serviceType}
                        </Link>
                    </td>
                    <td className="crud-table__cell">{task.requestDate}</td>
                    <td className="crud-table__cell">{task.superVisorName}</td>
                    <td className="crud-table__cell">{task.status}</td>
                    <td className="crud-table__cell">
                        <button
                            className="crud-button crud-button--negative"
                            type="button"
                            onClick={() => handleTaskDelete(task.id)}>
                            Delete
                        </button>
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
                        href="#"
                        className="btn btn-primary custom-btn">
                        Take a new service
                    </Link>
                </div>
            </div>
            <table className="crud-table">
                <thead className="crud-table__header">
                <tr className="crud-table__row">
                    <th className="crud-table__header-cell">Service Type</th>
                    <th className="crud-table__header-cell">Request Date</th>
                    <th className="crud-table__header-cell">Supervisor Name</th>
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
