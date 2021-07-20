import React from 'react';
import { AuthService } from '../services/AuthService';

interface LoginProps {
    authService: AuthService
}

interface LoginState {
    userName: string,
    password: string,
    loginAttempted: boolean,
    loginSuccessful: boolean
}

export default class Login extends React.Component<LoginProps, LoginState> {

    //The initial value of the LoginState
    state: LoginState = {
        userName: '',
        password: '',
        loginAttempted: false,
        loginSuccessful: false
    }

    render() {
        return (
            <div>
                Login
            </div>
        )
    }
}