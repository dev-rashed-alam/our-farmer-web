// 'use client'
import React from 'react';
import '@/public/styles/farmer/Table.css';
import Link from "next/link"
import {findAllCatalogs} from "@/app/service/CatalogService";

const Page = async () => {
    const tasksResponse = await findAllCatalogs()

    const handleTaskDelete = async (id) => {

    };

    const renderTasks = () => {
        return tasksResponse?.data?.map((task) => {
            return (
                <tr className="crud-table__row" key={`task_${task.id}`}>
                    <td className="crud-table__cell">
                        <Link href={`/tasks/${task.id}`} className="clickable">
                            {task.productTitle}
                        </Link>
                    </td>
                    <td className="crud-table__cell">{task.description}</td>
                    <td className="crud-table__cell">{task.createdAt}</td>
                    <td className="crud-table__cell">{task.superVisorName}</td>
                    <td className="crud-table__cell">
                        {/*<button*/}
                        {/*    className="crud-button crud-button--negative"*/}
                        {/*    type="button"*/}
                        {/*    onClick={() => handleTaskDelete(task.id)}>*/}
                        {/*    Delete*/}
                        {/*</button>*/}
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
