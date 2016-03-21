import React from 'react'
import { Router, Route } from 'react-router'
import App from '../components/App'
import NotFound from '../components/NotFound'

export default (
  <Router>
    <Route path='/' component={App}>
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
)
