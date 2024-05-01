/** @format */

import React from "react";

const Blog_block = (props) => {
	return (
		<div className="w-1/4 mt-10 mr-10 ml-10">
			<div className="rounded-xl h-64 ">
				<div className="bg-gray-600 rounded-xl h-52 mx-auto"></div>{" "}
				{/*The cover pic of the blog comes here*/}
				<div className="text-2xl mt-1 ml-2 font-semibold text-gray-800">
					{props.title}
				</div>
				{/* <div className="text-lg pl-10 pt-3">{props.text}</div>
				<div className="text-sm pl-2"> Youtube Link:{props.link}</div> */}
			</div>
		</div>
	);
};

export default Blog_block;
