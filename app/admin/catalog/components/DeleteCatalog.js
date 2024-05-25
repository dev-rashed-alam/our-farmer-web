"use client"
import React from "react";
import {MdDelete} from "react-icons/md";
import {deleteCatalogById} from "@/app/service/catalogService";
import {useRouter} from "next/navigation"
import {toast} from "react-toastify";

const DeleteCatalog = ({catalog}) => {
    const router = useRouter();
    const removeCatalog = async (id) => {
        try {
            await deleteCatalogById(id)
            toast.warning("Catalog Deleted!")
            router.refresh()
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <span onClick={() => removeCatalog(catalog.id)} className="clickable admin-icons">
            <MdDelete/>
        </span>
    )
}

export default DeleteCatalog