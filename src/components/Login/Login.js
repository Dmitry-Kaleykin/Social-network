import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { maxLength40, maxLength20, minLength6, required } from '../../assets/validators/FieldLevelValidationForm';
import { FormComponent } from '.././common/FormControl/Forms';
import { connect } from 'react-redux';
import { loginThunkCreator } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import s from './Login.module.css';

const Input = FormComponent("input");

function LoginForm (props) {
    return (
        <form onSubmit={props.handleSubmit}>
                <div>
                    <Field label={"Email"} 
                           name={"email"} 
                           component={Input}
                           validate={[maxLength40, minLength6, required]} />
                </div>
                <div>
                    <Field label={"Password"} 
                           name={"password"} 
                           component={Input}
                           validate={[maxLength20, minLength6, required]}
                           type={"password"} />
                </div>
                <div>
                    <Field type={"checkbox"}
                           name={"rememberMe"} 
                           component={Input} /> Remember me
                </div>
                <div className={s.summary_error}>
                    {props.error}
                </div>
                <div>
                    <button component={"button"}>Login</button>
                </div>
            </form>
    )
}

const ReduxLoginForm = reduxForm({form: "login"})(LoginForm);

function Login (props) {

    const onSubmit = (formData) => {
        props.loginThunkCreator(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to="/Profile" />
    }

    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit} />
        </div>
    )
}

function mapStateToProps (state) {
    return ({
        isAuth: state.header.isAuth,
    })
}

export default connect(mapStateToProps, {loginThunkCreator} )(Login);