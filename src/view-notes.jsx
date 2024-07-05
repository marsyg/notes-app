import { useEffect } from "react";

const ViewNotes = ({ data }) => {
  useEffect(() => {
    console.log("check here 1", data);
    
  },[data])
  console.log("check here===========================>",data)
  return (
		<>
			<div className="w-screen h-screen flex-col  bg-slate-100">
				<p className="self-start flex w-full">Notes</p>
				<div className="flex justify-center w-full h-auto ">
					{data && data.map((item,index) =>
					(
						<div className="w-1/4  bg-cyan-100 hover:shadow-2xl hover:border-slate-500 border-2  border-slate-400 rounded mr-7  mt-1 h-52 " key={index}>
							<p>TITLE : {item.title}</p>
							<p>Author :{item.author}</p>
							<p>Content :{item.content}</p>
							<p>Date :{item.Date}</p>
							<p>TimeStamp :{item.timeStamp}</p>
						</div>
          )
					)}
					
				</div>
			</div>
		</>
	);
}
export default ViewNotes;
