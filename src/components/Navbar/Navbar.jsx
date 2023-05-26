import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import Friend from "../Friends/Friend/Friend";

const Navbar = () => {
    const setActive = ({isActive}) => isActive ? `${s.activeLink}` : '';


    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={setActive}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={setActive}>Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={setActive}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={setActive}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={setActive}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" className={setActive}>Users</NavLink>
            </div>
            <div className={s.item + " " + s.friends}>
                <NavLink to="/friends" className={setActive}>
                    FRIENDS
                    <Friend/>
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;
