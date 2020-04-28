import React, { useState, useCallback } from 'react';
import Cookies from 'js-cookie';
import { useHistory } from "react-router-dom";
import Nav from "./Nav";



export const Protected = () => {
	return (
		<div className="contant-main">
			<Nav />
			<div className="login-main">
				<h2>Защищенный</h2>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptate. Mollitia velit non reprehenderit obcaecati vel odio ullam necessitatibus, at et cum libero hic eaque id inventore blanditiis odit dolores?</p>
			</div>
		</div>
	)
}

export const Help = () => {
	const history = useHistory();
	const onSubmit = () => {
		history.push('/login')
	}
	return (
		<div className="login-main">
			<div>
				<h2><p>Логин: qwer</p><p>Пароль: qwer</p></h2>
			</div>
			<div className="login-form">
				<button className="login-btn" onClick={onSubmit}>На логин форму</button>
			</div>
		</div>
	)
}

export const Login = () => {
	const [pass, setPass] = useState("");
	const [login, setLogin] = useState("");
	const history = useHistory();

	const onSubmit = () => {
		if (login && pass) {
			Cookies.set("token", `${login}_${pass}`);
			history.push('/');
		}
	}

	const onBlurLogin = useCallback(e => setLogin(e.target.value), []);
	const onBlurPass = useCallback(e => setPass(e.target.value), []);

	return (
		<div className="login-main">
			<div>
				<h2 >Пожалуйста авторизируйтесь</h2>
			</div>
			<div>
				<form className="login-form">
					<div className="form-group">
						<label className="label-form" >Enter login please</label>
						<input className="input-form" type="text" placeholder="Login" onBlur={onBlurLogin} />
					</div>
					<div className="form-group">
						<label className="label-form">Enter password please</label>
						<input className="input-form" type="text" placeholder="Password" onBlur={onBlurPass} />
					</div>
					<div className="form-group">
						<button className="login-btn" onClick={onSubmit} >LogIn</button>
					</div>
				</form>
			</div>
		</div>
	);
}