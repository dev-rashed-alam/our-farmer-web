import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {fetchOrderById} from "@/app/service/orderService";
import {toast} from "react-toastify";
import {changeDateFormat, printApiErrors} from "@/app/config/utils";
import UpdateOrder from "@/app/admin/order/components/UpdateOrder";

const Page = async ({params}) => {
    const {id} = params;
    const orderResponse = await fetchOrderById(id)

    return (
        <div>
            <Container>
                <Row>
                    <Col xs={10}>
                        <h3 >Order Details</h3>
                    </Col>
                    <Col xs={2}>
                        <UpdateOrder order={orderResponse.data}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={7}>
                        <h4 className="common-sytle p-2">Order Items</h4>
                        <table className="table table-bordered">
                            <thead>
                            <tr>
                                <th colSpan={2}>Product</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                orderResponse.data?.orderItems.map((item) => {
                                    return (
                                        <tr key={`order_item_${item.id}`}>
                                            <td><img src={item.image} alt="" width={100} height={100}/></td>
                                            <td>{item.name}</td>
                                            <td>{item.quantity}</td>
                                            <td>{item.price}</td>
                                            <td>{item.quantity * item.price}</td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </Col>
                    <Col xs={5}>
                        <div>
                            <h4 className="common-sytle p-2 text-uppercase">Shipping Address</h4>
                            <p>Address: {orderResponse.data?.address}</p>
                            <p>Phone:  {orderResponse.data?.phone}</p>
                        </div>
                        <div>
                            <h4  className="common-sytle p-2 text-uppercase">Payment Method</h4>
                            <p>Method:  {orderResponse.data?.paymentMethod}</p>
                            <p>Payment Status: {orderResponse.data?.isPaid ? <span className="badge bg-dark text-success">Done</span>: <span className="badge bg-dark text-warning">Pending</span>}</p>
                        </div>
                        <div>
                            <h4 className="common-sytle p-2 text-uppercase">Order Summary</h4>
                            <p>Total Items: {orderResponse.data?.orderItems.length}</p>
                            <p>Total Price: {orderResponse.data?.totalPrice}</p>
                            <p>Order Date:   {changeDateFormat(orderResponse.data?.createdAt, "YYYY-MM-DD", "DD MMM, YYYY")}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Page