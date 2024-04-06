'use client'
import React, {useState} from 'react';
import '@/public/styles/farmer/Table.css';
import Link from "next/link"

const Page = () => {
    const [tasks, setTasks] = useState([
        {
            "id": 1,
            "cropName": "Rice",
            "superVisorName": "Alice Smith",
            "status": "Approved",
            "date": "2024-03-23"
        },
        {
            "id": 2,
            "cropName": "Wheat",
            "superVisorName": "Bob Johnson",
            "status": "Approved",
            "date": "2024-03-23"
        },
        {
            "id": 3,
            "cropName": "Maize (Corn)",
            "superVisorName": "Emma Brown",
            "status": "Under Verification",
            "date": "2024-03-23"
        },
        {
            "id": 4,
            "cropName": "Soybeans",
            "superVisorName": "Michael Williams",
            "status": "Rejected",
            "date": "2024-03-23"
        },
        {
            "id": 5,
            "cropName": "Potatoes",
            "superVisorName": "Sarah Davis",
            "status": "Approved",
            "date": "2024-03-23"
        }
    ])

    const handleTaskDelete = async (id) => {

    };

    const renderTnaList = () => {
        return tasks?.map((task) => {
            return (
                <tr className="crud-table__row" key={`task_${task.id}`}>
                    <td className="crud-table__cell">
                        <Link href={`/tasks/${task.id}`} className="clickable">
                            {task.cropName}
                        </Link>
                    </td>
                    <td className="crud-table__cell">{task.date}</td>
                    <td className="crud-table__cell">{task.superVisorName}</td>
                    <td className="crud-table__cell">{task.status}</td>
                    <td className="crud-table__cell">
                        <Link href={`/farmer/tna/update`} className="clickable crud-button crud-button--negative">
                            Update TNA
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
                    <th className="crud-table__header-cell">Creation date</th>
                    <th className="crud-table__header-cell">Assign to</th>
                    <th className="crud-table__header-cell">Status</th>
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
