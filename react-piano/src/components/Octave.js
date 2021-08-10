import React from "react";
import Key from "./Key";
import { NOTES } from "../global/constants";

const Octave = () => {
	return (
		<div className="piano">
			{NOTES.map((note, index) => {
				return <Key key={index} note={note} />;
			})}
		</div>
	);
};

export default Octave;
