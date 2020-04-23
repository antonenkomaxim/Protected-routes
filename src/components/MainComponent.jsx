import React from 'react';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import HeaderMain from "./HeaderMain";



class MainComponent extends React.Component {

	logIn = () => {
		let log = document.getElementById("login").value;
		let pass = document.getElementById("password").value;

		if (log === "m") {
			if (pass === "n") {
				// сверяем и ложим в куки
				// если в куки чтото есть то авторизированые
				this.setCookie(log, pass);
				if (document.cookie !== "") {
					document.location.href = "/home";
					// 	 this.deleteCookie(log);
				}
			}
		} else {
			document.location.href = "/";
		}
	}

	setCookie = (name, value) => {
		let updatedCookie = name + "=" + value;
		document.cookie = updatedCookie;
	}

	// deleteCookie = (name) => {
	// 	this.setCookie(name, "", { 'max-age': -1 });
	// }

	showingLogin = () => {
		if (document.cookie === "") {
			return (
				<div>
					<ul>
						<li>
							<p>Login</p>
							<input type="text" id="login" />
						</li>
						<li>
							<p>Password</p>
							<input type="text" id="password" />
						</li>
					</ul>
					<button onClick={this.logIn} >LogIn</button>
					{/* <a href="/home">Home</a> */}
				</div>
			)
		}
	}


	render() {
		return (
			<BrowserRouter>
				<div>
					{this.showingLogin()}
					<div>
						<PrivateRoute path="/home" component={HeaderMain} />
					</div>
				</div>
			</BrowserRouter>
		);
	}
};


const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={(props) => (
		document.cookie !== ""
			? <Component {...props} />
			: <Redirect to='/' />
	)} />
)


export default MainComponent;