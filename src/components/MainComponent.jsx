import React, { useState } from 'react';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import HeaderMain from "./HeaderMain";
import Cookies from 'js-cookie';
import TwoHeader from "./TwoHeader";
import Footer from "./Footer";



const MainComponent = () => {
	const [status, setStatus] = useState(true);
	const [pass, setPass] = useState("");
	const [login, setLogin] = useState("");

	const logIn = () => {
		Cookies.set(login, pass);
		if (Cookies.get(login)) {
			if (Cookies.get(login) === pass) {
				setStatus(false);
				document.location.href = "/home";
			}
		} else {
			document.location.href = "/";
		}
	}


	const showingLogin = () => {
		return (
			<div>
				<div>
					<div >
						<h3>Авторизация</h3>
						<ul>
							<li>
								<p>Login</p>
								<input type="text" id="login" onChange={(e) => { setLogin(e.target.value) }} />
							</li>
							<li>
								<p>Password</p>
								<input type="text" id="password" onChange={(e) => { setPass(e.target.value) }} />
							</li>
						</ul>
					</div>
					<button onClick={logIn} >LogIn</button>
				</div>
			</div>
		)
	}


	return (
		<BrowserRouter>
			<div>
				{document.cookie === "" && showingLogin()}
				<div>
					<PrivateRoute path="/home" component={HeaderMain} />
					<Route path="/home/two_header" component={TwoHeader} />
					<Route path="/home/footer" component={Footer} />
				</div>
			</div>
		</BrowserRouter>
	);
};


const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={(props) => (
		document.cookie !== ""
			? <Component {...props} />
			: <Redirect to='/' />
	)} />
)


export default MainComponent;