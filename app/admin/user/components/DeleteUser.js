"use client"
import React from "react";
import {MdDelete} from "react-icons/md";
import {useRouter} from "next/navigation"
import {deleteUserById} from "@/app/service/userService";

const DeleteUser = ({user}) => {
    const router = useRouter();
    const removeUser = async (id) => {
        try {
            await deleteUserById(id)
            router.refresh()
        } catch (e) {
            console.log(e)
        }
    }

    return (<span onClick={() => removeUser(user.id)} className="clickable">
            <MdDelete/>
        </span>)
}

export default DeleteUser