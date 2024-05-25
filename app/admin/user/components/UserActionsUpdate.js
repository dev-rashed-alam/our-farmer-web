"use client"
import React from "react";
import {deleteUserById, findAllUsers, updateUserStatusById} from "@/app/service/userService";
import {useRouter} from "next/navigation";
import {toast} from "react-toastify";

const UserActionsUpdate = ({user}) => {
    const router = useRouter();

    const changeStatus = async () => {
        try {
            await updateUserStatusById(user.id, {status: ["PENDING", "HOLD"].includes(user.status) ? "APPROVED" : "HOLD"})
            toast.success("Status Change Successful!")
            router.refresh();
        } catch (e) {
            console.log(e)
        }
        router.refresh();
    }

    const removeUser = async () => {
        try {
            await deleteUserById(user.id)
            toast.warning("User Deleted!")
            router.push("/admin/user");
            router.refresh();
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <button
                className="btn btn-outline-secondary"
                onClick={changeStatus}
            >
                {user.status === "APPROVED" ? "Deactivate" : "Activate"}
            </button>
            <button
                className="btn btn-outline-danger"
                onClick={removeUser}
            >
                Delete
            </button>
        </>
    )
}

export default UserActionsUpdate