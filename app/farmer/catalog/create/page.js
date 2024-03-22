'use client'

import React, {useEffect, useState} from 'react';
import EditorComponent from '@/app/ui/common/EditorComponent';
import Select from 'react-select';
import '@/public/styles/Form.css';

const Page = () => {
    const [inputData, setInputData] = useState({});
    const [prevAssignedUser, setPrevAssignedUser] = useState({});
    const [userList, setUserList] = useState([]);
    const [errors, setErrors] = useState({});

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

    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="row">
                        <legend>Provide Land Information</legend>
                    </div>
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
                                placeholder="Enter title"
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
                                placeholder="Enter title"
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
                </fieldset>
                <fieldset>
                    <div className="row">
                        <legend>Provide Product information</legend>
                    </div>
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
                                placeholder="Enter title"
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
                                placeholder="Enter title"
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
                </fieldset>
                <div>
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Page;
