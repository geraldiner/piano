import React, { useState, useEffect } from "react";
import AudioPlayer from "./AudioPlayer";

const InstrumentAudio = ({ instrumentName, notes }) => {
	const [instrumentPlayer, setInstrumentPlayer] = useState(null);

	const setInstrument = () => {
		instrumentPlayer.setInstrument(instrumentPlayer);
	};

	const playNotes = () => {
		if (instrumentPlayer) {
			instrumentPlayer.playNote(notes[0]);
		}
	};

	useEffect(() => {
		setInstrumentPlayer(AudioPlayer());
	}, []);

	useEffect(() => {
		if (instrumentPlayer) {
			setInstrument();
			playNotes();
		}
	}, [instrumentPlayer]);

	useEffect(() => {
		if (notes && notes.length > 0) {
			playNotes();
		}
	}, [notes]);

	return <div></div>;
};

export default InstrumentAudio;
