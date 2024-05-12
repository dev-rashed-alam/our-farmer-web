"use client"

import React from "react";
import "@/public/styles/farmer/VerificationCard.css"
import {getUserInfo} from "@/app/config/utils";
import {updateCatalogByStatus} from "@/app/service/catalogService";
import {useRouter} from "next/navigation";
import Image from 'next/image'

const VerificationStatus = ({handleNext, catalogResponse}) => {
    const router = useRouter()

    const handleSubmit = async (type) => {
        const {data} = await updateCatalogByStatus(type, catalogResponse.id)
        if (type === "APPROVE") {
            if (data.id) {
                handleNext()
            }
        } else {
            router.push("/admin/catalog")
        }
    }

    return (
        <section className="verification">
            <div className="box1 box">
                <div className="content">
                    <div className="image">
                        <img src="https://i.postimg.cc/bryMmCQB/profile-image.jpg" alt="Profile Image"/>
                    </div>
                    <div className="level">
                        <p>Verifier Identification</p>
                    </div>
                    <div className="text">
                        <p className="name">{catalogResponse?.superVisor?.firstName + " " + catalogResponse?.superVisor?.lastName}</p>
                        <p className="job_title">Agricultural Policy Analyst</p>
                        <p className="job_discription">
                            As an Agricultural Verification Officer, responsible for validating user-provided
                            information, I conduct on-site visits to analyze land conditions, ensuring accuracy and
                            feasibility for crop production.
                        </p>
                    </div>
                    {getUserInfo().id === catalogResponse?.superVisor?.id && <div className="button">
                        <div>
                            <button onClick={() => handleSubmit("APPROVE")} className="message" type="button">Approve
                            </button>
                        </div>
                        <div>
                            <button onClick={() => handleSubmit("REJECT")} className="connect" type="button">Reject
                            </button>
                        </div>
                    </div>}
                </div>
            </div>
        </section>
    )
}

export default VerificationStatus