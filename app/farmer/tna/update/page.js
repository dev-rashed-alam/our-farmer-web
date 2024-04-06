'use client'
import React, {useState} from 'react';
import '@/public/styles/Table.css';
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
                    <th className="crud-table__header-cell">Land Preparation</th>
                    <th className="crud-table__header-cell">Seed Selection and Treatment</th>
                    <th className="crud-table__header-cell">Equipment Check</th>
                    <th className="crud-table__header-cell">Planting</th>
                    <th className="crud-table__header-cell">Irrigation</th>
                    <th className="crud-table__header-cell">Weed Control</th>
                    <th className="crud-table__header-cell">Fertilization</th>
                    <th className="crud-table__header-cell">Pest and Disease Management</th>
                    <th className="crud-table__header-cell">Growth Monitoring</th>
                    <th className="crud-table__header-cell">Harvesting</th>
                    <th className="crud-table__header-cell">Post-Harvest Processing</th>
                    <th className="crud-table__header-cell">Production</th>
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
