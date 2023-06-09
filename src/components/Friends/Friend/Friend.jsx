import React from "react";
import s from "./Friend.module.css";

const Friend = (props) => {
    return (
        <div className={s.img}>
            <img src="./ava_user.jpg" alt="ava"/> <span className={s.user}>Anna</span>
            <img src="./ava_user.jpg" alt="ava"/> <span className={s.user}>Inga</span>
            <img src="./ava_user.jpg" alt="ava"/> <span className={s.user}>Andrey</span>
        </div>
    )

}

export default Friend;
