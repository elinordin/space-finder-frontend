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
            <section className="login">
                <h2>Please login</h2>
                <form>
                    <label htmlFor="userName">Username:</label>
                    <input value={this.state.userName} type="text" id="userName" /><br/>
                    <label htmlFor="password">Password:</label>
                    <input value={this.state.password} type="password" name="" id="password" /><br/>
                    <input type="submit" value="Login" />
                </form>
            </section>
        )
    }
}