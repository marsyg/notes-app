import ViewNotes from "./view-notes";
import axios from "axios";
import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./sign-up-form";

import Home from "./home";

function App() {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [change, setChange] = useState(true);
	console.log(change);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("http://localhost:3000/view");

				setData(response.data);

				console.log("Fetched data:", response.data);
			} catch (error) {
				console.error("Error fetching data:", error);
				setError(error.message);
			}
		};

		fetchData();
	}, [change]);

	if (error && data === "null") {
		return <div>Error: {error}</div>;
	}

	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sign-up" element={<SignUp />} />
				<Route
					path="/view-notes"
					element={
						<ViewNotes setChange={setChange} data={data} change={change} />
					}
				/>
			</Routes>
		</>
	);
}

export default App;
