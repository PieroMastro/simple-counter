import React from "react";
import { Counter } from "./Counter.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<Counter firstDigit={props.firstDigit} secondDigit={props.secondDigit} thirdDigit={props.thirdDigit} fourthDigit={props.fourthDigit} />
	);
};

export default Home;
