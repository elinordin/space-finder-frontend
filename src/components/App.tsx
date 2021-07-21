import React from 'react';

import { User } from '../models/Model'
import { AuthService } from '../services/AuthService'
import { Router, Route, Switch } from 'react-router-dom';
import history from '../utilities/history';

import Nav from './Nav'
import Home from './Home'
import Login from './Login'
import Profile from './Profile'
import Space from './Space'


interface AppState{
  user: User | undefined
}

export default class App extends React.Component<{}, AppState>{

  constructor(props: any) {
    super(props)
    this.state = {user: undefined}

    this.setUser = this.setUser.bind(this)
  }

  private authService : AuthService = new AuthService();
  
  private setUser(user: User){this.setState({user: user})}

  render() {
    return (
      <div className='app'>
        <Router history={history}>
          <Nav user={this.state.user}/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login'>
              <Login authService={this.authService} setUser={this.setUser}/>
            </Route>
            <Route exact path='/profile'>
              <Profile authService={this.authService} user={this.state.user}/>
            </Route>
            <Route exact path='/spaces'>
              <Space/>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
