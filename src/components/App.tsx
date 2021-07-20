import React from 'react';

import { User } from '../models/Model'

interface AppState{
  user: User | undefined
}

export default class App extends React.Component<{}, AppState>{

  render() {
    return (
      <div className="App">
        hello
    </div>
    )
  }
}
