import React, {useState} from "react";
import Select from "react-select";
import EditorComponent from "@/app/ui/common/editorComponent";

const ProductInformation = ({handleNext}) => {
    const [inputData, setInputData] = useState({});
    const [userList, setUserList] = useState([]);
    const [errors, setErrors] = useState({});

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
        </fieldset>
    )
}

export default ProductInformation