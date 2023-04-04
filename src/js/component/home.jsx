import React from "react";
import Light from "./Light.jsx";

//create your first component
const Home = () => {
const colors = ["red","yellow", "green"];

	return (
		<div className="App">
			{colors.map((color) =>{
				return <Light color ={color}/>
			})}
		</div>
	);
};

export default Home;
