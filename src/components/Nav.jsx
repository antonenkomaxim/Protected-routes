import React from 'react';
import { Link } from "react-router-dom";



const Nav = () => {
	return (
		<div style={{ width: "220px", background: "#9fb5e2" }}>
			<ul style={{ lineHeight: "4" }}>
				<li><Link to="/home">**HeaderMain**</Link></li>
				<li><Link to="/home/two_header">^^Two header^^</Link></li>
				<li><Link to="/home/footer">^^Footer^^</Link></li>
			</ul>
		</div>
	);
};

export default Nav;