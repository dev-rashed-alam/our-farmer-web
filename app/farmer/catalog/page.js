'use client'
import React, {useState} from 'react';
import '@/public/styles/Table.css';
import Link from "next/link"

const Page = () => {

    const [tasks, setTasks] = useState([
        {
            "id": 1,
            "cropName": "Rice",
            "cropDescription": "Rice is a staple food for a large part of the world's human population, particularly in Asia. It is the most widely consumed staple food for a large part of the world's human population.",
            "superVisorName": "Alice Smith",
            "date": "2024-03-23"
        },
        {
            "id": 2,
            "cropName": "Wheat",
            "cropDescription": "Wheat is one of the most important cereal crops, providing a significant portion of the calories consumed by humans globally.",
            "superVisorName": "Bob Johnson",
            "date": "2024-03-23"
        },
        {
            "id": 3,
            "cropName": "Maize (Corn)",
            "cropDescription": "Maize, also known as corn, is a cereal grain first domesticated by indigenous peoples in southern Mexico about 10,000 years ago.",
            "superVisorName": "Emma Brown",
            "date": "2024-03-23"
        },
        {
            "id": 4,
            "cropName": "Soybeans",
            "cropDescription": "Soybeans are a major crop worldwide, providing oil and protein. They are used in various food products and as animal feed.",
            "superVisorName": "Michael Williams",
            "date": "2024-03-23"
        },
        {
            "id": 5,
            "cropName": "Potatoes",
            "cropDescription": "Potatoes are a versatile and widely consumed tuber crop, rich in carbohydrates and various nutrients.",
            "superVisorName": "Sarah Davis",
            "date": "2024-03-23"
        }
    ])

    const handleTaskDelete = async (id) => {

    };

    const renderTasks = () => {
        return tasks?.map((task) => {
            return (
                <tr className="crud-table__row" key={`task_${task.id}`}>
                    <td className="crud-table__cell">
                        <Link href={`/tasks/${task.id}`} className="clickable">
                            {task.cropName}
                        </Link>
                    </td>
                    <td className="crud-table__cell">{task.cropDescription}</td>
                    <td className="crud-table__cell">{task.date}</td>
                    <td className="crud-table__cell">{task.superVisorName}</td>
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
                    <th className="crud-table__header-cell">Actions</th>
                </tr>
                </thead>
                <tbody className="crud-table__body">
                {renderTasks()}
                </tbody>
            </table>
        </>
    );
};

export default Page;
