import React from "react";
import s from "./Profile.module.css";
import Ava from "./Ava/Ava";
import Description from "./Description/Description";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={s.content}>

            <div>
                <img
                    src="./header.jpg"
                    alt="image"/>
            </div>
            <Ava
                savePhoto={props.savePhoto}
                isOwner={props.isOwner}
                profile={props.profile}
            />
            <Description
                profile={props.profile}
                saveProfile={props.saveProfile}
                status={props.status}
                updateStatus={props.updateStatus}
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}


            />
            <MyPostsContainer profile={props.profile}/>
        </div>
    )
}

export default Profile;
