"use client"
import React, {useEffect, useState} from 'react';
import '@/public/styles/farmer/Table.css';
import {getProductTnaById, updateProductTnaById} from "@/app/service/tnaService";
import {changeDateFormat, groupByPhaseId, sortByObjectKey} from "@/app/config/utils";
import {useRouter} from "next/navigation";
import {toast} from "react-toastify";

const ScheduleTable = ({params}) => {
    const [scheduleData, setScheduleData] = useState({})
    const [selectedField, setSelectedField] = useState({})
    const router = useRouter();

    const mapActions = (actions, data) => {
        for (let item in data) {
            for (let task of data[item]) {
                let selectedActions = actions.find(action => action.activityId === task.id);
                if (selectedActions !== undefined) {
                    task['startDate'] = selectedActions?.startDate;
                    task['endDate'] = selectedActions?.endDate;
                    task['remarks'] = selectedActions?.remarks;
                }
            }
        }
        return data
    }

    useEffect(() => {
        (async () => {
            try {
                const {data} = await getProductTnaById(params.id)
                let modifiedData = groupByPhaseId(data.activity);
                modifiedData = sortByObjectKey(modifiedData);
                setScheduleData(mapActions(data.actions, modifiedData))
            } catch (e) {
                console.log(e)
            }
        })()
    }, []);

    const handleInputChange = (e, taskId, phaseId) => {
        const {name, value} = e.target;
        let tmpData = scheduleData[phaseId]
        tmpData.map(item => {
            if (item.id === taskId) {
                item[name] = value
            }
        })
        setScheduleData(prev => ({...prev, [phaseId]: tmpData}))
    }

    const isEditable = (type, id) => {
        return type === selectedField.type && id === selectedField.id
    }

    const setIsEditable = (type, id) => {
        setSelectedField({
            type,
            id
        })
    }

    const renderRowspan = (key) => {
        return scheduleData[key].map((activity, index) => (
            <tr className="crud-table__row" key={`${key}-${index}`}>
                {index === 0 && <td className="crud-table__cell" rowSpan={scheduleData[key].length}>
                    {activity.phase.title}
                </td>}
                <td className="crud-table__cell">{activity.name}</td>
                <td className="crud-table__cell cell_editable" onClick={() => setIsEditable("startDate", activity.id)}>
                    {isEditable("startDate", activity.id) ? <input
                        type="date"
                        id="startDate"
                        className="form-control"
                        name="startDate"
                        autoFocus={true}
                        value={activity.startDate || ''}
                        onChange={(e) => handleInputChange(e, activity.id, key)}
                    /> : changeDateFormat(activity.startDate, "YYYY-MM-DD", "DD MMM, YYYY")}
                </td>
                <td className="crud-table__cell cell_editable" onClick={() => setIsEditable("endDate", activity.id)}>
                    {isEditable("endDate", activity.id) ? <input
                        type="date"
                        id="endDate"
                        className="form-control"
                        name="endDate"
                        autoFocus={true}
                        value={activity.endDate || ''}
                        onChange={(e) => handleInputChange(e, activity.id, key)}
                    /> : changeDateFormat(activity.endDate, "YYYY-MM-DD", "DD MMM, YYYY")}
                </td>
                <td className="crud-table__cell cell_editable" onClick={() => setIsEditable("remarks", activity.id)}>
                    {isEditable("remarks", activity.id) ? <input
                        type="text"
                        id="remarks"
                        className="form-control"
                        name="remarks"
                        autoFocus={true}
                        value={activity.remarks || ''}
                        onChange={(e) => handleInputChange(e, activity.id, key)}
                    /> : activity.remarks}
                </td>
            </tr>
        ));
    };

    const handleSubmit = async () => {
        try {
            let actions = []
            for (let item in scheduleData) {
                for (let task of scheduleData[item]) {
                    actions.push({
                        activityId: task.id,
                        startDate: task.startDate,
                        endDate: task.endDate,
                        remarks: task.remarks
                    })
                }
            }

            await updateProductTnaById(params.id, {
                actions
            })
            toast.success("TNA Update successful!")
            router.push("/farmer/tna")
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <table className="crud-table">
                <thead className="crud-table__header">
                <tr className="crud-table__row">
                    <th className="crud-table__header-cell">Phase</th>
                    <th className="crud-table__header-cell">Activities</th>
                    <th className="crud-table__header-cell">Start Date</th>
                    <th className="crud-table__header-cell">End Date</th>
                    <th className="crud-table__header-cell">Remarks</th>
                </tr>
                </thead>
                <tbody className="crud-table__body">
                {Object.keys(scheduleData).map((key) => renderRowspan(key))}
                </tbody>
            </table>

            {Object.keys(scheduleData).length > 0 && <div className="tna-btns">
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                &nbsp;
                <button type="button" className="btn btn-secondary" onClick={() => {
                    router.push("/farmer/tna")
                }}>Go Back
                </button>
            </div>}
        </>
    )
};

export default ScheduleTable;
