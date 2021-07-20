import React from 'react';

import { User } from '../models/Model'
import { AuthService } from '../services/AuthService'

import Login from './Login'

interface AppState{
  user: User | undefined
}

export default class App extends React.Component<{}, AppState>{

  constructor(props: any) {
    super(props)

    this.setUser = this.setUser.bind(this)
  }

  private authService : AuthService = new AuthService();
  
  private setUser(user: User){this.setState({user: user})}

  render() {
    return (
      <div className='App'>
        <Login authService={this.authService} setUser={this.setUser}/>
      </div>
    )
  }
}
