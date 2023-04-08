import React, { useState } from "react";
import Light from "./Light.jsx";

//create your first component
const Home = () => {
	const [lit,setLit] = useState ("red");
const colors = ["red","yellow", "green"];

	return (
		<div className="d-flex justify-content-center">
		<div className="App">
			{colors.map((color) =>{
				return <Light color ={color} lit={lit} setLit = {setLit}/>
			})}
		</div>
		</div>
	);
};

export default Home;
