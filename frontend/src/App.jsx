/** @format */

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import App2 from "./App2";

const App = () => {
	return (
		<div>
			<Router>
				<Routes>
					<Route
						path="/Login"
						element={<Login />}
					/>
					<Route
						path="/App2"
						element={<App2 />}
					/>
				</Routes>
			</Router>
		</div>
	);
};

export default App;
