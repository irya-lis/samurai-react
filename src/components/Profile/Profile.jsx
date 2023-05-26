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
                    src="/header.jpg"
                    alt="image"/>
            </div>
            <Ava profile={props.profile}/>
            <Description profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer profile={props.profile}/>
        </div>
    )
}

export default Profile;
