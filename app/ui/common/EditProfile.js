"use client"
import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import "@/public/styles/common/EditProfile.css";
import ProfileImage from "@/public/images/profile.jpeg";
import {toast} from "react-toastify";
import {
    capitalizeFirstLetter,
    clearStorage,
    filterPostData,
    getErrorMessages,
    isValidFileType
} from "@/app/config/utils";
import Image from "next/image";
import {useParams, useRouter} from "next/navigation";
import {findUserById, updateUserById} from "@/app/service/userService";
import {adminProfile} from "@/app/config/validationSchema";

const Profile = ({tokenStr}) => {
    const [errors, setErrors] = useState({});
    const [profileImg, setProfileImg] = useState(null);
    const [imageError, setImageError] = useState(false)
    const [inputData, setInputData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        address: "",
        password: "",
        confirmPassword: "",
    });
    const router = useRouter();
    const {id} = useParams();

    const uploadProfilePic = (evt) => {
        evt.preventDefault();
        const {files} = evt.target;
        if (isValidFileType(['image/jpeg', 'image/png'], files[0].type)) {
            const formData = new FormData();
            formData.append("myFile", files[0], files[0].name);
            setProfileImg(files[0]);
            setImageError(false)
        } else {
            setImageError(true)
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        if (imageError) return
        const {name, value} = e.target;
        if (name) {
            setInputData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const fetchUserInfo = async () => {
        const {data} = await findUserById(id, tokenStr)
        setInputData((prev) => ({...prev, ...data}));
    }

    useEffect(() => {
        fetchUserInfo()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleProfileUpdate = async () => {
        if (imageError) {
            toast.warning('Only .jpg, .png, .jpeg allowed!')
            return;
        }
        let postData = {...inputData};
        if (profileImg) {
            postData["avatar"] = profileImg;
        }
        adminProfile
            .validate(filterPostData(postData), {abortEarly: false})
            .then(async () => {
                console.log(postData)
                const data = await updateUserById(id, postData)
                clearStorage();
                router.push('/sign-in')
                router.refresh();
            })
            .catch(function (err) {
                setErrors(getErrorMessages(err));
            });
    };

    const getProfilePic = () => {
        if (profileImg !== null) return URL.createObjectURL(profileImg);
        if (inputData.avatar) return inputData.avatar;
        return ProfileImage;
    };

    return (
        <div className="profile-body">
            <Row>
                <Col>
                    <div className="profile-pic">
                        <label className="-label" htmlFor="file">
                            <span className="text-img">Change Image</span>
                        </label>
                        <input
                            id="file"
                            type="file"
                            name="image"
                            onChange={uploadProfilePic}
                            accept="image/*"
                        />
                        <Image src={getProfilePic()} alt="profile-image" width={165} height={165}/>
                        <div className="user-info">
                            <p>Email Address</p>
                            {/*<p>{inputData?.email}</p>*/}
                            <p>dev.rashedalam@gmail.com</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <div className="field-wrapper mt-4">
                    <label htmlFor="firstName" className="col-form-label">
                        First Name
                    </label>
                    <div className="input">
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={inputData.firstName || ""}
                            className={
                                errors && Object.keys(errors).length > 0 && errors["firstName"]
                                    ? "form-control field-error"
                                    : "form-control"
                            }
                            onChange={handleChange}
                        />
                        {errors &&
                            Object.keys(errors).length > 0 &&
                            errors["firstName"] && (
                                <div className="invalid-feedback">
                                    {capitalizeFirstLetter(errors["firstName"])}
                                </div>
                            )}
                    </div>
                </div>
            </Row>
            <Row>
                <div className="field-wrapper">
                    <label htmlFor="lastName">Last Name</label>
                    <div className="input">
                        <input
                            type="text"
                            name="lastName"
                            value={inputData.lastName || ""}
                            id="lastName"
                            className={
                                errors && Object.keys(errors).length > 0 && errors["lastName"]
                                    ? "form-control field-error"
                                    : "form-control"
                            }
                            onChange={handleChange}
                        />
                        {errors &&
                            Object.keys(errors).length > 0 &&
                            errors["lastName"] && (
                                <div className="invalid-feedback">
                                    {capitalizeFirstLetter(errors["lastName"])}
                                </div>
                            )}
                    </div>
                </div>
            </Row>
            <Row>
                <div className="field-wrapper">
                    <label htmlFor="mobileNumber">Mobile Number</label>
                    <div className="input">
                        <input
                            type="text"
                            id="mobileNumber"
                            name="phoneNumber"
                            readOnly={true}
                            value={inputData.phoneNumber || ""}
                            className={
                                errors && Object.keys(errors).length > 0 && errors["phoneNumber"]
                                    ? "form-control field-error"
                                    : "form-control"
                            }
                            onChange={handleChange}
                        />
                        {errors && Object.keys(errors).length > 0 && errors["phoneNumber"] && (
                            <div className="invalid-feedback">
                                {capitalizeFirstLetter(errors["phoneNumber"])}
                            </div>
                        )}
                    </div>
                </div>
            </Row>
            <Row>
                <div className="field-wrapper">
                    <label htmlFor="address">Address</label>
                    <div className="input">
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={inputData.address || ""}
                            className={
                                errors && Object.keys(errors).length > 0 && errors["address"]
                                    ? "form-control field-error"
                                    : "form-control"
                            }
                            onChange={handleChange}
                        />
                        {errors && Object.keys(errors).length > 0 && errors["address"] && (
                            <div className="invalid-feedback">
                                {capitalizeFirstLetter(errors["address"])}
                            </div>
                        )}
                    </div>
                </div>
            </Row>
            <Row>
                <div className="field-wrapper">
                    <label htmlFor="password">New Password</label>
                    <div className="input">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className={
                                errors && Object.keys(errors).length > 0 && errors["password"]
                                    ? "form-control field-error"
                                    : "form-control"
                            }
                            value={inputData.password || ""}
                            onChange={handleChange}
                            autoComplete="new-password"
                        />
                        {errors && Object.keys(errors).length > 0 && errors["password"] && (
                            <div className="invalid-feedback">
                                {capitalizeFirstLetter(errors["password"])}
                            </div>
                        )}
                    </div>
                </div>
            </Row>
            <Row>
                <div className="field-wrapper">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <div className="input">
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={inputData.confirmPassword || ""}
                            onChange={handleChange}
                            className={
                                errors &&
                                Object.keys(errors).length > 0 &&
                                errors["confirmPassword"]
                                    ? "form-control field-error"
                                    : "form-control"
                            }
                        />
                        {errors &&
                            Object.keys(errors).length > 0 &&
                            errors["confirmPassword"] && (
                                <div className="invalid-feedback">
                                    {capitalizeFirstLetter(errors["confirmPassword"])}
                                </div>
                            )}
                    </div>
                </div>
            </Row>
            <Row>
                <button className="btn btn-edit btn-primary" onClick={handleProfileUpdate}>
                    Update profile
                </button>
            </Row>
        </div>
    );
};

export default Profile;
