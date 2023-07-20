import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as fromReducer} from 'redux-form';
import appReducer from "./app-reducer";


let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: fromReducer,
    app: appReducer
})

type RootReducerType = typeof rootReducers;
export type AppStateType = ReturnType<RootReducerType>

// noinspection TypeScriptUnresolvedVariable
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(rootReducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
// noinspection TypeScriptUnresolvedVariable
window.__store__ = store

export default store;
