import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";
const DELETE_POST = "DELETE-POST";

let initialState = {
    posts: [
        {id: 1, post: "Hello", likesCount: 0},
        {id: 2, post: "Hi", likesCount: 0},
        {id: 3, post: "This is my first post", likesCount: 0}
    ],

    profile: null,
    status: ""

}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                post: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""

            };
        }

        case SET_USER_PROFILE:
            return {...state, profile: action.profile};

        case SET_STATUS: {
            return {...state, status: action.status};
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)};
        }

        default :
            return state;
    }
}


export const onAddPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId})


export const getUserProfile = (userId) => async (dispatch) => {
    const response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));

}

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export default profileReducer;
