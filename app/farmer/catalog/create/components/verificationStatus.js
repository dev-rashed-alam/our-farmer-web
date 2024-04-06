import React from "react";
import "@/public/styles/farmer/VerificationCard.css"

const VerificationStatus = ({handleNext}) => {
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
                        <p className="name">Md. Rashed Alam</p>
                        <p className="job_title">Agricultural Policy Analyst</p>
                        <p className="job_discription">
                            As an Agricultural Verification Officer, responsible for validating user-provided information, I conduct on-site visits to analyze land conditions, ensuring accuracy and feasibility for crop production.
                        </p>
                    </div>
                    <div className="button">
                        <div>
                            <button className="message" type="button">Message</button>
                        </div>
                        <div>
                            <button className="connect" type="button" onClick={handleNext}>Connect</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VerificationStatus