'use client'

import React, {useState} from 'react';
import '@/public/styles/farmer/Form.css';
import {toast} from "react-toastify";
import {createNewProduct} from "@/app/service/productService";
import {Row, Col} from "react-bootstrap";
import {redirect} from "next/navigation";
import {isValidFileType} from "@/app/config/utils";

const Page = () => {
    const [productImg, setProductImg] = useState(null);
    const [imageError, setImageError] = useState(false)
    const [inputData, setInputData] = React.useState({
        name: '',
        description: '',
        price: '',
        stock: '',
        status: ''
    });

    const [errors, setErrors] = React.useState({});
    const handleChange = (e) => {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value
        });
    }
    const isValidForm = () => {
        const errorsObj = {};
        if (!inputData.name) {
            errorsObj.name = 'Product name is required';
        }
        if (!inputData.description) {
            errorsObj.description = 'Product description is required';
        }
        if (!inputData.price) {
            errorsObj.price = 'Product price is required';
        }
        if (!inputData.stock) {
            errorsObj.stock = 'Product stock is required';
        }
        if (!inputData.status) {
            errorsObj.status = 'Product status is required';
        }

        setErrors(errorsObj);
        return Object.keys(errorsObj).length === 0;
    };

    const uploadProductImage = (evt) => {
        evt.preventDefault();
        const {files} = evt.target;
        if (isValidFileType(['image/jpeg', 'image/png'], files[0].type)) {
            const formData = new FormData();
            formData.append("myFile", files[0], files[0].name);
            setProductImg(files[0]);
            setImageError(false)
        } else {
            setImageError(true)
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();


        const reqData = {
            name: inputData.name,
            description: inputData.description,
            price: inputData.price,
            stock: inputData.stock,
            status: inputData.status,
            category: inputData.category,
            discount: inputData.discount,
            discountType: inputData.discountType,
            isFeatured: inputData.isFeatured,
            isTrending: inputData.isTrending,
            image: productImg || ''
        }
        if (isValidForm()) {
            const product = createNewProduct(reqData).then((res) => {
                toast.success('Product Created successfully');
                redirect('/admin/product');
            }).catch((error) => {
                console.log(error);
            });
        }
    }
    return (
        <div className="form-card product-create-form">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="name">Product Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            placeholder="Product Name"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="price">Price</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            className="form-control"
                            placeholder="Price"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="stock">Stock</label>
                        <input
                            type="number"
                            id="stock"
                            name="stock"
                            className="form-control"
                            placeholder="Stock"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="status">Status</label>
                        <select
                            id="status"
                            name="status"
                            className="form-control"
                            onChange={handleChange}
                        >
                            <option value="">Select Status</option>
                            <option value="1">Active</option>
                            <option value="0">Inactive</option>
                        </select>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="category">Category</label>
                        <select
                            id="category"
                            name="category"
                            className="form-control"
                            onChange={handleChange}
                        >
                            <option value="661a9e4b5fb36577e4512973">Rice</option>
                            <option value="664a1f274e78653421c2164c">Vegetables</option>
                            <option value="664a1f714e78653421c23f15">Fruits</option>
                        </select>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="discount">Discount</label>
                        <input
                            type="number"
                            id="discount"
                            name="discount"
                            className="form-control"
                            placeholder="Discount"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="discountType">Discount Type</label>
                        <select
                            id="discountType"
                            name="discountType"
                            className="form-control"
                            onChange={handleChange}
                        >
                            <option value="">Select Discount Type</option>
                            <option value="PERCENTAGE">Percentage</option>
                            <option value="FIXED">Fixed</option>
                        </select>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="isFeatured">Is Featured</label>
                        <select
                            id="isFeatured"
                            name="isFeatured"
                            className="form-control"
                            onChange={handleChange}
                        >
                            <option value="">Select</option>
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </select>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="isTrending">Is Trending</label>
                        <select
                            id="isTrending"
                            name="isTrending"
                            className="form-control"
                            onChange={handleChange}
                        >
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </select>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="image">Image</label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            placeholder="Upload Image"
                            className="form-control"
                            onChange={uploadProductImage}
                        />
                    </div>
                    <div className="col-md-12 mb-3">
                        <div className="form-group mt-2">
                            <label htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                rows={8}
                                className="form-control"
                                placeholder="Description"
                                onChange={handleChange}
                            >
                            </textarea>
                        </div>
                    </div>
                    <div className="col-md-12 text-center">
                        <button type="submit" className="btn btn-primary">Create Product</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Page;
