"use client"
import React from "react";
import {MdDelete} from "react-icons/md";
import {changeServiceStatus, deleteServiceById} from "@/app/service/catalogService";
import {FcApprove} from "react-icons/fc";
import {useRouter} from "next/navigation"
import {GiCancel} from "react-icons/gi";

const ServiceActions = ({service}) => {
    const router = useRouter();
    const removeService = async (id) => {
        try {
            await deleteServiceById(id)
            router.refresh()
        } catch (e) {
            console.log(e)
        }
    }
    const toggleServiceStatus = async () => {
        try {
            await changeServiceStatus(service.id, service.status === "APPROVE" ? "HOLD" : "APPROVE")
            router.refresh()
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <span onClick={() => removeService(service.id)} className="clickable admin-icons">
                <MdDelete/>
            </span>
            &nbsp;
            <span onClick={toggleServiceStatus} className="clickable admin-icons">
                {service.status === "APPROVE" ? <GiCancel/> : <FcApprove/>}
            </span>
        </>
    )
}

export default ServiceActions