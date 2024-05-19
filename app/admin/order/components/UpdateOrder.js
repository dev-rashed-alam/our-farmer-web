"use client"
import React from "react";
import {MdDelete} from "react-icons/md";
import {updateOrder} from "@/app/service/orderService";
import {useRouter} from "next/navigation"
import {toast} from "react-toastify";
import {IoMdCheckmark} from "react-icons/io";

const UpdateOrder = ({order}) => {
    const router = useRouter();
    const updateOrderStatus = async (id) => {
        try {
            await updateOrder(id)
            toast('Order status updated successfully')
            router.refresh()
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <span onClick={() => updateOrderStatus(order.id)} className="clickable text-body-secondary common-sytle p-2">
             <IoMdCheckmark />Click to Delivered
        </span>
    )
}

export default UpdateOrder