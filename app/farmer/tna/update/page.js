import React from 'react';
import '@/public/styles/farmer/Table.css';

const scheduleData = [
    {
        phase: 'Land Preparation',
        activities: ['Plowing', 'Harrowing', 'Leveling'],
        responsible: 'John Doe, Farm Workers',
        startDate: 'June 1',
        endDate: 'June 14'
    },
    {
        phase: 'Seed Selection & Treatment',
        activities: ['Select seeds', 'Treat seeds'],
        responsible: 'John Doe',
        startDate: 'June 15',
        endDate: 'June 16'
    },
    {
        phase: 'Sowing',
        activities: ['Seeding or transplanting'],
        responsible: 'John Doe, Farm Workers',
        startDate: 'June 17',
        endDate: 'June 23'
    },
    {
        phase: 'Water Management',
        activities: ['Irrigation maintenance'],
        responsible: 'John Doe',
        startDate: 'June 24',
        endDate: 'Continuous'
    },
    {
        phase: 'Fertilization',
        activities: ['Basal', 'Tillering', 'Panicle Init.'],
        responsible: 'John Doe',
        startDate: 'June 24',
        endDate: 'July 15'
    },
    {
        phase: 'Weed Management',
        activities: ['Manual weeding', 'Herbicide app.'],
        responsible: 'John Doe, Farm Workers',
        startDate: 'July 1',
        endDate: 'July 7'
    },
    {
        phase: 'Pest & Disease Management',
        activities: ['Scouting', 'Pesticide app.'],
        responsible: 'John Doe',
        startDate: 'Continuous',
        endDate: 'Continuous'
    },
    {
        phase: 'Monitoring & Maintenance',
        activities: ['Field inspections'],
        responsible: 'John Doe',
        startDate: 'Continuous',
        endDate: 'Continuous'
    },
    {
        phase: 'Harvesting',
        activities: ['Cutting', 'Threshing', 'Drying'],
        responsible: 'John Doe, Farm Workers',
        startDate: 'October 1',
        endDate: 'October 7'
    },
    {
        phase: 'Post-Harvest Handling',
        activities: ['Cleaning', 'Drying', 'Storage'],
        responsible: 'John Doe',
        startDate: 'October 8',
        endDate: 'October 21'
    },
];

const ScheduleTable = () => {
    const renderRowspan = (phase, activities, startDate, endDate) => {
        return activities.map((activity, index) => (
            <tr className="crud-table__row" key={`${phase}-${index}`}>
                {index === 0 && <td className="crud-table__cell" rowSpan={activities.length}>
                    {phase}
                </td>}
                <td className="crud-table__cell">{activity}</td>
                <td className="crud-table__cell">
                    {startDate}
                </td>
                <td className="crud-table__cell">
                    {endDate}
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
            </tr>
            </thead>
            <tbody className="crud-table__body">
            {scheduleData.map(({
                                   phase,
                                   activities,
                                   startDate,
                                   endDate
                               }) => renderRowspan(phase, activities, startDate, endDate))}
            </tbody>
        </table>
    );
};

export default ScheduleTable;
