import React from 'react';
import { User } from '../models/Model';

interface NavProps {user: User}

export default class Nav extends React.Component<NavProps> {

    render() {
        return (
            <div>
                Home page
            </div>
        )
    }
}