import React from "react";
import s from "./Users.module.css";
import {NavLink} from "react-router-dom";


const User = ({user, followingInProgress, unfollow, follow}) => {

    return (
        <div className={s.user}>
            <NavLink to={'/profile' + user.id}>
                <img src={user.photos.small || "./ava_user2.jpg"}/>
            </NavLink>
            <div className={s.button}>
                {user.followed
                    ? <button disabled={followingInProgress
                        .some(id => id === user.id)}
                              onClick={() => {
                                  unfollow(user.id)
                              }}>Unfollow</button>
                    :
                    <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                follow(user.id)
                            }}>Follow</button>}

            </div>

            <div className={s.content}>
                <div className={s.left}>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
                <div className={s.right}>
                    <div>{"user.location"}</div>
                    <div>{"user.city"}</div>
                </div>
            </div>
        </div>

    )
}

export default User;