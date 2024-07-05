import ViewNotes from "./view-notes";
import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./sign-up-form";

import Home from "./home";

function App() {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("http://localhost:3000/view");

				const result = await response.json();
				console.log("Fetched data:", result); // Log the fetched data
				setData(result);
			} catch (error) {
				console.error("Error fetching data:", error);
				setError(error.message);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		if (data) {
			console.log("Data is now available:", data); // Log when data is set
		}
	}, [data]);

	if (error && data === "null") {
		return <div>Error: {error}</div>;
	}

	return (
		<>
			{/* <Routes>
				<Route path="/" element={<Home/>} />
				<Route path='/sign-up' element={<SignUp/>} />
			</Routes> */}
			{data && <ViewNotes data={data} />}
		</>
	);
}

export default App;
