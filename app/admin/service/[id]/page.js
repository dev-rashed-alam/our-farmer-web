import React from "react";
import '@/public/styles/farmer/Form.css';
import ServiceInformation from "@/app/farmer/service/create/components/serviceInformation";
import {cookies} from "next/headers";
import {findServiceById} from "@/app/service/catalogService";

const Page = async ({params}) => {
    let tokenStr = cookies().get("token")?.value;
    const serviceResponse = await findServiceById(params.id, tokenStr)

    return (<div className="form-wrapper">
        <div className="container-fluid">
            <div className="row justify-content-center mt-0">
                <div className="text-center p-0 mt-3 mb-2">
                    <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                        <h2><strong>Your Own Service</strong></h2>
                        <p className="mb-5">Fill all form field to go to next step</p>
                        <div className="row">
                            <div className="col-md-12 mx-0">
                                <form id="msform">
                                    <ServiceInformation serviceInfo={serviceResponse.data}/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Page