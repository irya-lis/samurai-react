import React from "react";
import s from "./Ava.module.css";
import Preloader from "../../common/Preloader/Preloader";
import {savePhoto} from "../../../redux/profile-reducer";

const Ava = ({isOwner, ...props}) => {

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.ava} >
            <img src={props.profile.photos.large || "./ava_user.jpg" } alt="ava"/>
            {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
        </div>
    )
}

export default Ava;