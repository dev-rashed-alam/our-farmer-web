import React from "react";
import "@/public/styles/farmer/VerificationCard.css"

const VerificationStatus = ({handleNext, supervisorInfo}) => {
    console.log(supervisorInfo)
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
                        <p className="name">{supervisorInfo?.firstName + " " + supervisorInfo?.lastName}</p>
                        <p className="job_title">Agricultural Policy Analyst</p>
                        <p className="job_discription">
                            As an Agricultural Verification Officer, responsible for validating user-provided
                            information, I conduct on-site visits to analyze land conditions, ensuring accuracy and
                            feasibility for crop production.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VerificationStatus