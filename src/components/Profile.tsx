import React from 'react';
import { User } from '../models/Model';

interface ProfileProps {user: User}

export default class Profile extends React.Component<ProfileProps> {

    render() {
        return (
            <div>
                Profile page
            </div>
        )
    }
}