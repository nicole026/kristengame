import React, {Component} from 'react'
// import {connect} from 'react-redux'
import {
  BrowserRouter as Router,
  withRouter,
  Route,
  Switch
} from 'react-router-dom'

import {Home, Timer, Generator} from './components'

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/timer" component={Timer} />
          <Route exact path="/generator" component={Generator} />
        </Switch>
      </Router>
    )
  }
}

export default withRouter(Routes)
