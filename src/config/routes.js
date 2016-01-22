import React from 'react';
import { Router, Route, Redirect, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import App from '../components/App';
import NotFound from '../components/NotFound';

export default (
	<Router>
		<Route path="/" component={App}>
      <Route path="*" component={NotFound} />
		</Route>
	</Router>
);
