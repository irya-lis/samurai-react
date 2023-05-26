import React from "react";
import s from "./Ava.module.css";
import Preloader from "../../common/Preloader/Preloader";

const Ava = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.ava}>
            <img src={props.profile.photos.large !== null ? props.profile.photos.large : "./ava_user2.jpg" } alt="ava"/>
        </div>
    )
}

export default Ava;