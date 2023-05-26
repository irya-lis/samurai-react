import React from "react";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: "Hello", likesCount: 0},
                {id: 2, post: "Hi", likesCount: 0},
                {id: 3, post: "This is my first post", likesCount: 0}
            ],

            newPostText: "",
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: "Dmitriy"},
                {id: 2, name: "Anna"},
                {id: 3, name: 'Pavel'}
            ],

            messages: [
                {id: 1, message: 'I am cucumber'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'What do you'}
            ],

            newMessageText: "",
        },
        sidebar: {},

    },


    getState() {
        return this._state;
    },

    _callSubscribe() {
        console.log("State changed");
    },


    subscribe(observer) {
        this._callSubscribe(observer);
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscribe(this._state);
    }
}
export default store;
window.store = store;
