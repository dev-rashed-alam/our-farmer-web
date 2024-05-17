import React from "react";
import "@/public/styles/common/Profile.css"
import {MdOutlineMail} from "react-icons/md";
import {FaMobile} from "react-icons/fa";
import {findUserById} from "@/app/service/userService";
import Link from "next/link";
import Image from "next/image";
import ProfileImage from "@/public/images/profile.jpeg";
import UserActionsUpdate from "@/app/admin/user/components/UserActionsUpdate";

const ProfileView = async ({userId}) => {

    const {data} = await findUserById(userId);

    const getProfilePic = () => {
        if (data?.avatar !== null) return data?.avatar;
        return ProfileImage;
    };


    return (
        <div className="container">
            <div className="main-body">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <Image className="rounded-circle p-1 bg-primary" src={getProfilePic()}
                                           alt="profile-image" width={110} height={110}/>
                                    <div className="mt-3">
                                        <h4>{data.firstName} {data.lastName}</h4>
                                        <p className="text-muted font-size-sm">{data.address}</p>
                                        <Link href={`/admin/user/edit/${data.id}`}>
                                            <button className="btn btn-outline-primary">Edit</button>
                                        </Link>
                                        <UserActionsUpdate user={data}/>
                                    </div>
                                </div>
                                <hr className="my-4"/>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0 admin-icon">
                                            <MdOutlineMail/>
                                            <span className="text-secondary">Email</span>
                                        </h6>
                                        <span className="text-secondary">{data.email}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0 admin-icon">
                                            <FaMobile/>
                                            <span className="text-secondary">Mobile</span>
                                        </h6>
                                        <span className="text-secondary">{data.phoneNumber}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="d-flex align-items-center mb-3">Product Progress</h5>
                                        <p>Rice</p>
                                        <div className="progress mb-3" style={{height: '5px'}}>
                                            <div className="progress-bar bg-primary" role="progressbar"
                                                 style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0}
                                                 aria-valuemax={100}/>
                                        </div>
                                        <p>Potato</p>
                                        <div className="progress mb-3" style={{height: '5px'}}>
                                            <div className="progress-bar bg-danger" role="progressbar"
                                                 style={{width: '72%'}} aria-valuenow={72} aria-valuemin={0}
                                                 aria-valuemax={100}/>
                                        </div>
                                        <p>White Corn</p>
                                        <div className="progress mb-3" style={{height: '5px'}}>
                                            <div className="progress-bar bg-success" role="progressbar"
                                                 style={{width: '89%'}} aria-valuenow={89} aria-valuemin={0}
                                                 aria-valuemax={100}/>
                                        </div>
                                        <p>Beans</p>
                                        <div className="progress mb-3" style={{height: '5px'}}>
                                            <div className="progress-bar bg-warning" role="progressbar"
                                                 style={{width: '55%'}} aria-valuenow={55} aria-valuemin={0}
                                                 aria-valuemax={100}/>
                                        </div>
                                        <p>Red Rice</p>
                                        <div className="progress" style={{height: '5px'}}>
                                            <div className="progress-bar bg-info" role="progressbar"
                                                 style={{width: '66%'}} aria-valuenow={66} aria-valuemin={0}
                                                 aria-valuemax={100}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileView