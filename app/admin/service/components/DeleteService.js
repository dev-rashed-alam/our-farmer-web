"use client"
import React from "react";
import {MdDelete} from "react-icons/md";
import {deleteServiceById} from "@/app/service/catalogService";
import {useRouter} from "next/navigation"

const DeleteService = ({service}) => {
    const router = useRouter();
    const removeService = async (id) => {
        try {
            await deleteServiceById(id)
            router.refresh()
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <span onClick={() => removeService(service.id)} className="clickable admin-icons">
            <MdDelete/>
        </span>
    )
}

export default DeleteService