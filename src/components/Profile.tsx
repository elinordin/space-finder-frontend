import React from 'react';
import { Link } from 'react-router-dom';
import { User, UserAttribute } from '../models/Model';
import { AuthService } from '../services/AuthService';

interface ProfileState {
    userAttributes: UserAttribute[]
}
interface ProfileProps {
    authService: AuthService,
    user: User | undefined
}

export default class Profile extends React.Component<ProfileProps, ProfileState> {

    state: ProfileState = {
        userAttributes: []
    }

    async componentDidMount(){
        const attributes = await this.props.authService.getUserAttributes()

        this.setState({userAttributes: attributes})
    }

    render() {
        return (
            <section>
                {this.props.user? 
                    <div>
                        <h2>Here are the attributes</h2>
                        <ul>
                            {this.state.userAttributes.map((attribute) => (
                                <li key={attribute.key}>{attribute.key} : {attribute.value}</li>
                            ))}
                        </ul>
                    </div>
                    : 
                    <div>
                        <p>Please login to see profile details</p>
                        <Link to='/login'>Go to login</Link>
                    </div>
                }
            </section>
        )
    }
}