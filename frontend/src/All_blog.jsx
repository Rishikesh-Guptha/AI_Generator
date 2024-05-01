/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Blog_block from "./Blog_block";

const All_blog = () => {
	return (
		<>
			<div className="bg-blue-600 p-4 text-white flex justify-between">
				<Link to="/App2">
					<div className="text-2xl ml-4 ">Blog AI</div>
				</Link>
				<div className="flex items-center gap-x-4 ">
					<div className="mr-4">All Blogs</div>
					<Link to="/login">
						<button className="mr-4 hover:opacity-75">Logout</button>
					</Link>
				</div>
			</div>
			<p className="text-3xl mt-4 ml-5">All Blogs</p>
			<div
				id="blog_area"
				className="flex flex-wrap mx-auto ml-10">
				<Blog_block
					title="Blog 1"
					text="This is the first blog"
					link="Read More"
				/>
				<Blog_block
					title="Blog 2"
					text="This is the second blog"
					link="Read More"
				/>
				<Blog_block
					title="Blog 3"
					text="This is the third blog"
					link="Read More"
				/>
				<Blog_block
					title="Blog 4"
					text="This is the fourth blog"
					link="Read More"
				/>
				<Blog_block
					title="Blog 5"
					text="This is the fifth blog"
					link="Read More"
				/>
				<Blog_block
					title="Blog 5"
					text="This is the fifth blog"
					link="Read More"
				/>
				<Blog_block
					title="Blog 5"
					text="This is the fifth blog"
					link="Read More"
				/>
				<Blog_block
					title="Blog 5"
					text="This is the fifth blog"
					link="Read More"
				/>
			</div>
		</>
	);
};

export default All_blog;
