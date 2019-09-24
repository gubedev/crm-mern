import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as alertsActions from '../../store/actions/alerts';
import * as accountActions from '../../store/actions/account';

import { ERROR } from '../../constants/notificationType';

import CustomTextInput from '../../components/Inputs/CustomTextInput';
import CustomPasswordInput from '../../components/Inputs/CustomPasswordInput';

import accountService from '../../services/accountService';

const validate = values => {
    const error = {};

    if (!values.username) {
        error.username = "username is required";
    }

    if (!values.password) {
        error.password = "password is required";
    }

    return error;
};

class SignIn extends Component {

    componentWillMount() {
        document.body.style.overflowY = "hidden";
        document.body.style.overflowX = "hidden";
    }
    
    componentDidMount() {
        this.props.hideToast();
        this.doSignIn = this.doSignIn.bind(this);
        accountService.logout();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isAuthenticated !== this.props.isAuthenticated) {
            if (this.props.isAuthenticated) {
                this.props.history.push("/");
            }
        }

        if (this.props.loginFailed) {
            this.props.showToast({
                message: this.props.loginError,
                variant: ERROR
            });

            this.hideToastTimer = setTimeout(() => this.hideToast(), 1000)
        } 
    }

    hideToast() {
        this.props.hideToast();
        clearTimeout(this.hideToastTimer);
    }

    doSignIn(event) {
        this.props.signin({
            username: event.username,
            password: event.password
        });
    }

    render() {
        const { handleSubmit, submitting } = this.props;
        return (
            <div className="row sign-in-wrapper">
                <div className="col-lg-8 text-center">
                    <img src='http://placehold.it/512x512' className="img-fluid" alt="" width="50%" />
                </div>
                <div id="sign-in-form-container" className="col-md-4 col-sm-12">
                    <h1 className="pb-3">Complete your user credentials</h1>
                    <br />
                    <form name="form" onSubmit={handleSubmit(this.doSignIn)} className="px-md-5">
                        <div className="form-group" >
                            <label>Username</label>
                            <Field type="text" name="username" component={CustomTextInput} />
                        </div>
                        <div className="form-group" >
                            <label>Password</label>
                            <Field type="password" name="password" component={CustomPasswordInput} />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary col-md-12" disabled={submitting}>Signin</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ account }) {
    return {
        account: account.auth.data,
        isAuthenticated: account.auth.isAuthenticated,
        loginFailed: account.auth.loginFailed,
        loginError: account.auth.loginError
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        signin: accountActions.signin,
        showToast: alertsActions.showToast,
        hideToast: alertsActions.hideToast
    }, dispatch);
}

const signInReduxForm = reduxForm({ form: 'signInForm', validate })(SignIn);

export default connect(mapStateToProps, mapDispatchToProps)(signInReduxForm);
