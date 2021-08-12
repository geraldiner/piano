import { useEffect, useState } from "react";
import AudioPlayer from "./AudioPlayer";

const InstrumentAudio = ({ instrumentName, notes }) => {
	const [instrumentPlayer, setInstrumentPlayer] = useState(null);

	useEffect(() => {
		setInstrumentPlayer(AudioPlayer());
	}, []);

	useEffect(() => {
		const setInstrument = () => {
			instrumentPlayer.setInstrument(instrumentName);
		};
		const playNotes = () => {
			if (instrumentPlayer) {
				instrumentPlayer.playNote(notes[0]);
			}
		};
		if (instrumentPlayer) {
			setInstrument();
			playNotes();
		}
	}, [instrumentName, instrumentPlayer, notes]);

	useEffect(() => {
		const playNotes = () => {
			if (instrumentPlayer) {
				instrumentPlayer.playNote(notes[0]);
			}
		};
		if (notes && notes.length > 0) {
			playNotes();
		}
	}, [instrumentPlayer, notes]);

	return null;
};

export default InstrumentAudio;
