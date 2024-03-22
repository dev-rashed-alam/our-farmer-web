'use client'

import React, {useEffect, useState} from 'react';
import EditorComponent from '@/app/ui/common/EditorComponent';
import Select from 'react-select';
import '@/public/styles/Form.css';

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

    useEffect(() => {
        document.addEventListener("DOMContentLoaded", function () {
            var current_fs, next_fs, previous_fs; // fieldsets
            var opacity;

            var nextButtons = document.querySelectorAll(".next");
            nextButtons.forEach(function (button) {
                button.addEventListener("click", function () {
                    console.log("====")
                    current_fs = this.parentElement;
                    next_fs = this.parentElement.nextElementSibling;

                    console.log(current_fs, next_fs)

                    // Add Class Active
                    var progressbarItems = document.querySelectorAll("#progressbar li");
                    progressbarItems[Array.from(document.querySelectorAll("fieldset")).indexOf(next_fs)].classList.add("active");

                    // show the next fieldset
                    next_fs.style.display = "block";

                    // hide the current fieldset with style
                    var animationDuration = 600;
                    var startTime = null;

                    function step(timestamp) {
                        if (!startTime) startTime = timestamp;
                        var progress = timestamp - startTime;
                        opacity = progress / animationDuration;
                        if (opacity > 1) opacity = 1;
                        current_fs.style.opacity = 1 - opacity;
                        if (opacity < 1) {
                            requestAnimationFrame(step);
                        } else {
                            current_fs.style.display = "none";
                            next_fs.style.opacity = opacity;
                        }
                    }

                    requestAnimationFrame(step);
                });
            });
        });
    }, [])

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
                                            Status</strong></li>
                                        <li className={selectedStep === "FINISH" ? 'active' : ''} id="finish">
                                            <strong>Finish</strong></li>
                                    </ul>
                                    {selectedStep === "LAND" && <fieldset>
                                        <div className="form-card">
                                            <h2 className="fs-title">Provide Your land Information</h2>
                                            <div className="row">
                                                <div className="mb-3 col-md-4">
                                                    <label htmlFor="assignUser">Division</label>
                                                    <Select
                                                        options={userList}
                                                        isMulti={false}
                                                        classNamePrefix="react-select"
                                                        onChange={handleUserSelect}
                                                        value={inputData.user || {}}
                                                    />
                                                    <p className="field-error">{errors.permissions}</p>
                                                </div>
                                                <div className="mb-3 col-md-4">
                                                    <label htmlFor="assignUser">District</label>
                                                    <Select
                                                        options={userList}
                                                        isMulti={false}
                                                        classNamePrefix="react-select"
                                                        onChange={handleUserSelect}
                                                        value={inputData.user || {}}
                                                    />
                                                    <p className="field-error">{errors.permissions}</p>
                                                </div>
                                                <div className="mb-3 col-md-4">
                                                    <label htmlFor="assignUser">Upazila</label>
                                                    <Select
                                                        options={userList}
                                                        isMulti={false}
                                                        classNamePrefix="react-select"
                                                        onChange={handleUserSelect}
                                                        value={inputData.user || {}}
                                                    />
                                                    <p className="field-error">{errors.permissions}</p>
                                                </div>
                                                <div className="mb-3 col-md-4">
                                                    <label htmlFor="assignUser">Mouza</label>
                                                    <Select
                                                        options={userList}
                                                        isMulti={false}
                                                        classNamePrefix="react-select"
                                                        onChange={handleUserSelect}
                                                        value={inputData.user || {}}
                                                    />
                                                    <p className="field-error">{errors.permissions}</p>
                                                </div>
                                                <div className="mb-3 col-md-4">
                                                    <label htmlFor="title">
                                                        khatian Number<span className="star">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="title"
                                                        className="form-control"
                                                        name="title"
                                                        value={inputData.title || ''}
                                                        onChange={handleInputChange}
                                                    />
                                                    <p className="field-error">{errors.title}</p>
                                                </div>
                                                <div className="mb-3 col-md-4">
                                                    <label htmlFor="title">
                                                        Area Size<span className="star">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="title"
                                                        className="form-control"
                                                        name="title"
                                                        value={inputData.title || ''}
                                                        onChange={handleInputChange}
                                                    />
                                                    <p className="field-error">{errors.title}</p>
                                                </div>
                                                <div className="mb-3 col-md-4">
                                                    <label htmlFor="assignUser">Size Unit</label>
                                                    <Select
                                                        options={userList}
                                                        isMulti={false}
                                                        classNamePrefix="react-select"
                                                        onChange={handleUserSelect}
                                                        value={inputData.user || {}}
                                                    />
                                                    <p className="field-error">{errors.permissions}</p>
                                                </div>
                                                <div className="mb-3 col-md-4">
                                                    <label htmlFor="assignUser">Land Acquisition type</label>
                                                    <Select
                                                        options={userList}
                                                        isMulti={false}
                                                        classNamePrefix="react-select"
                                                        onChange={handleUserSelect}
                                                        value={inputData.user || {}}
                                                    />
                                                    <p className="field-error">{errors.permissions}</p>
                                                </div>
                                                <div className="mb-3 col-md-4">
                                                    <label htmlFor="assignUser"> Legal Affairs</label>
                                                    <Select
                                                        options={userList}
                                                        isMulti={false}
                                                        classNamePrefix="react-select"
                                                        onChange={handleUserSelect}
                                                        value={inputData.user || {}}
                                                    />
                                                    <p className="field-error">{errors.permissions}</p>
                                                </div>
                                                <div className="mb-3 col-md-12">
                                                    <EditorComponent
                                                        label={'Description'}
                                                        value={inputData.description}
                                                        onChange={onChangeEditor}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <button onClick={handleNext} type="button" name="next"
                                                className="btn btn-primary">Next Step
                                        </button>
                                    </fieldset>}
                                    {selectedStep === "PRODUCT" && <fieldset>
                                        <div className="form-card">
                                            <h2 className="fs-title">Provide Your Product Information</h2>
                                            <div className="row">
                                                <div className="mb-3 col-md-4">
                                                    <label htmlFor="title">
                                                        Product Title<span className="star">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="title"
                                                        className="form-control"
                                                        name="title"
                                                        value={inputData.title || ''}
                                                        onChange={handleInputChange}
                                                    />
                                                    <p className="field-error">{errors.title}</p>
                                                </div>
                                                <div className="mb-3 col-md-4">
                                                    <label htmlFor="assignUser">Product Category</label>
                                                    <Select
                                                        options={userList}
                                                        isMulti={false}
                                                        classNamePrefix="react-select"
                                                        onChange={handleUserSelect}
                                                        value={inputData.user || {}}
                                                    />
                                                    <p className="field-error">{errors.permissions}</p>
                                                </div>
                                                <div className="mb-3 col-md-4">
                                                    <label htmlFor="title">
                                                        Approximate Farming Start Date<span className="star">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="title"
                                                        className="form-control"
                                                        name="title"
                                                        value={inputData.title || ''}
                                                        onChange={handleInputChange}
                                                    />
                                                    <p className="field-error">{errors.title}</p>
                                                </div>
                                                <div className="mb-3 col-md-4">
                                                    <label htmlFor="title">
                                                        Approximate Farming End Date<span className="star">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="title"
                                                        className="form-control"
                                                        name="title"
                                                        value={inputData.title || ''}
                                                        onChange={handleInputChange}
                                                    />
                                                    <p className="field-error">{errors.title}</p>
                                                </div>
                                                <div className="mb-3 col-md-4">
                                                    <label htmlFor="assignUser">Production Unit</label>
                                                    <Select
                                                        options={userList}
                                                        isMulti={false}
                                                        classNamePrefix="react-select"
                                                        onChange={handleUserSelect}
                                                        value={inputData.user || {}}
                                                    />
                                                    <p className="field-error">{errors.permissions}</p>
                                                </div>
                                                <div className="mb-3 col-md-4">
                                                    <label htmlFor="title">
                                                        Approximate Total Production<span className="star">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="title"
                                                        className="form-control"
                                                        name="title"
                                                        value={inputData.title || ''}
                                                        onChange={handleInputChange}
                                                    />
                                                    <p className="field-error">{errors.title}</p>
                                                </div>
                                                <div className="mb-3 col-md-4">
                                                    <label htmlFor="title">
                                                        Approximate Total Cost<span className="star">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="title"
                                                        className="form-control"
                                                        name="title"
                                                        value={inputData.title || ''}
                                                        onChange={handleInputChange}
                                                    />
                                                    <p className="field-error">{errors.title}</p>
                                                </div>
                                                <div className="mb-3 col-md-4">
                                                    <label htmlFor="title">
                                                        MOQ<span className="star">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="title"
                                                        className="form-control"
                                                        name="title"
                                                        value={inputData.title || ''}
                                                        onChange={handleInputChange}
                                                    />
                                                    <p className="field-error">{errors.title}</p>
                                                </div>
                                                <div className="mb-3 col-md-4">
                                                    <label htmlFor="title">
                                                        Approximate Per Unit Cost<span className="star">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="title"
                                                        className="form-control"
                                                        name="title"
                                                        value={inputData.title || ''}
                                                        onChange={handleInputChange}
                                                        readOnly={true}
                                                    />
                                                    <p className="field-error">{errors.title}</p>
                                                </div>

                                                <div className="mb-3 col-md-12">
                                                    <EditorComponent
                                                        label={'Description'}
                                                        value={inputData.description}
                                                        onChange={onChangeEditor}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <button onClick={handleNext} type="button" name="next"
                                                className="next btn btn-primary">Next Step
                                        </button>
                                    </fieldset>}
                                    {selectedStep === "STATUS" && <fieldset>
                                        <div className="form-card">
                                            <h2 className="fs-title">Provide Your Product Information</h2>
                                            <div className="row">
                                                <div className="mb-3 col-md-4">
                                                    <label htmlFor="assignUser">Division</label>
                                                    <Select
                                                        options={userList}
                                                        isMulti={false}
                                                        classNamePrefix="react-select"
                                                        onChange={handleUserSelect}
                                                        value={inputData.user || {}}
                                                    />
                                                    <p className="field-error">{errors.permissions}</p>
                                                </div>
                                                <div className="mb-3 col-md-4">
                                                    <label htmlFor="assignUser">District</label>
                                                    <Select
                                                        options={userList}
                                                        isMulti={false}
                                                        classNamePrefix="react-select"
                                                        onChange={handleUserSelect}
                                                        value={inputData.user || {}}
                                                    />
                                                    <p className="field-error">{errors.permissions}</p>
                                                </div>
                                                <div className="mb-3 col-md-4">
                                                    <label htmlFor="assignUser">Upazila</label>
                                                    <Select
                                                        options={userList}
                                                        isMulti={false}
                                                        classNamePrefix="react-select"
                                                        onChange={handleUserSelect}
                                                        value={inputData.user || {}}
                                                    />
                                                    <p className="field-error">{errors.permissions}</p>
                                                </div>
                                                <div className="mb-3 col-md-4">
                                                    <label htmlFor="assignUser">Mouza</label>
                                                    <Select
                                                        options={userList}
                                                        isMulti={false}
                                                        classNamePrefix="react-select"
                                                        onChange={handleUserSelect}
                                                        value={inputData.user || {}}
                                                    />
                                                    <p className="field-error">{errors.permissions}</p>
                                                </div>
                                                <div className="mb-3 col-md-4">
                                                    <label htmlFor="title">
                                                        khatian Number<span className="star">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="title"
                                                        className="form-control"
                                                        name="title"
                                                        value={inputData.title || ''}
                                                        onChange={handleInputChange}
                                                    />
                                                    <p className="field-error">{errors.title}</p>
                                                </div>
                                                <div className="mb-3 col-md-4">
                                                    <label htmlFor="title">
                                                        Area Size<span className="star">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="title"
                                                        className="form-control"
                                                        name="title"
                                                        value={inputData.title || ''}
                                                        onChange={handleInputChange}
                                                    />
                                                    <p className="field-error">{errors.title}</p>
                                                </div>
                                                <div className="mb-3 col-md-4">
                                                    <label htmlFor="assignUser">Size Unit</label>
                                                    <Select
                                                        options={userList}
                                                        isMulti={false}
                                                        classNamePrefix="react-select"
                                                        onChange={handleUserSelect}
                                                        value={inputData.user || {}}
                                                    />
                                                    <p className="field-error">{errors.permissions}</p>
                                                </div>
                                                <div className="mb-3 col-md-4">
                                                    <label htmlFor="assignUser">Land Acquisition type</label>
                                                    <Select
                                                        options={userList}
                                                        isMulti={false}
                                                        classNamePrefix="react-select"
                                                        onChange={handleUserSelect}
                                                        value={inputData.user || {}}
                                                    />
                                                    <p className="field-error">{errors.permissions}</p>
                                                </div>
                                                <div className="mb-3 col-md-4">
                                                    <label htmlFor="assignUser"> Legal Affairs</label>
                                                    <Select
                                                        options={userList}
                                                        isMulti={false}
                                                        classNamePrefix="react-select"
                                                        onChange={handleUserSelect}
                                                        value={inputData.user || {}}
                                                    />
                                                    <p className="field-error">{errors.permissions}</p>
                                                </div>
                                                <div className="mb-3 col-md-12">
                                                    <EditorComponent
                                                        label={'Description'}
                                                        value={inputData.description}
                                                        onChange={onChangeEditor}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <button onClick={handleNext} type="button" name="next"
                                                className="next btn btn-primary">Next Step
                                        </button>
                                    </fieldset>}
                                    {selectedStep === "FINISH" && <fieldset>
                                        <div className="form-card">
                                            <h2 className="fs-title">Provide Your Product Information</h2>
                                            <div className="row">
                                                <div className="mb-3 col-md-4">
                                                    <label htmlFor="assignUser">Division</label>
                                                    <Select
                                                        options={userList}
                                                        isMulti={false}
                                                        classNamePrefix="react-select"
                                                        onChange={handleUserSelect}
                                                        value={inputData.user || {}}
                                                    />
                                                    <p className="field-error">{errors.permissions}</p>
                                                </div>
                                                <div className="mb-3 col-md-4">
                                                    <label htmlFor="assignUser">District</label>
                                                    <Select
                                                        options={userList}
                                                        isMulti={false}
                                                        classNamePrefix="react-select"
                                                        onChange={handleUserSelect}
                                                        value={inputData.user || {}}
                                                    />
                                                    <p className="field-error">{errors.permissions}</p>
                                                </div>
                                                <div className="mb-3 col-md-4">
                                                    <label htmlFor="assignUser">Upazila</label>
                                                    <Select
                                                        options={userList}
                                                        isMulti={false}
                                                        classNamePrefix="react-select"
                                                        onChange={handleUserSelect}
                                                        value={inputData.user || {}}
                                                    />
                                                    <p className="field-error">{errors.permissions}</p>
                                                </div>
                                                <div className="mb-3 col-md-4">
                                                    <label htmlFor="assignUser">Mouza</label>
                                                    <Select
                                                        options={userList}
                                                        isMulti={false}
                                                        classNamePrefix="react-select"
                                                        onChange={handleUserSelect}
                                                        value={inputData.user || {}}
                                                    />
                                                    <p className="field-error">{errors.permissions}</p>
                                                </div>
                                                <div className="mb-3 col-md-4">
                                                    <label htmlFor="title">
                                                        khatian Number<span className="star">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="title"
                                                        className="form-control"
                                                        name="title"
                                                        value={inputData.title || ''}
                                                        onChange={handleInputChange}
                                                    />
                                                    <p className="field-error">{errors.title}</p>
                                                </div>
                                                <div className="mb-3 col-md-4">
                                                    <label htmlFor="title">
                                                        Area Size<span className="star">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="title"
                                                        className="form-control"
                                                        name="title"
                                                        value={inputData.title || ''}
                                                        onChange={handleInputChange}
                                                    />
                                                    <p className="field-error">{errors.title}</p>
                                                </div>
                                                <div className="mb-3 col-md-4">
                                                    <label htmlFor="assignUser">Size Unit</label>
                                                    <Select
                                                        options={userList}
                                                        isMulti={false}
                                                        classNamePrefix="react-select"
                                                        onChange={handleUserSelect}
                                                        value={inputData.user || {}}
                                                    />
                                                    <p className="field-error">{errors.permissions}</p>
                                                </div>
                                                <div className="mb-3 col-md-4">
                                                    <label htmlFor="assignUser">Land Acquisition type</label>
                                                    <Select
                                                        options={userList}
                                                        isMulti={false}
                                                        classNamePrefix="react-select"
                                                        onChange={handleUserSelect}
                                                        value={inputData.user || {}}
                                                    />
                                                    <p className="field-error">{errors.permissions}</p>
                                                </div>
                                                <div className="mb-3 col-md-4">
                                                    <label htmlFor="assignUser"> Legal Affairs</label>
                                                    <Select
                                                        options={userList}
                                                        isMulti={false}
                                                        classNamePrefix="react-select"
                                                        onChange={handleUserSelect}
                                                        value={inputData.user || {}}
                                                    />
                                                    <p className="field-error">{errors.permissions}</p>
                                                </div>
                                                <div className="mb-3 col-md-12">
                                                    <EditorComponent
                                                        label={'Description'}
                                                        value={inputData.description}
                                                        onChange={onChangeEditor}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <button onClick={handleNext} type="button" name="next"
                                                className="next btn btn-primary">Next Step
                                        </button>
                                    </fieldset>}
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
