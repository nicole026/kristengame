import React, {Component} from 'react'
// import {connect} from 'react-redux'
import {
  BrowserRouter as Router,
  withRouter,
  Route,
  Switch
} from 'react-router-dom'

import {Presents, Present1, Present2} from './components'

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Presents} />
          <Route exact path="/present1" component={Present1} />
          <Route exact path="/present2" component={Present2} />
        </Switch>
      </Router>
    )
  }
}

export default withRouter(Routes)
