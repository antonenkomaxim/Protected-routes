import React from 'react';



const Nav = () => {
	return (
		<div style={{ width: "220px", background: "#9fb5e2" }}>
			<ul style={{ lineHeight: "4" }}>
				<li><a href="/home">** HeaderMain**</a></li>
				<li><a href="/home/two_header">^^Two header^^</a></li>
				<li><a href="/home/footer">^^Footer^^</a></li>
			</ul>
		</div>
	);
};

export default Nav;