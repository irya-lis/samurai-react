import React from "react";
import s from "./Users.module.css";
import {NavLink} from "react-router-dom";


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= 20; i++) {
        pages.push(i);
    }

    return (
        <div className={s.users}>
            <div className={s.selected}>
                {
                    pages.map(page => {
                        return <span className={props.currentPage === page && s.selectedPage}
                                     onClick={() => {
                                         props.onPageChanged(page)
                                     }}>{page}</span>
                    })
                }

            </div>
            <h2>Users</h2>

            {props.users.map(user =>
                <div className={s.user} key={user.id}>
                    <NavLink to={"/profile"}>
                        <img src={user.photos.small !== null ? user.photos.small : "./ava_user2.jpg"}/>
                    </NavLink>
                    <div className={s.button}>
                        {user.followed
                            ? <button disabled={props.followingInProgress
                                .some(id => id === user.id)}
                                      onClick={() => {props.unfollow(user.id)}}>Unfollow</button>
                            :
                            <button disabled={props.followingInProgress.some(id => id === user.id)}
                                    onClick={() => {props.follow(user.id)}}>Follow</button>}

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
                </div>)}
        </div>
    )
}

export default Users;