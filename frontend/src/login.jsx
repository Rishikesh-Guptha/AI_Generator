/** @format */

import React from "react";
import { Link } from "react-router-dom";

const login = () => {
	return (
		<>
			<div className="bg-blue-600 p-4 text-white flex justify-between">
				<div className="text-2xl ml-4 ">Blog AI</div>
				<Link to="/App2">
					<button className="mr-4 ">fake btn</button>
				</Link>
			</div>
			<div className="mx-auto mt-20 flex-grow container shadow-xl shadow-gray-400 rounded-xl p-10">
				<p className="text-center text-3xl font-semibold">Login</p>
				<p className="mt-10 text-xl">Username</p>
				<input
					type="text"
					placeholder="Enter your username..."
					className="border border-gray-300 w-full p-2 rounded-lg mt-1"
				/>
				<p className="mt-5 text-xl">Password</p>
				<input
					type="password"
					placeholder="Enter your password..."
					className="border border-gray-300 w-full p-2 rounded-lg mt-1"
				/>
				<div className="flex justify-center">
					<button className="bg-blue-600 w-28 h-8 text-white mt-5 rounded hover:bg-blue-700">
						Submit
					</button>
				</div>
			</div>
		</>
	);
};

export default login;
