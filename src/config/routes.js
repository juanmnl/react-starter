import React from 'react'
import { Router, Route } from 'react-router'
import App from '../components/App'
import NotFound from '../components/NotFound'
import RoutingTest from '../components/RoutingTest'

export default (
  <Router>
    <Route path='/' component={App}>
      <Route path='/routing-test' component={RoutingTest} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
)
