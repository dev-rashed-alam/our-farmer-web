import React, {useEffect, useState} from "react";
import Select from "react-select";
import EditorComponent from "@/app/ui/common/editorComponent";
import {findAllCategories, saveCatalogByStage, updateCatalogByStage} from "@/app/service/catalogService";
import {changeDateFormat, productionUnits} from "@/app/config/utils";
import {useSearchParams} from "next/navigation";

const ProductInformation = ({handleNext, areaId, productInfo, setCatalogResponse}) => {
    const [inputData, setInputData] = useState({});
    const [categories, setCategories] = useState([]);
    const [errors, setErrors] = useState({});
    const [readOnly, setReadOnly] = useState(false);
    const searchParams = useSearchParams()
    const pageType = searchParams.get('type')

    useEffect(() => {
        setReadOnly(pageType === "view")
    }, [pageType])

    useEffect(() => {
        if (productInfo) {
            let tmpInput = {
                ...productInfo,
                productCategory: {label: productInfo.productCategory[0].name, value: productInfo.productCategory[0].id},
                farmingStartDate: productInfo.farmingStartDate.split("T")[0],
                farmingEndDate: productInfo.farmingEndDate.split("T")[0],
            }
            setInputData(tmpInput)
        }
    }, [productInfo])

    useEffect(() => {
        (async () => {
            try {
                const {data} = await findAllCategories()
                setCategories(data?.map(item => ({value: item.id, label: item.name})))
            } catch (e) {
                console.log(e)
            }
        })()
    }, [])

    const handleSelect = (data, fieldName) => {
        setInputData((prev) => ({...prev, [fieldName]: data}));
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
        if (!inputData.productTitle) {
            errors["productTitle"] = "Product title is required"
        }
        if (!inputData.productCategory?.value) {
            errors["productCategory"] = "Product category is required"
        }
        if (!inputData.farmingStartDate) {
            errors["farmingStartDate"] = "Farming start date is required"
        }
        if (!inputData.farmingEndDate) {
            errors["farmingEndDate"] = "Farming end date is required"
        }
        if (!inputData.unitType) {
            errors["unitType"] = "Unit type is required"
        }
        if (!inputData.totalProduction) {
            errors["totalProduction"] = "Total production is required"
        }
        if (!inputData.totalCost) {
            errors["totalCost"] = "Total cost is required"
        }
        if (!inputData.moq) {
            errors["moq"] = "MOQ is required"
        }
        if (!inputData.unitCost) {
            errors["unitCost"] = "Unit cost is required"
        }
        setErrors(errors)
        return !Object.keys(errors).length > 0
    }

    const handleSubmit = async () => {
        if (isValid()) {
            try {
                if (!readOnly) {
                    if (productInfo?.id) {
                        const {data} = await updateCatalogByStage({
                            ...inputData,
                            areaInfo: undefined,
                            superVisor: undefined,
                            productCategory: [inputData.productCategory.value]
                        }, 'PRODUCT_INFO', productInfo.id);
                        setCatalogResponse(data)
                    } else {
                        const {data} = await saveCatalogByStage({
                            ...inputData,
                            areaInfo: areaId,
                            productCategory: [inputData.productCategory.value]
                        }, 'PRODUCT_INFO');
                        setCatalogResponse(data)
                    }
                }
                handleNext()
            } catch (e) {
                console.log(e)
            }
        }
    }

    return (
        <fieldset>
            <div className="form-card">
                <h2 className="fs-title">Provide Your Product Information</h2>
                <div className="row">
                    <div className="mb-3 col-md-4">
                        <label htmlFor="productTitle">
                            Product Title<span className="star">*</span>
                        </label>
                        <input
                            readOnly={readOnly}
                            type="text"
                            id="productTitle"
                            className="form-control"
                            name="productTitle"
                            value={inputData.productTitle || ''}
                            onChange={handleInputChange}
                        />
                        <p className="field-error">{errors.productTitle}</p>
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="productCategory">Product Category</label>
                        <Select
                            isDisabled={readOnly}
                            options={categories}
                            isMulti={false}
                            classNamePrefix="react-select"
                            onChange={(e) => handleSelect(e, 'productCategory')}
                            value={inputData.productCategory || {}}
                        />
                        <p className="field-error">{errors.productCategory}</p>
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="title">
                            Approximate Farming Start Date<span className="star">*</span>
                        </label>
                        <input
                            readOnly={readOnly}
                            type="date"
                            id="farmingStartDate"
                            className="form-control"
                            name="farmingStartDate"
                            value={inputData.farmingStartDate || ''}
                            onChange={handleInputChange}
                        />
                        <p className="field-error">{errors.farmingStartDate}</p>
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="title">
                            Approximate Farming End Date<span className="star">*</span>
                        </label>
                        <input
                            readOnly={readOnly}
                            type="date"
                            id="farmingEndDate"
                            className="form-control"
                            name="farmingEndDate"
                            value={inputData.farmingEndDate || ''}
                            onChange={handleInputChange}
                        />
                        <p className="field-error">{errors.farmingEndDate}</p>
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="unitType">Production Unit</label>
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
                className="next btn btn-primary"
            >
                Next Step
            </button>
        </fieldset>
    )
}

export default ProductInformation