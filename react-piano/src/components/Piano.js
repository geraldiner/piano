import React from "react";
import Key from "./Key";
import NOTES from "../constants/NOTES";
const Piano = () => {
	return (
		<div className="piano">
			<Key isPlaying={false} isAccidental={false} keyboardKey="Q" />
			<Key isPlaying={false} isAccidental={true} keyboardKey="2" />
		</div>
	);
};

export default Piano;
