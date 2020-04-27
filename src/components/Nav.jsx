import React from 'react';
import { Link } from "react-router-dom";



const Nav = () => {
	return (
		<div style={{ width: "220px", background: "#9fb5e2" }}>
			<ul>
				<li><Link to="/public">Public Page</Link></li>
				<li><Link to="/protected">Protected Page</Link></li>
			</ul>
		</div>
	);
};

export default Nav;