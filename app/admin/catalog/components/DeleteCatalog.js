"use client"
import React from "react";
import {MdDelete} from "react-icons/md";
import {deleteCatalogById} from "@/app/service/catalogService";
import {useRouter} from "next/navigation"

const DeleteCatalog = ({catalog}) => {
    const router = useRouter();
    const removeCatalog = async (id) => {
        try {
            await deleteCatalogById(id)
            router.refresh()
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <span onClick={() => removeCatalog(catalog.id)} className="clickable">
            <MdDelete/>
        </span>
    )
}

export default DeleteCatalog