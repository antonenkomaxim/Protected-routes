import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { Protected, Login, Help } from "./components";


class Router extends Component {
	render() {
		return (
			<BrowserRouter >

				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/help" component={Help} />
					<PrivateRoute path="/" component={Protected} />
				</Switch>
			</BrowserRouter>
		);
	}
};

export default Router;