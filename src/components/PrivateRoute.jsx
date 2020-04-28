import React from 'react';
import { Route, Redirect } from "react-router-dom";
import Cookies from 'js-cookie';


const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={(props) => (
		Cookies.get("token") === "qwer_qwer" ?
			<Component {...props} /> :
			Cookies.get("token") ?
				<Redirect to='/help' /> :
				<Redirect to='/login' />
	)} />
)


export default PrivateRoute;