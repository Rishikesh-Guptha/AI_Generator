/** @format */

import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="bg-blue-600 p-4 text-white flex justify-between">
				<div className="text-2xl">AI Generator</div>
			</div>
			<div className="bg-white m-20 border">
				<p className="text-2xl"> Blog Generator</p>
			</div>
		</>
	);
}

export default App;
