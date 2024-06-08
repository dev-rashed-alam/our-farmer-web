import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ chartLabels, chartData, optional = {} }) => {
    const options = {
        ...optional,
        responsive: true,
        aspectRatio: 9,
        maintainAspectRatio: true,
        plugins: {
            ...optional?.plugins,
            legend: {
                display: false
            }
        }
    };

    const labels = chartLabels;
    const data = {
        labels,
        datasets: chartData
    };

    return <Bar options={options} data={data} />;
};

export default BarChart;
