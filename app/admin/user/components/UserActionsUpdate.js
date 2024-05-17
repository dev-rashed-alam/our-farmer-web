"use client"
import React from "react";
import {deleteUserById, findAllUsers, updateUserStatusById} from "@/app/service/userService";
import {useRouter} from "next/navigation";

const UserActionsUpdate = ({user}) => {
    const router = useRouter();

    const changeStatus = async () => {
        try {
            await updateUserStatusById(user.id, {status: ["PENDING", "HOLD"].includes(user.status) ? "APPROVED" : "HOLD"})
            router.refresh();
        } catch (e) {
            console.log(e)
        }
        router.refresh();
    }

    const removeUser = async () => {
        try {
            await deleteUserById(user.id)
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