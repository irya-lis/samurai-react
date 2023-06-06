import React from "react";
import s from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

const Dialog = (props) => {


    let path = "/dialogs/" + props.id;

    return (
            < div className={s.dialog}>
            <NavLink to={path}>
                <img className={s.img} src="/src/images/ava_user.jpg" alt="ava user"/>
                {props.name}
            </NavLink>
            </div>
    )
}

export default Dialog;
