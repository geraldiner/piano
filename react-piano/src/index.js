import React from "react";
import ReactDOM from "react-dom";
import Piano from "./components/Piano";
import "./assets/css/styles.css";

ReactDOM.render(
	<React.StrictMode>
		<Piano startNote="F4" endNote="B5" />
	</React.StrictMode>,
	document.getElementById("root"),
);
