import React from "react";
import s from "./Description.module.css"
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const Description = ({status, updateStatus}) => {

    return (
        <div className={s.description}>
            <ProfileStatusWithHooks status={status}  updateStatus={updateStatus}/>
            <div className={s.parameters}>
                <div>Irina Rakova</div>
                <div>26 year</div>
                <div>Kazan</div>
                <div>Married to Sergey Rakov</div>
            </div>
        </div>
    )
}

export default Description;