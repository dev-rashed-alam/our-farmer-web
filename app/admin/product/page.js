import React from 'react';
import '@/public/styles/farmer/Table.css';
import Link from "next/link"
import {FaEdit, FaEye} from "react-icons/fa";
import {changeDateFormat} from "@/app/config/utils";
import {fetchAllProducts} from "@/app/service/productService";
import {Row, Col} from "react-bootstrap";
import DeleteCatalog from "@/app/admin/catalog/components/DeleteCatalog";

const Page = async () => {
    const productResponse = await fetchAllProducts()

    const renderProducts = () => {
        return productResponse?.data?.map((product) => {
            return (<tr className="crud-table__row" key={`order_${product.id}`}>
                <td className="crud-table__cell">
                    {product.name}
                </td>
                <td className="crud-table__cell">
                    {product.description}
                </td>
                <td className="crud-table__cell">
                    {product.price}
                </td>
                <td className="crud-table__cell">
                    {product.stock}
                </td>
                <td className="crud-table__cell">
                    {product.status ? "Active" : "Inactive"}
                </td>
                <td className="crud-table__cell">
                    {changeDateFormat(product.createdAt, "YYYY-MM-DD", "DD MMM, YYYY")}
                </td>
                <td className="crud-table__cell">
                     <span className="admin-icons">
                        <Link
                            href={`/admin/product/show/${product.id}?type=view`}
                            className="clickable"
                        >
                            <FaEye/>
                        </Link>
                         &nbsp;
                        <Link
                            href={`/admin/product/show/${product.id}?type=view`}
                            className="clickable"
                        >
                            <FaEdit/>
                        </Link>
                         &nbsp;
                        <Link
                            href={`/admin/product/show/${product.id}?type=view`}
                            className="clickable"
                        >
                             <DeleteCatalog catalog={product}/>
                        </Link>
                    </span>
                </td>
            </tr>);
        });
    };

    return (<>
        <Row>
            <div className="d-flex justify-content-end mb-3">
                <Link
                    href="/admin/product/create"
                    className="btn btn-primary custom-btn"
                >
                    Create New Product
                </Link>
            </div>
        </Row>
        <table className="crud-table">
            <thead className="crud-table__header">
            <tr className="crud-table__row">
                <th className="crud-table__header-cell">Name</th>
                <th className="crud-table__header-cell">Description</th>
                <th className="crud-table__header-cell">Price</th>
                <th className="crud-table__header-cell">Stock</th>
                <th className="crud-table__header-cell">Status</th>
                <th className="crud-table__header-cell">Created At</th>
                <th className="crud-table__header-cell">Actions</th>
            </tr>
            </thead>
            <tbody className="crud-table__body">
            {renderProducts()}
            </tbody>
        </table>
    </>);
};

export default Page;
