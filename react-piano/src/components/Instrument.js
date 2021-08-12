import React, { Fragment, useState, useEffect } from "react";
import InstrumentAudio from "./InstrumentAudio";
import getNotesBetween from "../utils/getNotesBetween";
import { isAccidentalNote } from "../utils/isAccidentalNote";
import { getKeyboardShortcutsForNote } from "../utils/getKeyboardShortcutsForNote";

const isRegularKey = event => {
	return !event.ctrlKey && !event.metaKey && !event.shiftKey;
};

const Instrument = ({ instrumentName, startNote, endNote, renderPianoKey, keyboardMap }) => {
	const notes = getNotesBetween(startNote, endNote);
	const [state, setState] = useState({ notesPlaying: [] });

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);
	});

	const getNoteFromKeyboardKey = keyboardKey => {
		return keyboardMap[keyboardKey.toUpperCase()];
	};

	const handleKeyDown = e => {
		if (isRegularKey(e) && !e.repeat) {
			const note = getNoteFromKeyboardKey(e.key);
			if (note) {
				setState({ ...state, notesPlaying: [...state.notesPlaying, note] });
			}
		}
	};

	const handleKeyUp = e => {
		if (isRegularKey(e) && !e.repeat) {
			const note = getNoteFromKeyboardKey(e.key);
			if (note) {
				setState({ ...state, notesPlaying: state.notesPlaying.filter(notePlaying => notePlaying !== note) });
			}
		}
	};

	const onPlayNoteStart = note => {
		setState({ ...state, notesPlaying: [...state.notesPlaying, note] });
	};
	const onPlayNoteEnd = note => {
		setState({ ...state, notesPlaying: state.notesPlaying.filter(notePlaying => !--note) });
	};
	return (
		<div>
			<Fragment>
				{notes.map(note => {
					return (
						<Fragment key={note}>
							{renderPianoKey({
								note,
								isAccidentalNote: isAccidentalNote(note),
								isNotePlaying: state.notesPlaying.includes(note),
								startPlayingNote: () => onPlayNoteStart(note),
								stopPlayingNote: () => onPlayNoteEnd(note),
								keyboardShortcut: getKeyboardShortcutsForNote(keyboardMap, note),
							})}
						</Fragment>
					);
				})}
			</Fragment>
			<InstrumentAudio instrumentName={instrumentName} notes={state.notesPlaying} />
		</div>
	);
};

export default Instrument;
