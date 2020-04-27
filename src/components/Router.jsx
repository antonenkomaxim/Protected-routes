import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, } from "react-router-dom";
import Nav from "./Nav";
import PrivateRoute from "./PrivateRoute";
import { Public, Protected, Login } from "./components";


class Router extends Component {
	render() {
		return (
			<BrowserRouter >
				<Nav />
				<Switch>
					<Route path="/public" component={Public} />
					<Route path="/login" component={Login} />
					<PrivateRoute path="/protected" component={Protected} />
				</Switch>
			</BrowserRouter>
		);
	}
};

export default Router;