'use client'

import React, {useEffect, useState} from 'react';
import EditorComponent from '@/app/ui/common/EditorComponent';
import Select from 'react-select';
import '@/public/styles/Form.css';
import LandInformation from "@/app/farmer/catalog/create/components/landInformation";
import ProductInformation from "@/app/farmer/catalog/create/components/productInformation";
import VerificationStatus from "@/app/farmer/catalog/create/components/verificationStatus";
import Confirmation from "@/app/farmer/catalog/create/components/confirmation";

const Page = () => {
    const [inputData, setInputData] = useState({});
    const [prevAssignedUser, setPrevAssignedUser] = useState({});
    const [userList, setUserList] = useState([]);
    const [stepList, setStepList] = useState(["LAND", "PRODUCT", "STATUS", "FINISH"]);
    const [selectedStep, setSelectedStep] = useState("LAND");
    const [errors, setErrors] = useState({});

    const handleNext = () => {
        const activeIndex = stepList.findIndex(item => item === selectedStep)
        setSelectedStep(activeIndex + 1 < stepList.length ? stepList[activeIndex + 1] : stepList[0])
    }

    const handleInputChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setInputData((prev) => ({...prev, [name]: value}));
    };

    const isValidForm = () => {
        const errorObj = {};
        if (!inputData.title) {
            errorObj.title = 'Title is required';
        }
        setErrors(errorObj);
        return Object.keys(errorObj).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

    };

    const handleUserSelect = (user) => {
        setInputData((prev) => ({...prev, user: user}));
    };

    const onChangeEditor = (data) => {
        setInputData((prev) => ({...prev, description: data}));
    };

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
                                        <li className={selectedStep === "LAND" ? 'active' : ''} id="land">
                                            <strong>Land Information</strong>
                                        </li>
                                        <li className={selectedStep === "PRODUCT" ? 'active' : ''} id="product"><strong>Product
                                            Information</strong></li>
                                        <li className={selectedStep === "STATUS" ? 'active' : ''} id="status"><strong>Catalog
                                            Verification</strong></li>
                                        <li className={selectedStep === "FINISH" ? 'active' : ''} id="finish">
                                            <strong>Finish</strong></li>
                                    </ul>
                                    {selectedStep === "LAND" && <LandInformation handleNext={handleNext}/>}
                                    {selectedStep === "PRODUCT" && <ProductInformation handleNext={handleNext}/>}
                                    {selectedStep === "STATUS" && <VerificationStatus handleNext={handleNext} />}
                                    {selectedStep === "FINISH" && <Confirmation />}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};

export default Page;
