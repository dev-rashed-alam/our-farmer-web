import React, {useEffect, useState} from "react";
import Select from "react-select";
import EditorComponent from "@/app/ui/common/editorComponent";
import {findAllCountryData, saveCatalogByStage, updateCatalogByStage} from "@/app/service/catalogService";
import {useSearchParams} from "next/navigation";
import {landAcquisitionTypes, landSizeUnits, legalAffairs} from "@/app/config/utils";
import {toast} from "react-toastify";

const LandInformation = ({handleNext, setAreaId, landInfo, setCatalogResponse}) => {
    const [inputData, setInputData] = useState({});
    const [errors, setErrors] = useState({});
    const [divisions, setDivisions] = useState([])
    const [masterData, setMasterData] = useState([])
    const [readOnly, setReadOnly] = useState(false);
    const searchParams = useSearchParams()
    const pageType = searchParams.get('type')

    useEffect(() => {
        setReadOnly(pageType === "view")
    }, [pageType])

    useEffect(() => {
        if (landInfo) {
            setInputData(landInfo)
        }
    }, [landInfo])

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
                if (!readOnly) {
                    if (landInfo?.id) {
                        const {data} = await updateCatalogByStage(inputData, 'AREA_INFO', landInfo.id);
                        setCatalogResponse = {data}
                        setAreaId(data.id)
                    } else {
                        const {data} = await saveCatalogByStage(inputData, 'AREA_INFO');
                        setCatalogResponse = {data}
                        setAreaId(data.id)
                    }
                    toast.success("Land Information Update Successful!")
                }
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
                        isDisabled={readOnly}
                        options={divisions}
                        isMulti={false}
                        classNamePrefix="react-select"
                        onChange={(data) => handleSelect(data, 'division')}
                        value={inputData?.division || {}}
                    />
                    <p className="field-error">{errors.division}</p>
                </div>
                <div className="mb-3 col-md-4">
                    <label htmlFor="district">District</label>
                    <Select
                        isDisabled={readOnly}
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
                        isDisabled={readOnly}
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
                        isDisabled={readOnly}
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
                        readOnly={readOnly}
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
                        readOnly={readOnly}
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
                        isDisabled={readOnly}
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
                        isDisabled={readOnly}
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
                        isDisabled={readOnly}
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
                        disabled={readOnly}
                        label={'Description'}
                        value={inputData.description}
                        onChange={onChangeEditor}
                    />
                </div>
            </div>
        </div>
        <button
            onClick={handleSubmit}
            type="button"
            name="next"
            className="btn btn-primary"
        >
            Next Step
        </button>
    </fieldset>)
}

export default LandInformation