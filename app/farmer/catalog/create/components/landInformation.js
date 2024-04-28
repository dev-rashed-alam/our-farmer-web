import React, {useEffect, useState} from "react";
import Select from "react-select";
import EditorComponent from "@/app/ui/common/editorComponent";
import {findAllCountryData, saveCatalogByStage} from "@/app/service/CatalogService";

const landAcquisitionTypes = [{
    value: 6, label: "Six Months"
}, {
    value: 3, label: "Three Months"
}, {
    value: 1, label: "One Year"
}]
const landSizeUnits = [{
    value: "SQUARE_FEET", label: "Square Feet"
}, {
    value: 'BIGHA', label: "Bigha"
}, {
    value: 'HECTARES', label: "Hectares"
}, {
    value: 'ACRES', label: "Acres"
}]
const legalAffairs = [{
    value: "YES", label: "Yes"
}, {
    value: 'NO', label: "No"
}]

const LandInformation = ({handleNext, setAreaId}) => {
    const [inputData, setInputData] = useState({});
    const [userList, setUserList] = useState([]);
    const [errors, setErrors] = useState({});
    const [divisions, setDivisions] = useState([])
    const [masterData, setMasterData] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const {data} = await findAllCountryData();
                let tmpData = data.map(item => ({value: item.id, label: item.divisionName}))
                setDivisions(tmpData)
                setMasterData(data)
            } catch (e) {
                console.log(e)
            }
        })()
    }, [])

    const handleSelect = (data, fieldName) => {
        let cloneInputData = {...inputData, [fieldName]: data}
        if (fieldName === "division") {
            cloneInputData["district"] = {}
            cloneInputData["thana"] = {}
            cloneInputData["mouza"] = {}
        }
        if (fieldName === "district") {
            cloneInputData["thana"] = {}
            cloneInputData["mouza"] = {}
        }
        if (fieldName === "thana") {
            cloneInputData["mouza"] = {}
        }
        setInputData(cloneInputData);
    };

    const handleInputChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setInputData((prev) => ({...prev, [name]: value}));
    };

    const onChangeEditor = (data) => {
        setInputData((prev) => ({...prev, description: data}));
    };

    const findAllMappedData = (childName, parentName) => {
        let tmpData = []
        if (inputData[parentName]?.value) {
            if (childName === "district") {
                masterData?.forEach(item => {
                    if (item.id === inputData[parentName]?.value) {
                        item.info?.map(district => tmpData.push({value: district.id, label: district.districtName}))
                    }
                })
            }
            if (childName === "thana") {
                masterData?.forEach(item => {
                    if (item.id === inputData?.division?.value) {
                        item.info.forEach((district) => {
                            if (district.id === inputData[parentName]?.value) {
                                district.thana?.map(thana => tmpData.push({value: thana.id, label: thana.thanaName}))
                            }
                        })
                    }
                })
            }
            if (childName === "mouza") {
                masterData?.forEach(item => {
                    if (item.id === inputData?.division?.value) {
                        item.info.forEach((district) => {
                            if (district.id === inputData?.district?.value) {
                                district.thana?.forEach(thana => {
                                    if (thana.id === inputData[parentName]?.value) {
                                        thana.mouzaInfo?.map(mouza => tmpData.push({
                                            value: mouza.id, label: mouza.mouzaName
                                        }))
                                    }
                                })
                            }
                        })
                    }
                })
            }
        }
        return tmpData
    }

    const isValid = () => {
        let errors = {}
        if (!inputData.division?.value) {
            errors["division"] = "Division is required"
        }
        if (!inputData.district?.value) {
            errors["district"] = "District is required"
        }
        if (!inputData.thana?.value) {
            errors["thana"] = "Upazila is required"
        }
        if (!inputData.mouza?.value) {
            errors["mouza"] = "Mouza is required"
        }
        if (!inputData.khatianNumber) {
            errors["khatianNumber"] = "Khatian number is required"
        }
        if (!inputData.areaSize) {
            errors["areaSize"] = "Area size is required"
        }
        if (!inputData.sizeUnit?.value) {
            errors["sizeUnit"] = "Size unit is required"
        }
        if (!inputData.landAcquisitionType?.value) {
            errors["landAcquisitionType"] = "Land acquisition type is required"
        }
        if (!inputData.legalAffairs?.value) {
            errors["legalAffairs"] = "Legal affairs is required"
        }
        setErrors(errors)
        return !Object.keys(errors).length > 0
    }

    const handleSubmit = async () => {
        if (isValid()) {
            try {
                const {data} = await saveCatalogByStage(inputData, 'AREA_INFO');
                console.log(data.id)
                setAreaId(data.id)
                handleNext()
            } catch (e) {
                console.log(e)
            }
        }
    }

    return (<fieldset>
        <div className="form-card">
            <h2 className="fs-title">Provide Your land Information</h2>
            <div className="row">
                <div className="mb-3 col-md-4">
                    <label htmlFor="division">Division</label>
                    <Select
                        options={divisions}
                        isMulti={false}
                        classNamePrefix="react-select"
                        onChange={(data) => handleSelect(data, 'division')}
                        value={inputData.division || {}}
                    />
                    <p className="field-error">{errors.division}</p>
                </div>
                <div className="mb-3 col-md-4">
                    <label htmlFor="district">District</label>
                    <Select
                        options={findAllMappedData('district', 'division')}
                        isMulti={false}
                        classNamePrefix="react-select"
                        onChange={(data) => handleSelect(data, 'district')}
                        value={inputData.district || {}}
                    />
                    <p className="field-error">{errors.district}</p>
                </div>
                <div className="mb-3 col-md-4">
                    <label htmlFor="Upazila">Upazila</label>
                    <Select
                        options={findAllMappedData('thana', 'district')}
                        isMulti={false}
                        classNamePrefix="react-select"
                        onChange={(data) => handleSelect(data, 'thana')}
                        value={inputData.thana || {}}
                    />
                    <p className="field-error">{errors.thana}</p>
                </div>
                <div className="mb-3 col-md-4">
                    <label htmlFor="mouza">Mouza</label>
                    <Select
                        options={findAllMappedData('mouza', 'thana')}
                        isMulti={false}
                        classNamePrefix="react-select"
                        onChange={(data) => handleSelect(data, 'mouza')}
                        value={inputData.mouza || {}}
                    />
                    <p className="field-error">{errors.mouza}</p>
                </div>
                <div className="mb-3 col-md-4">
                    <label htmlFor="khatianNumber">
                        khatian Number<span className="star">*</span>
                    </label>
                    <input
                        type="text"
                        id="khatianNumber"
                        className="form-control"
                        name="khatianNumber"
                        value={inputData.khatianNumber || ''}
                        onChange={handleInputChange}
                    />
                    <p className="field-error">{errors.khatianNumber}</p>
                </div>
                <div className="mb-3 col-md-4">
                    <label htmlFor="areaSize">
                        Area Size<span className="star">*</span>
                    </label>
                    <input
                        type="text"
                        id="areaSize"
                        className="form-control"
                        name="areaSize"
                        value={inputData.areaSize || ''}
                        onChange={handleInputChange}
                    />
                    <p className="field-error">{errors.areaSize}</p>
                </div>
                <div className="mb-3 col-md-4">
                    <label htmlFor="assignUser">Size Unit</label>
                    <Select
                        options={landSizeUnits}
                        isMulti={false}
                        classNamePrefix="react-select"
                        onChange={(data) => handleSelect(data, 'sizeUnit')}
                        value={inputData.sizeUnit || {}}
                    />
                    <p className="field-error">{errors.areaSize}</p>
                </div>
                <div className="mb-3 col-md-4">
                    <label htmlFor="assignUser">Land Acquisition type</label>
                    <Select
                        options={landAcquisitionTypes}
                        isMulti={false}
                        classNamePrefix="react-select"
                        onChange={(data) => handleSelect(data, 'landAcquisitionType')}
                        value={inputData.landAcquisitionType || {}}
                    />
                    <p className="field-error">{errors.landAcquisitionType}</p>
                </div>
                <div className="mb-3 col-md-4">
                    <label htmlFor="assignUser">Legal Affairs</label>
                    <Select
                        options={legalAffairs}
                        isMulti={false}
                        classNamePrefix="react-select"
                        onChange={(data) => handleSelect(data, 'legalAffairs')}
                        value={inputData.legalAffairs || {}}
                    />
                    <p className="field-error">{errors.legalAffairs}</p>
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
        <button onClick={handleSubmit} type="button" name="next"
                className="btn btn-primary">Next Step
        </button>
    </fieldset>)
}

export default LandInformation