import React from 'react'
import ReactDOM from 'react-dom/client'
import App2 from "./App2.jsx";
import Login from "./login.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App2 />
		{/* <Login /> */}
	</React.StrictMode>,
);
