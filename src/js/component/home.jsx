import React, { useState } from "react";

//create your first component
const Home = () => {
	const [selectedLight, setSelectedLight] = useState("");

	const indicateColor = (color) => {
		setSelectedLight(color);
	};

	return (
		<div className="trafficContainer">
		<div className="trafficPole"></div>
		<div className="traffic">
			<div className="container">
				<div className={`red light ${selectedLight === "red" ? "active" : ""}`} onClick={() => indicateColor("red")}></div>
				<div className={`yellow light ${selectedLight === "yellow" ? "active" : ""}`} onClick={() => indicateColor("yellow")}></div>
				<div className={`green light ${selectedLight === "green" ? "active" : ""}`} onClick={() => indicateColor("green")}></div>
			</div>
		</div>
		</div>
	);
};

export default Home;
