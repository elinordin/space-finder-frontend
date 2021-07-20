import React from 'react';
import { User } from '../models/Model';
import { Link } from 'react-router-dom'

interface NavProps {user: User | undefined}

export default class Nav extends React.Component<NavProps> {

    render() {
        return (
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/profile'>Profile</Link>
                <Link to="/login">{this.props.user? 'Login' : 'Logout'}</Link>
            </nav>
        )
    }
}