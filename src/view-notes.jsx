import { useEffect, useState } from "react";
import axios from "axios";
const ViewNotes = ({ data, setChange, change }) => {
	console.log(data);
	const [id, setId] = useState(null);
	const [id2, setId2] = useState(null);
	const [ind, setInd] = useState(null);
	const [clickDone, setDone] = useState(false);
	const [isediting, setEditing] = useState(false);
	console.log(id);

	const [contentText, setContent] = useState("");
	console.log("check contentText", contentText);

	const handleInputChange = (e) => {
		setContent(e.target.value);
	};
	useEffect(() => {
		const handleOnDone = async () => {
			try {
				const response = await axios.post("http://localhost:3000/edit", 
			     {
						id: id2,
						index: ind,
						content: contentText,
					},
				);
				setChange((prev) => {
					!prev;
				});
				console.log("request sent from edit ");
			} catch (error) {
				console.log("error from edit:", error);
			}
		};
		handleOnDone();
	}, [clickDone]);
	useEffect(() => {
		const deleteData = async () => {
			if (id === null) return;

			try {
				const response = await axios.delete(
					`http://localhost:3000/delete-note`,
					{
						data: { id: id },
					}
				);
				setChange((prev) => {
					!prev;
				});
				console.log("reponse data");
				console.log(response.data);
				console.log("request sent");
				console.log(data);
			} catch (error) {
				console.error("Error posting data:", error);
			}
		};

		deleteData();
	}, [id]);

	return (
		<>
			<div className="w-screen h-screen flex-col  bg-gray-200">
				<div className="w-screen bg-slate-800 h-16"></div>
				<p className="self-start flex w-full">Notes</p>
				<div className="flex justify-center w-full h-auto ">
					{data &&
						data.map((item, index) => (
							<div
								className="w-1/4  bg-violet-200  hover:shadow-2xl hover:border-violet-500 border-2  border-slate-400 rounded mr-7  mt-1 h-60 "
								key={index}
							>
								<div className=" h-56 m-1">
									<div className="flex content-end justify-between">
										<p className=" flex font-bold text-gray-400 m-2">
											TITLE : {item.title}
										</p>
										<p className=" text-gray-400 font-bold text-2xl m-2">
											{item.Date}
										</p>
									</div>
									{isediting && id2 == `${item.id}` && (
										<input
											className=" flex bg-violet-200 h-24 self-center rounded-lg w-full m-2"
											type="text"
											value={contentText}
											onChange={handleInputChange}
											key={id2}
										/>
									)}
									<p
										key={index}
										className={`${
											id2 === index + 1 && isediting ? "hidden" : ""
										} bg-violet-200 h-24 rounded-lg w-auto m-2`}
									>
										Content :{item.content}
									</p>
									<div className="flex content-end justify-between">
										<p className=" flex justify-end  text-gray-400 m-2">
											{item.timeStamp}
										</p>
										<p className=" flex w-auto text-gray-400 m-2">
											Author :{item.author}
										</p>
									</div>
									<div className="flex  justify-between">
										<button
											onClick={() => {
												setId(item.id);
											}}
											className="rounded ml-1 set bg-indigo-600 w-16 h-7"
										>
											Delete
										</button>
										<button
											onClick={() => {
												setEditing((prev) => !prev);
												setId2(item.id);
												setContent(item.content);
											}}
											className={`${
												id2 === index + 1 && isediting ? "hidden" : ""
											} rounded mr-1 bg-indigo-600 w-16 h-7 `}
										>
											Edit
										</button>
										<button
											onClick={() => {
												setInd(index);
												setDone((prev) => !prev);
												setEditing((prev) => !prev);
											}}
											className={`${
												id2 === index + 1 && isediting ? "" : "hidden"
											} rounded mr-1 bg-indigo-600 w-16 h-7 `}
										>
											Done
										</button>
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
		</>
	);
};
export default ViewNotes;
