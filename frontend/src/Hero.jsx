/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<>
			<div className="bg-blue-600 p-4 text-white flex justify-between">
				<div className="text-2xl ml-4 ">Blog AI</div>
				<div>
					<Link to="/Login">
						<button className="mr-4 hover:opacity-75">Login</button>
					</Link>
					<Link to="/Signup">
						<button className="mr-4 hover:opacity-75">Signup</button>
					</Link>
					<Link to="/App2">
						<button className="mr-4 hover:opacity-75">check btn</button>
					</Link>
				</div>
			</div>
			<div>
				<p>Hero Page</p>
				<button>Get Started</button>
			</div>
		</>
	);
};

export default Hero;
