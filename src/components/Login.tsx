import React, { SyntheticEvent } from 'react';
import { AuthService } from '../services/AuthService';
import { User } from '../models/Model';
import history from '../utilities/history'

interface LoginProps {
    authService: AuthService,
    setUser:(user: User) => void
}

interface LoginState {
    userName: string,
    password: string,
    loginAttempted: boolean,
    loginSuccessful: boolean
}

export default class Login extends React.Component<LoginProps, LoginState> {

    state: LoginState = {
        userName: '',
        password: '',
        loginAttempted: false,
        loginSuccessful: false
    }

    private async handleSubmit (e: SyntheticEvent) {
        e.preventDefault()
        this.setState({loginAttempted: true})

        const result = await this.props.authService.login(
            this.state.userName, this.state.password
        )
        
        if (result) {
            this.setState({loginSuccessful: true})
            this.props.setUser(result)
            history.push('/profile')
        } else {
            this.setState({loginSuccessful: false})
        }

    }


    render() {
        return (
            <section className="login">
                <h2>Please login</h2>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label htmlFor="userName">Username:</label>
                    <input 
                        value={this.state.userName} 
                        onChange={(e) => this.setState({userName: e.target.value})}
                        type="text" id="userName" /><br/>
                    <label htmlFor="password">Password:</label>
                    <input 
                        value={this.state.password} 
                        onChange={(e) => this.setState({password: e.target.value})}
                        type="text" name="" id="password" /><br/>
                    <input 
                        type="submit" value="Login" />
                </form>
                {this.state.loginAttempted && <p>{this.state.loginSuccessful ? 'Login successful' : 'Login failed'}</p>}
            </section>
        )
    }
}