"use client"

import React, {useEffect, useState} from "react";
import "@/public/styles/admin/dashboard.css"
import BarChart from "@/app/ui/common/BarChart";
import {findOrderSummary, findSummary} from "@/app/service/dashboardService";
import {getNumberUnit, monthList} from "@/app/config/utils";

const AdminDashboard = () => {
    const [summary, setSummary] = useState({});
    const [chartData, setChartData] = useState([]);
    const [labels, setLabels] = useState([]);

    const generateLabels = (data) => {
        let tmpLabels = data?.map(item => `${monthList[item.month - 1]},${item.year}`)
        setLabels(tmpLabels)
    }

    const generateChartData = (data) => {
        let tmpData = [
            {
                label: 'Pending',
                data: data?.map(item => item.statuses?.PENDING || 0),
                backgroundColor: '#0095FF'
            },
            {
                label: 'Delivered',
                data: data?.map(item => item.statuses?.DELIVERED || 0),
                backgroundColor: '#00E096',
            },
            {
                label: 'Canceled',
                data: data?.map(item => item.statuses?.CANCELED || 0),
                backgroundColor: '#BA1E45',
            }
        ]
        setChartData(tmpData)
    }

    useEffect(() => {
        (async () => {
            try {
                const {data} = await findSummary()
                setSummary(data)
                const orderSummary = await findOrderSummary();
                generateLabels(orderSummary.data)
                generateChartData(orderSummary.data)
            } catch (e) {
                console.log(e)
            }
        })()
    }, []);


    return (
        <>
            <div className="overview-container">
                <div className="overview-item-list">
                    <div className="overview-item">
                        <p className="regular-14 gray_dark_02 mb-1">Total Farmer Onboard</p>
                        <h4 className="regular-16 weight-500 gray_dark_01">{getNumberUnit(summary?.farmerCount)}</h4>
                    </div>
                    <div className="overview-item">
                        <p className="regular-14 gray_dark_02 mb-1">Total Catalogs</p>
                        <h4 className="regular-16 weight-500 gray_dark_01">{getNumberUnit(summary?.catalogCount)}</h4>
                    </div>
                    <div className="overview-item">
                        <p className="regular-14 gray_dark_02 mb-1">Total Service Taken</p>
                        <h4 className="regular-16 weight-500 gray_dark_01">{getNumberUnit(summary?.catalogServiceCount)}</h4>
                    </div>
                    <div className="overview-item">
                        <p className="regular-14 gray_dark_02 mb-1">Order Ongoing</p>
                        <h4 className="regular-16 weight-500 gray_dark_01">{getNumberUnit(summary?.pendingOrderCount)}</h4>
                    </div>
                    <div className="overview-item">
                        <p className="regular-14 gray_dark_02 mb-1">Expected Margin</p>
                        <h4 className="regular-16 weight-500 gray_dark_01">{summary?.marginPercentage?.toFixed(2)}%</h4>
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
                                <p className="regular-12 weight-500">Pending</p>
                            </div>
                            <div className="pipeline d-flex">
                                <span className="color-indicator achieved"></span>
                                <p className="regular-12 weight-500">Delivered</p>
                            </div>
                            <div className="pipeline d-flex">
                                <span className="color-indicator unachieved"></span>
                                <p className="regular-12 weight-500">Canceled</p>
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