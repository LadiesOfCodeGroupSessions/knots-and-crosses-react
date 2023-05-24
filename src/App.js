import React, { useState } from "react";

const App = () => {
	const [heading, setHeading] = useState("My React Test");

	const handleClick = () => {
		setHeading("A React Project");
	};

	return (
		<div>
			<h1>{heading}</h1>
			<button type="button" onClick={handleClick}>
				<
				Update Heading
			</button>
		</div>
	);
};
export default App;
