"use client"

import React, {useState} from "react";
import "@/public/styles/admin/dashboard.css"
import BarChart from "@/app/ui/common/BarChart";

const AdminDashboard = () => {
    const [chartData, setChartData] = useState([
        {
            label: 'Target',
            data: [30, 50, 70, 90],
            backgroundColor: '#0095FF'
        },

        {
            label: 'Achieved',
            data: [30, 50, 70, 90],
            backgroundColor: '#00E096',
        }
    ]);
    const [labels, setLabels] = useState(["Q1", "Q2", "Q3", "Q4"]);
    return (
        <>
            <div className="overview-container">
                <div className="overview-item-list">
                    <div className="overview-item">
                        <p className="regular-14 gray_dark_02 mb-1">Total Farmer Onboard</p>
                        <h4 className="regular-16 weight-500 gray_dark_01">8.8M</h4>
                    </div>
                    <div className="overview-item">
                        <p className="regular-14 gray_dark_02 mb-1">Total Catalogs</p>
                        <h4 className="regular-16 weight-500 gray_dark_01">2.0M</h4>
                    </div>
                    <div className="overview-item">
                        <p className="regular-14 gray_dark_02 mb-1">Total Service Taken</p>
                        <h4 className="regular-16 weight-500 gray_dark_01">3.2M</h4>
                    </div>
                    <div className="overview-item">
                        <p className="regular-14 gray_dark_02 mb-1">Order Ongoing</p>
                        <h4 className="regular-16 weight-500 gray_dark_01">25</h4>
                    </div>
                    <div className="overview-item">
                        <p className="regular-14 gray_dark_02 mb-1">Expected Margin</p>
                        <h4 className="regular-16 weight-500 gray_dark_01">4.5M</h4>
                    </div>
                </div>
            </div>
            <div className="overall-performance-container">
                <div className="performance-heading d-flex justify-content-between align-items-center">
                    <p className="regular-14 gray_dark_01 weight-500">Overall Performance</p>
                    <div className="d-flex align-items-center">
                        <div className="d-flex gap-6 mr-5">
                            <div className="target d-flex">
                                <span className="color-indicator target"></span>
                                <p className="regular-12 weight-500">Target</p>
                            </div>
                            <div className="pipeline d-flex">
                                <span className="color-indicator achieved"></span>
                                <p className="regular-12 weight-500">Achieved</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="performance-body">
                    <BarChart chartData={chartData} chartLabels={labels}/>
                </div>
            </div>
        </>
    )
}

export default AdminDashboard