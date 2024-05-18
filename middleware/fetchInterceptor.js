import {cookies} from "next/headers";
import {NextResponse} from "next/server";
import axios from "axios";

const fetchInterceptor = async (req) => {
    let tokenStr = cookies().get("token")?.value;
    return NextResponse.next();
};

export default fetchInterceptor;