/** @format */

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./Hero";
import Login from "./Login";
import Signup from "./Signup";
import App2 from "./App2";
import All_blog from "./All_blog";

const App = () => {
	return (
		<div>
			<Router>
				<Routes>
					<Route
						exact
						path="/"
						element={<Hero />}
					/>
					<Route
						path="/Signup"
						element={<Signup />}
					/>
					<Route
						path="/Hero"
						element={<Hero />}
					/>
					<Route
						path="/Login"
						element={<Login />}
					/>
					<Route
						path="/App2"
						element={<App2 />}
					/>
					<Route
						path="/All_Blog"
						element={<All_blog />}
					/>
				</Routes>
			</Router>
		</div>
	);
};

export default App;
