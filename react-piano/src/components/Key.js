import React from "react";
import { NOTES_TO_KEYBOARD } from "../global/constants";

const Key = ({ note }) => {
	let keyClass = note.length > 1 ? "key black" : "key white";
	return (
		<div className={keyClass} note={note}>
			<span className="key-label">{NOTES_TO_KEYBOARD[note]}</span>
		</div>
	);
};

export default Key;
