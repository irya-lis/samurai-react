import React, {useState} from "react";
import s from "./Description.module.css"
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import ProfileData from "./ProfileData";
import Preloader from "../../common/Preloader/Preloader";

const Description = ({status, updateStatus, isOwner, saveProfile, ...props}) => {
    const [editMode, setEditMode] = useState(false);

    if(!props.profile) {
        return <Preloader/>
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )
    }
    return (
        <div className={s.description}>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            {editMode
                ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/>
                : <ProfileData goToEditMode={() => {
                    setEditMode(true)
                }} profile={props.profile} isOwner={isOwner}/>}
        </div>
    )
}

export default Description;