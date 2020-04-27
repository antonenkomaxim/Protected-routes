import React, { Component, useState, useCallback } from 'react';
import Cookies from 'js-cookie';
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";



const Login = () => {

	const [pass, setPass] = useState("");
	const [login, setLogin] = useState("");

	const Enenter = () => {
		Cookies.set(login, pass);
		document.location.href = "/protected";
	}

	return (
		<div>
			<div>
				Пожалуйста авторизируйтесь
				</div>
			<div>
				<ul>
					<li>
						<input type="text" placeholder="Login" onChange={(e) => { setLogin(e.target.value) }} />
					</li>
					<li>
						<input type="text" placeholder="Password" onChange={(e) => { setPass(e.target.value) }} />
					</li>
				</ul>
				<div>
					<button onClick={Enenter} >LogIn</button>
				</div>
			</div>
		</div>
	)
}


const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={(props) => (
		document.cookie !== ""
			? <Component {...props} />
			: <Redirect to='/login' />
	)} />
)


const Public = () => <h3>Публичный</h3>
const Protected = () => <h3>Защищенный</h3>


class SecondMainComponent extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<ul>
						<li><Link to="/public">Public Page</Link></li>
						<li><Link to="/protected">Protected Page</Link></li>
					</ul>
					<Route path="/public" component={Public} />
					<Route path="/login" component={Login} />
					<PrivateRoute path="/protected" component={Protected} />
				</div>
			</BrowserRouter>
		);
	}
};





export default SecondMainComponent;