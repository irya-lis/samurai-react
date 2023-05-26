import React from "react";
import s from "./Description.module.css"
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const Description = (props) => {

    return (
        <div className={s.description}>
            <ProfileStatus status={props.status}  updateStatus={props.updateStatus}/>
            <div className={s.parameters}>
                <div>Irina Rakova</div>
                <div>26 year</div>
                <div>Kazan</div>
                <div>Married to Sergey Rakov</div>

            </div>
            {/*<div>{props.profile.aboutMe}</div>*/}
            {/*<div>{props.profile.contacts.facebook}</div>*/}
            {/*<div>{props.profile.contacts.website}</div>*/}
            {/*<div>{props.profile.contacts.vk}</div>*/}
            {/*<div>{props.profile.contacts.twitter}</div>*/}
            {/*<div>{props.profile.contacts.instagram}</div>*/}
            {/*<div>{props.profile.contacts.youtube}</div>*/}
            {/*<div>{props.profile.contacts.github}</div>*/}
            {/*<div>{props.profile.contacts.mainLink}</div>*/}
        </div>
    )
}

export default Description;