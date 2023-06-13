import React, {Suspense} from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import {Routes, Route, useParams, BrowserRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {lazy} from 'react';
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

// const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
// const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();


    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <Suspense fallback={<div><Preloader/></div>}>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="wrapper-content">
                        <Routes>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/profile" element={<ProfileContainer isMain={true}/>}/>
                            <Route path="/profile/:userId?" element={<ProfileContainer/>}/>
                            <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                            <Route path="/news" element={<News/>}/>
                            <Route path="/music" element={<Music/>}/>
                            <Route path="/settings" element={<Settings/>}/>
                            <Route path="/friends" element={<Friends/>}/>
                            <Route path="/users" element={<UsersContainer/>}/>
                        </Routes>
                    </div>
                </div>
            </Suspense>
        );
    }
}

function withRouter(Children) {
    return (props) => {
        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);


const MainApp = () => {
    return <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default MainApp;
