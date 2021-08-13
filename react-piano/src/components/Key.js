import React from "react";
import isAccidental from "../utils/isAccidental";

const Key = ({ note, keyboardKey }) => {
	return <div className={isAccidental(note) ? `key black` : `key white`}>{keyboardKey}</div>;
};

export default Key;
