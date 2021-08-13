import React from "react";
import isAccidental from "../utils/isAccidental";

const Key = ({ note, keyboardKey, isPlaying }) => {
	const keyClass = isAccidental(note) ? "key black" : "key white";
	return <div className={isPlaying ? `${keyClass} active` : keyClass}>{keyboardKey}</div>;
};

export default Key;
