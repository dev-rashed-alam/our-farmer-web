'use client'

import React, {useEffect, useState} from 'react';
import '@/public/styles/farmer/Form.css';
import LandInformation from "@/app/farmer/catalog/components/landInformation";
import ProductInformation from "@/app/farmer/catalog/components/productInformation";
import VerificationStatus from "@/app/farmer/catalog/components/verificationStatus";
import Confirmation from "@/app/farmer/catalog/components/confirmation";
import { useSearchParams } from 'next/navigation'

const Form = ({catalogInfo}) => {
    const [catalogResponse, setCatalogResponse] = useState({})
    const [stepList,] = useState(["LAND", "PRODUCT", "STATUS", "FINISH"]);
    const [selectedStep, setSelectedStep] = useState("LAND");
    const [areaId, setAreaId] = useState(null)

    useEffect(() => {
        setCatalogResponse(catalogInfo)
    }, [catalogInfo])

    const handleNext = () => {
        const activeIndex = stepList.findIndex(item => item === selectedStep)
        setSelectedStep(activeIndex + 1 < stepList.length ? stepList[activeIndex + 1] : stepList[0])
    }

    return (<div className="form-wrapper">
        <div className="container-fluid">
            <div className="row justify-content-center mt-0">
                <div className="text-center p-0 mt-3 mb-2">
                    <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                        <h2><strong>Add Your Product Catalog</strong></h2>
                        <p className="mb-5">Fill all form field to go to next step</p>
                        <div className="row">
                            <div className="col-md-12 mx-0">
                                <form id="msform">
                                    <ul id="progressbar">
                                        <li
                                            className={selectedStep === "LAND" ? 'active' : ''}
                                            id="land"
                                        >
                                            <strong>Land Information</strong>
                                        </li>
                                        <li
                                            className={selectedStep === "PRODUCT" ? 'active' : ''}
                                            id="product"
                                        >
                                            <strong>Product Information</strong>
                                        </li>
                                        <li
                                            className={selectedStep === "STATUS" ? 'active' : ''}
                                            id="status"
                                        >
                                            <strong>Catalog Verification</strong>
                                        </li>
                                        <li
                                            className={selectedStep === "FINISH" ? 'active' : ''}
                                            id="finish"
                                        >
                                            <strong>Finish</strong>
                                        </li>
                                    </ul>
                                    {selectedStep === "LAND" &&
                                        <LandInformation
                                            handleNext={handleNext}
                                            setAreaId={setAreaId}
                                            landInfo={catalogResponse?.areaInfo}
                                            setCatalogResponse={setCatalogResponse}
                                        />}
                                    {selectedStep === "PRODUCT" &&
                                        <ProductInformation
                                            handleNext={handleNext}
                                            areaId={areaId}
                                            productInfo={catalogResponse}
                                            setCatalogResponse={setCatalogResponse}
                                        />}
                                    {selectedStep === "STATUS" &&
                                        <VerificationStatus
                                            handleNext={handleNext}
                                            supervisorInfo={catalogResponse?.superVisor}
                                        />}
                                    {selectedStep === "FINISH" && <Confirmation/>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};

export default Form;
