"use client"
import React from "react";
import {updateOrder} from "@/app/service/orderService";
import {useRouter} from "next/navigation"
import {toast} from "react-toastify";

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
        <span onClick={() => updateOrderStatus(order.id)} className="btn btn-primary custom-btn mb-2 deliver-btn">
             Click to Delivered
        </span>
    )
}

export default UpdateOrder