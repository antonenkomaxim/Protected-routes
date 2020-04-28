import React from 'react';
import { Link } from "react-router-dom";



const Nav = () => {
	return (
		<div >
			<ul>
				<li><Link to="/login">Login</Link></li>
				<li><Link to="/">Protected Page</Link></li>
				<li><Link to="/help">Help</Link></li>
			</ul>
		</div>
	);
};

export default Nav;