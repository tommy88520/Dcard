import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Main from './main'
import Repo from './repo'

import React from 'react'
function App() {
  const username = 'iamshaunjp'
  return (
    <Router>
      <Switch>
        <Route exact path={`/users/:${username}?/repos`}>
          <Main username={username} />
        </Route>
        <Route exact path={`/users/:${username}?/repos/:repo?`}>
          <Repo username={username} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
