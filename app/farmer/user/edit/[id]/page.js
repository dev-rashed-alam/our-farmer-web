import React from "react";
import EditProfile from "@/app/ui/common/EditProfile";
import {cookies} from "next/headers";

const Page = () => {
    let tokenStr = cookies().get("token")?.value;
    return <EditProfile tokenStr={tokenStr}/>
}

export default Page