import React from "react";
import s from "./Ava.module.css";
import Preloader from "../../common/Preloader/Preloader";

const Ava = ({profile}) => {

    if(!profile) {
        return <Preloader/>
    }

    return (
        <div className={s.ava} >
            <img src={profile.photos.large !== null ? profile.photos.large : "./ava_user2.jpg" } alt="ava"/>
        </div>
    )
}

export default Ava;