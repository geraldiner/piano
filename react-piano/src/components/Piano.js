import React, { useEffect } from "react";
import AudioPlayer from "../core/AudioPlayer";
import Key from "./Key";
import getNotesBetween from "../utils/getNotesBetween";
import MAPS from "../constants/KEYBOARD_MAP";

const Piano = ({ startNote, endNote }) => {
	const notes = getNotesBetween(startNote, endNote);
	const audioPlayer = AudioPlayer();
	useEffect(() => {
		audioPlayer.setInstrument("acoustic_grand_piano");
		window.addEventListener("keydown", handleKeyDown);
		// window.addEventListener("keyup", handleKeyUp);
	}, []);

	const handleKeyDown = e => {
		if (!e.repeat) {
			const note = MAPS.KEY_TO_NOTE[e.key.toUpperCase()];
			if (note) {
				audioPlayer.playNote(note);
			}
		}
	};
	// const handleKeyUp = e => {
	// 	if (!e.repeat) {
	// 		if (e.key === "a") {
	// 		}
	// 	}
	// };
	return (
		<div className="piano">
			{notes.map((note, index) => {
				return <Key key={index} note={note} keyboardKey={MAPS.NOTE_TO_KEY[note]} />;
			})}
		</div>
	);
};

export default Piano;
