import React from 'react';

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