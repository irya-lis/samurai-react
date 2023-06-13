import s from "./Description.module.css";
import React from "react";

const ProfileData = ({ isOwner, goToEditMode, ...props}) => {

    return (
        <div className={s.parameters}>
            <div>
                {isOwner && <div>
                    <button onClick={goToEditMode}>edit</button>
                </div>}
                <div>
                    <b>Full name:</b> {props.profile.fullName}
                </div>
                <div>
                    <b>Looking for a job:</b> {props.profile.lookingForAJob ? 'yes' : 'no'}
                </div>
                {props.profile.lookingForAJob &&
                <div>
                    <b>My professional skills:</b> {props.profile.lookingForAJobDescription}
                </div>
                }
                <div>
                    <b>About me:</b> {props.profile.aboutMe}
                </div>
                <div >
                    <b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
                    return <Contact  key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
                })}
                </div>
            </div>
        </div>
    )
}


const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}:</b> {contactValue}</div>
}

export default ProfileData;