import React from "react";
import s from "./Preloader.module.css";

const Preloader = (props) => {
    return (
        <div className={s.preloader}>
            <img src="./loader.svg"/>
        </div>
    )
}

export default Preloader;