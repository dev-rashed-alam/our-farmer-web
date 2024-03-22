'use client'
import React, {useState} from 'react';
import '@/public/styles/Table.css';
import Link from "next/link"

const Page = () => {

    const [tasks, setTasks] = useState([])

    const handleTaskDelete = async (id) => {

    };

    const renderTasks = () => {
        return tasks?.map((task) => {
            return (
                <tr className="crud-table__row" key={`task_${task.id}`}>
                    <td className="crud-table__cell">
                        <Link href={`/tasks/${task.id}`} className="clickable">
                            {task.title}
                        </Link>
                    </td>
                    <td className="crud-table__cell" dangerouslySetInnerHTML={{__html: task.description}}/>
                    <td className="crud-table__cell">Date</td>
                    <td className="crud-table__cell">{task.assignTo?.label}</td>
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
                {/*{tasks.length === 0 && <p className="pt-2 pb-2 text-muted">No task found!</p>}*/}
                </tbody>
            </table>
        </>
    );
};

export default Page;
