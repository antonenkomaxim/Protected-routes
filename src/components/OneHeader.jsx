import React from 'react';
import Nav from "./Nav";
import { Switch, Route } from "react-router-dom";



const OneHeader = () => {
	return (
		<div style={{ display: "flex" }}>
			<div>
				<Nav />
			</div>
			<div>
				<h1>One Header</h1>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus distinctio odio optio dolore. Quae explicabo a inventore, optio debitis voluptate perspiciatis nam, rerum odio impedit iusto ad quam ut doloribus.</p>
			</div>
		</div>
	);
};

export default OneHeader;