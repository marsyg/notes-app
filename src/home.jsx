import Header from "./header";
 import { BrowserRouter as Router, Route  } from 'react-router-dom';
import { useState } from "react";
import Img from "./noteimg.png";
import SignUp from "./sign-up-form";


function Home() {
	const [Prod, setProd] = useState(false);
	return (
		<>
			<Header Prod={Prod} setProd={setProd} />
			<div className="w-screen h-96 items-center bg-slate-200 flex justify-center">
				<p className="text-center font-bold text-7xl ">
					Collect Your Ideas Anytime,Anywhere
				</p>
			</div>
			<div
				className=" relative- w-screen bg-cover bg-center  items-center flex justify-center h-96"
				style={{ backgroundImage: `url(${Img})` }}
			>
				<button className="bg-slate-900 w-36 h-11 underline rounded hover:bg-black font-bold text-teal-100">
					Sign Up for Free
				</button>
			</div>
			<SignUp />
		</>
	);
}

export default Home;
