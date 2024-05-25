"use client"
import React from "react";
import {MdDelete} from "react-icons/md";
import {useRouter} from "next/navigation"
import {deleteUserById} from "@/app/service/userService";
import {toast} from "react-toastify";

const DeleteUser = ({user}) => {
    const router = useRouter();
    const removeUser = async (id) => {
        try {
            await deleteUserById(id)
            toast.success("User Deleted!")
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