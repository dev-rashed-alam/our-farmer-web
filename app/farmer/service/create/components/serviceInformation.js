"use client"
import React, {useEffect, useState} from "react";
import Select from "react-select";
import EditorComponent from "@/app/ui/common/editorComponent";
import {productionUnits, serviceType, tenureType} from "@/app/config/utils";
import {findAllCatalogsByUser, saveCatalogService, updateCatalogService} from "@/app/service/catalogService";
import {useRouter, useSearchParams} from "next/navigation";

const ServiceInformation = ({serviceInfo}) => {
    const [inputData, setInputData] = useState({});
    const [catalogs, setCatalogs] = useState([]);
    const [errors, setErrors] = useState({});
    const [readOnly, setReadOnly] = useState(true);
    const [isViewOnly, setIsViewOnly] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams()
    const pageType = searchParams.get('type')

    useEffect(() => {
        if (pageType === "view") {
            setIsViewOnly(true)
        }
    }, [pageType]);

    useEffect(() => {
        if (serviceInfo) {
            setInputData({
                serviceId: serviceInfo.id,
                serviceType: serviceInfo.serviceType,
                tenureType: serviceInfo.tenureType,
                description: serviceInfo.description,
                productionStartDate: serviceInfo.productionStartDate.split("T")[0],
                productionEndDate: serviceInfo.productionEndDate.split("T")[0],
                totalProduction: serviceInfo.productCatalog.totalProduction,
                totalCost: serviceInfo.productCatalog.totalCost,
                unitType: serviceInfo.productCatalog.unitType,
                sellingPrice: serviceInfo.sellingPrice,
                moq: serviceInfo.productCatalog.moq,
                unitCost: serviceInfo.productCatalog.unitCost,
                catalog: {value: serviceInfo.productCatalog.id, label: serviceInfo.productCatalog.productTitle},
                productCategory: {
                    value: serviceInfo.productCatalog.productCategory?.[0].id,
                    label: serviceInfo.productCatalog.productCategory?.[0].name
                },
            })
        }
        (async () => {
            try {
                const {data} = await findAllCatalogsByUser()
                setCatalogs(data?.map(item => ({value: item.id, label: item.productTitle, ...item})))
            } catch (e) {
                console.log(e)
            }
        })()
    }, []);

    const handleSelect = (data, fieldName) => {
        setInputData((prev) => ({...prev, [fieldName]: data}));
        if (fieldName === "catalog") {
            let selectedCatalog = catalogs.find(item => item.value === data.value);
            setInputData(prev => ({
                ...prev,
                moq: selectedCatalog.moq,
                productCategory: {
                    value: selectedCatalog.productCategory[0].id, label: selectedCatalog.productCategory[0].name
                },
                unitType: selectedCatalog.unitType,
                totalProduction: selectedCatalog.totalProduction,
                totalCost: selectedCatalog.totalCost,
                unitCost: selectedCatalog.unitCost,
            }))
        }
    };


    const handleInputChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setInputData((prev) => ({...prev, [name]: value}));
    };

    const onChangeEditor = (data) => {
        setInputData((prev) => ({...prev, description: data}));
    };

    const isValid = () => {
        let errors = {}
        if (!inputData.serviceType?.value) {
            errors["serviceType"] = "Service type is required"
        }
        if (!inputData.tenureType?.value) {
            errors["tenureType"] = "Tenure type is required"
        }
        if (!inputData.catalog?.value) {
            errors["catalog"] = "Catalog is required"
        }
        if (!inputData.productionStartDate) {
            errors["productionStartDate"] = "Production start date is required"
        }
        if (!inputData.productionEndDate) {
            errors["productionEndDate"] = "Production end date is required"
        }
        if (!inputData.sellingPrice) {
            errors["sellingPrice"] = "Price is required"
        }
        setErrors(errors)
        return !Object.keys(errors).length > 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isValid()) {
            try {
                if (inputData.serviceId) {
                    await updateCatalogService(inputData.serviceId, {
                        ...inputData, productCatalog: inputData.catalog.value
                    });
                } else {
                    await saveCatalogService({
                        ...inputData, productCatalog: inputData.catalog.value
                    });
                }
                router.push("/farmer/service");
                router.refresh();
            } catch (e) {
                console.log(e)
            }
        }
    }

    return (<fieldset>
            <div className="form-card">
                <div className="row">
                    <div className="mb-3 col-md-4">
                        <label htmlFor="assignUser">Service Type <span className="star">*</span></label>
                        <Select
                            isDisabled={isViewOnly}
                            options={serviceType}
                            isMulti={false}
                            classNamePrefix="react-select"
                            onChange={(e) => handleSelect(e, 'serviceType')}
                            value={inputData.serviceType || {}}
                        />
                        <p className="field-error">{errors.serviceType}</p>
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="assignUser">Tenure Type <span className="star">*</span></label>
                        <Select
                            isDisabled={isViewOnly}
                            options={tenureType}
                            isMulti={false}
                            classNamePrefix="react-select"
                            onChange={(e) => handleSelect(e, 'tenureType')}
                            value={inputData.tenureType || {}}
                        />
                        <p className="field-error">{errors.tenureType}</p>
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="assignUser">Select Catalog<span className="star">*</span></label>
                        <Select
                            isDisabled={isViewOnly}
                            options={catalogs}
                            isMulti={false}
                            classNamePrefix="react-select"
                            onChange={(e) => handleSelect(e, 'catalog')}
                            value={inputData.catalog || {}}
                        />
                        <p className="field-error">{errors.catalog}</p>
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="title">
                            Approximate Production Start Date<span className="star">*</span>
                        </label>
                        <input
                            readOnly={isViewOnly}
                            type="date"
                            id="productionStartDate"
                            className="form-control"
                            name="productionStartDate"
                            value={inputData.productionStartDate || ''}
                            onChange={handleInputChange}
                        />
                        <p className="field-error">{errors.productionStartDate}</p>
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="title">
                            Approximate Production End Date<span className="star">*</span>
                        </label>
                        <input
                            readOnly={isViewOnly}
                            type="date"
                            id="productionEndDate"
                            className="form-control"
                            name="productionEndDate"
                            value={inputData.productionEndDate || ''}
                            onChange={handleInputChange}
                        />
                        <p className="field-error">{errors.productionEndDate}</p>
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="productCategory">Product Category<span className="star">*</span></label>
                        <Select
                            isDisabled={readOnly}
                            options={[]}
                            isMulti={false}
                            classNamePrefix="react-select"
                            onChange={(e) => handleSelect(e, 'productCategory')}
                            value={inputData.productCategory || {}}
                        />
                        <p className="field-error">{errors.productCategory}</p>
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="unitType">Production Unit<span className="star">*</span></label>
                        <Select
                            isDisabled={readOnly}
                            options={productionUnits}
                            isMulti={false}
                            classNamePrefix="react-select"
                            onChange={(e) => handleSelect(e, 'unitType')}
                            value={inputData.unitType || {}}
                        />
                        <p className="field-error">{errors.unitType}</p>
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="totalProduction">
                            Approximate Total Production<span className="star">*</span>
                        </label>
                        <input
                            readOnly={readOnly}
                            type="text"
                            id="totalProduction"
                            className="form-control"
                            name="totalProduction"
                            value={inputData.totalProduction || ''}
                            onChange={handleInputChange}
                        />
                        <p className="field-error">{errors.totalProduction}</p>
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="totalCost">
                            Approximate Total Cost<span className="star">*</span>
                        </label>
                        <input
                            readOnly={readOnly}
                            type="text"
                            id="totalCost"
                            className="form-control"
                            name="totalCost"
                            value={inputData.totalCost || ''}
                            onChange={handleInputChange}
                        />
                        <p className="field-error">{errors.totalCost}</p>
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="moq">
                            MOQ<span className="star">*</span>
                        </label>
                        <input
                            readOnly={readOnly}
                            type="text"
                            id="moq"
                            className="form-control"
                            name="moq"
                            value={inputData.moq || ''}
                            onChange={handleInputChange}
                        />
                        <p className="field-error">{errors.moq}</p>
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="unitCost">
                            Approximate Per Unit Cost<span className="star">*</span>
                        </label>
                        <input
                            readOnly={readOnly}
                            type="text"
                            id="unitCost"
                            className="form-control"
                            name="unitCost"
                            value={inputData.unitCost || ''}
                            onChange={handleInputChange}
                        />
                        <p className="field-error">{errors.unitCost}</p>
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="title">
                            Per Unit Selling Price<span className="star">*</span>
                        </label>
                        <input
                            type="text"
                            id="sellingPrice"
                            className="form-control"
                            name="sellingPrice"
                            value={inputData.sellingPrice || ''}
                            onChange={handleInputChange}
                            readOnly={isViewOnly}
                        />
                        <p className="field-error">{errors.interestValue}</p>
                    </div>
                    <div className="mb-3 col-md-12">
                        <EditorComponent
                            disabled={isViewOnly}
                            label={'Description'}
                            value={inputData.description}
                            onChange={onChangeEditor}
                        />
                    </div>
                </div>
            </div>
            {!isViewOnly && <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>}
        </fieldset>)
}

export default ServiceInformation