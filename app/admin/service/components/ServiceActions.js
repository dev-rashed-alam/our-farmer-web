"use client"
import React from "react";
import {MdDelete} from "react-icons/md";
import {changeServiceStatus, deleteServiceById} from "@/app/service/catalogService";
import {FcApprove} from "react-icons/fc";
import {useRouter} from "next/navigation"
import {GiCancel} from "react-icons/gi";
import {saveProductTna} from "@/app/service/tnaService";
import {getUserInfo} from "@/app/config/utils";

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
            let status = service.status === "APPROVE" ? "HOLD" : "APPROVE"
            await changeServiceStatus(service.id, status)
            if (status === "APPROVE") {
                await saveProductTna({requestedUser: service.createdBy.id, serviceId: service.id})
            }
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