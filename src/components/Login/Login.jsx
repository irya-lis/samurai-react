import React from "react";
import s from "./Login.module.css";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {login} from "../../redux/auth-reducer";


const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit} >
            <div className={s.email}>
                <Field component={Input}
                       name={"email"}
                       placeholder={"Email"}
                       validate={[required]}
                />
            </div>
            <div className={s.password}>
                <Field component={Input}
                       name={"password"}
                       placeholder={"Password"}
                       validate={[required]}
                       type={"password"}
                />
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"}/>
                remember me
            </div>
            {error && <span className={s.formSummaryError}>
                {error}
            </span>
            }
            <div>
                <button>Login</button>
            </div>
        </form>

    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to={"/profile"}/>
    }
    return (
        <div className={s.login}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);