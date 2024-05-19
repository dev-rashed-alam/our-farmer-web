"use client"
import React, {useState} from 'react';
import '@/public/styles/farmer/Table.css';

const scheduleData = [
    {
        id: 1,
        phase: 'Land Preparation',
        activities: ['Plowing', 'Harrowing', 'Leveling'],
        remarks: 'John Doe, Farm Workers',
        startDate: 'June 1',
        endDate: 'June 14'
    },
    {
        id: 2,
        phase: 'Seed Selection & Treatment',
        activities: ['Select seeds', 'Treat seeds'],
        remarks: 'John Doe',
        startDate: 'June 15',
        endDate: 'June 16'
    },
    {
        id: 3,
        phase: 'Sowing',
        activities: ['Seeding or transplanting'],
        remarks: 'John Doe, Farm Workers',
        startDate: 'June 17',
        endDate: 'June 23'
    },
    {
        id: 4,
        phase: 'Water Management',
        activities: ['Irrigation maintenance'],
        remarks: 'John Doe',
        startDate: 'June 24',
        endDate: 'Continuous'
    },
    {
        id: 5,
        phase: 'Fertilization',
        activities: ['Basal', 'Tillering', 'Panicle Init.'],
        remarks: 'John Doe',
        startDate: 'June 24',
        endDate: 'July 15'
    },
    {
        id: 6,
        phase: 'Weed Management',
        activities: ['Manual weeding', 'Herbicide app.'],
        remarks: 'John Doe, Farm Workers',
        startDate: 'July 1',
        endDate: 'July 7'
    },
    {
        id: 7,
        phase: 'Pest & Disease Management',
        activities: ['Scouting', 'Pesticide app.'],
        remarks: 'John Doe',
        startDate: 'Continuous',
        endDate: 'Continuous'
    },
    {
        id: 8,
        phase: 'Monitoring & Maintenance',
        activities: ['Field inspections'],
        remarks: 'John Doe',
        startDate: 'Continuous',
        endDate: 'Continuous'
    },
    {
        id: 9,
        phase: 'Harvesting',
        activities: ['Cutting', 'Threshing', 'Drying'],
        remarks: 'John Doe, Farm Workers',
        startDate: 'October 1',
        endDate: 'October 7'
    },
    {
        id: 10,
        phase: 'Post-Harvest Handling',
        activities: ['Cleaning', 'Drying', 'Storage'],
        remarks: 'John Doe',
        startDate: 'October 8',
        endDate: 'October 21'
    },
];

const ScheduleTable = () => {
    const [selectedField, setSelectedField] = useState({})
    const handleInputChange = () => {

    }

    const isEditable = (type, id) => {
        return type === selectedField.type && id === selectedField.id
    }

    const setIsEditable = (type, id) => {
        if (type !== selectedField.type && id !== selectedField.id) {
            setSelectedField({
                type,
                id
            })
        }
    }

    const renderRowspan = (data) => {
        return data.activities.map((activity, index) => (
            <tr className="crud-table__row" key={`${data.phase}-${index}`}>
                {index === 0 && <td className="crud-table__cell" rowSpan={data.activities.length}>
                    {data.phase}
                </td>}
                <td className="crud-table__cell">{activity}</td>
                <td className="crud-table__cell" onClick={() => setIsEditable("startDate", data.id)}>
                    {isEditable("startDate", data.id) ? <input
                        type="date"
                        id="startDate"
                        className="form-control"
                        name="startDate"
                        value={data.startDate}
                        onChange={handleInputChange}
                    /> : data.startDate}
                </td>
                <td className="crud-table__cell" onClick={() => setIsEditable("endDate", data.id)}>
                    {isEditable("endDate", data.id) ? <input
                        type="date"
                        id="endDate"
                        className="form-control"
                        name="endDate"
                        value={data.endDate}
                        onChange={handleInputChange}
                    /> : data.endDate}
                </td>
                <td className="crud-table__cell" onClick={() => setIsEditable("remarks", data.id)}>
                    {isEditable("remarks", data.id) ? <input
                        type="text"
                        id="remarks"
                        className="form-control"
                        name="remarks"
                        value={data.remarks}
                        onChange={handleInputChange}
                    /> : data.remarks}
                </td>
            </tr>
        ));
    };

    return (
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
            {scheduleData.map((data) => renderRowspan(data))}
            </tbody>
        </table>
    );
};

export default ScheduleTable;
