import React from "react";
import s from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


const Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {

    return (
        <div className={s.users}>
            <Paginator
                currentPage={currentPage}
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                onPageChanged={onPageChanged}
            />

            <h2>Users</h2>
            <div>
                {users.map(user =>
                    <User
                        user={user}
                        key={user.id}
                        followingInProgress={props.followingInProgress}
                        unfollow={props.unfollow}
                        follow={props.follow}
                    />
                )}
            </div>
        </div>
    )
}

export default Users;