import React from "react";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {onAddPostActionCreator} from "../../../redux/profile-reducer";


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(onAddPostActionCreator(newPostText));
        },
}}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
