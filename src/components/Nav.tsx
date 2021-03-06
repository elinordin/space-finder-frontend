import React from 'react';
import { User } from '../models/Model';
import { Link } from 'react-router-dom'

interface NavProps {user: User | undefined}

const styles = {
    nav: {
        backgroundColor: 'black',
        color: 'white',
        padding: '30px 8%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    left: {
        width: '200px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    link: {
        textDecoration: 'none',
        color: 'white',
    }
}

export default class Nav extends React.Component<NavProps> {

    render() {
        return (
            <nav style={styles.nav}>
                <div style={styles.left}>
                    <Link to='/' data-test-id='home' style={styles.link}>Home</Link>
                    <Link to='/profile' data-test-id='profile' style={styles.link}>Profile</Link>      
                    <Link to='/spaces' data-test-id='spaces' style={styles.link}>Spaces</Link>      
                </div>
                <Link to='/login' data-test-id='login' style={styles.link}>{this.props.user? 'Logout' : 'Login'}</Link>
            </nav>
        )
    }
}

