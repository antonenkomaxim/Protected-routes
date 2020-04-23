import React from 'react';
import { Switch, Route } from "react-router-dom";
import Footer from "./Footer";
import TwoHeader from "./TwoHeader";
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
				<Switch>
					<div style={{ width: "650px" }}>
						<Route path="/home/two_header" component={TwoHeader} />
						<Route path="/home/footer" component={Footer} />
					</div>
				</Switch>
			</div>

		</div>
	);
};

export default HeaderMain;