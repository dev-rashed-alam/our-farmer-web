import React from "react";
import ProfileView from "@/app/ui/common/ProfileView";

const Profile = ({params}) => {
    return <ProfileView userId={params.id}/>
}

export default Profile