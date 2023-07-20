import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";
const DELETE_POST = "DELETE-POST";
const SAVE_PHOTO_SUCCESS = "SAVE-PHOTO-SUCCESS";


let initialState = {
    posts: [
        {id: 1, post: "Hello", likesCount: 0},
        {id: 2, post: "Hi", likesCount: 0},
        {id: 3, post: "This is my first post", likesCount: 0}
    ] as Array<PostType>,

    profile: null as ProfileType | null,
    status: "",
    newPostText: ""


}

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {

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

        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: {...state.profile.photos, large: action.photos.large}}
            }
        }

        default :
            return state;
    }
}

type OnAddPostActionCreatorType = {
    type: typeof ADD_POST,
    newPostText: string
}

type SetUserProfileType = {
    type: typeof SET_USER_PROFILE,
    profile: string
}

type SetStatusType = {
    type: typeof SET_STATUS,
    status: string
}

type DeletePostType = {
    type: typeof DELETE_POST,
    postId: number
}

type SavePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: PhotosType
}

export const onAddPostActionCreator = (newPostText: string): OnAddPostActionCreatorType => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile: string): SetUserProfileType => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status: string): SetStatusType => ({type: SET_STATUS, status});
export const deletePost = (postId: number): DeletePostType => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => ({type: SAVE_PHOTO_SUCCESS, photos})


export const getUserProfile = (userId) => async (dispatch) => {
    const response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));

}

export const getStatus = (userId: number) => async (dispatch: any) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (file) => async (dispatch: any) => {
    const response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0])
    }
}

export default profileReducer;
