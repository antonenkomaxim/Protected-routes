import React from 'react';
import Nav from "./Nav";



const HeaderMain = () => {
	return (
		<div style={{ display: "flex" }}>
			<div>
				<Nav />
			</div>
			<div>
				<div>
					<h1>Main Header</h1>
				</div>
			</div>
		</div>
	);
};

export default HeaderMain;