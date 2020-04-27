import React, { useState, useCallback } from 'react';
import Cookies from 'js-cookie';
import { useHistory } from "react-router-dom";


export const Public = () => <h3>Публичный</h3>
export const Protected = () => <h3>Защищенный</h3>

export const Login = () => {
	const [pass, setPass] = useState("");
	const [login, setLogin] = useState("");
	const history = useHistory();

	const onSubmit = () => {
		Cookies.set("token", `${login}_${pass}`);
		history.push('/protected');
	}

	const onBlurLogin = useCallback(e => setLogin(e.target.value), []);
	const onBlurPass = useCallback(e => setPass(e.target.value), []);

	return (
		<div>
			<div>
				Пожалуйста авторизируйтесь
				</div>
			<div>
				<form >
					<div>
						<input type="text" placeholder="Login" onBlur={onBlurLogin} />
					</div>
					<div>
						<input type="text" placeholder="Password" onBlur={onBlurPass} />
					</div>
					<div>
						<button onClick={onSubmit} >LogIn</button>
					</div>
				</form>
			</div>
		</div>
	);
}