/** @format */

import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App2() {
	const [search, setSearch] = useState(false);
	const [loading, setLoading] = useState(false);

	return (
		<>
			<div className="bg-blue-600 p-4 text-white flex justify-between">
				<div className="text-3xl ml-4 ">Blog AI</div>
				<div className="flex items-center gap-x-4 ">
					<Link to="/All_blog">
						<div className="mr-4 hover:opacity-75">All Blogs</div>
					</Link>
					<Link to="/login">
						<button className="mr-4 hover:opacity-75">Logout</button>
					</Link>
				</div>
			</div>
			<div className="mx-auto mt-10 flex-grow container shadow-xl shadow-gray-400 rounded-xl p-10">
				<p className="text-3xl font-semibold text-center">
					Welcome to the All New AI Powered Blog Generator
				</p>
				<p className=" p-10 text-center text-gray-500">
					Generate High quality blogs from youtube videos using AI. All you have
					to do is simply paste the link in the box below.
				</p>
				<div className="mr-10 mt-5">
					<p className="text-xl font-semibold">Enter the Youtube video Link</p>
					<div className="flex spaxe-x-4 mt-4">
						<input
							type="url"
							id="link_input"
							placeholder="Paste the link here..."
							className=" pl-5 flex-grow border broder-blue-600 mr-5"
						/>
						<button
							id="generate_btn"
							className="bg-blue-600 text-white w-28 h-9 text-md rounded-md hover:bg-blue-700">
							Generate
						</button>
					</div>
				</div>
				<div className="mt-8">
					<p className="text-xl font-semibold">Generated Blog</p>
					<p
						id="blog_ouput"
						className={
							(search ? "text-black ml-4 mt-4" : "text-gray-500 ml-4 mt-4 ") +
							"animate-spin-slow"
						}>
						The Generated Blog will appear here..
					</p>
				</div>
			</div>
			<footer
				className={
					search
						? "text-grey-200 text-center mt-20"
						: "text-grey-800 text-center mt-48"
				}>
				Powered by RKG
			</footer>
		</>
	);
}

export default App2;
