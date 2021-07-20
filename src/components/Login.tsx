import React from 'react';
import { AuthService } from '../services/AuthService';

interface LoginProps {
    authService: AuthService
}

export default class Login extends React.Component<LoginProps> {

    render() {
        return (
            <div>
                Login
            </div>
        )
    }
}