import React from 'react';

import { User } from '../models/Model'
import { AuthService } from '../services/AuthService'

import Login from './Login'

interface AppState{
  user: User | undefined
}

export default class App extends React.Component<{}, AppState>{

  private authService : AuthService = new AuthService();

  render() {
    return (
      <div className='App'>
        <Login authService={this.authService}/>
      </div>
    )
  }
}
