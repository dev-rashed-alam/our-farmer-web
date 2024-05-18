import React, {useEffect, useState} from "react";
import Select from "react-select";
import EditorComponent from "@/app/ui/common/editorComponent";
import {serviceType} from "@/app/config/utils";
import {findAllCatalogsByUser} from "@/app/service/catalogService";

const ServiceInformation = () => {
    const [inputData, setInputData] = useState({});
    const [userList, setUserList] = useState([]);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        (() => {
            try {
                const data = findAllCatalogsByUser()
            } catch (e) {
                console.log(e)
            }
        })()
    }, []);

    const handleUserSelect = (user) => {
        setInputData((prev) => ({...prev, user: user}));
    };

    const handleInputChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setInputData((prev) => ({...prev, [name]: value}));
    };

    const onChangeEditor = (data) => {
        setInputData((prev) => ({...prev, description: data}));
    };


    return (
        <fieldset>
            <div className="form-card">
                <div className="row">
                    <div className="mb-3 col-md-4">
                        <label htmlFor="assignUser">Service Type <span className="star">*</span></label>
                        <Select
                            options={serviceType}
                            isMulti={false}
                            classNamePrefix="react-select"
                            onChange={handleUserSelect}
                            value={inputData.user || {}}
                        />
                        <p className="field-error">{errors.permissions}</p>
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="assignUser">Select Catalog <span className="star">*</span></label>
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
                        <label htmlFor="assignUser">Tenure Type <span className="star">*</span></label>
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
                            Approximate Starting Date<span className="star">*</span>
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
                            Approximate End Date<span className="star">*</span>
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
                            Interest Value<span className="star">*</span>
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
                    <div className="mb-3 col-md-12">
                        <EditorComponent
                            label={'Description'}
                            value={inputData.description}
                            onChange={onChangeEditor}
                        />
                    </div>
                </div>
            </div>
            <button type="button" name="next"
                    className="btn btn-primary">Submit
            </button>
        </fieldset>
    )
}

export default ServiceInformation