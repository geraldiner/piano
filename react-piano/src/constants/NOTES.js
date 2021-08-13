// Standard notes on a scale from C-B
const TONES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

// Octave numbers on a standard grand piano
const OCTAVE_NUMBERS = [1, 2, 3, 4, 5, 6, 7];

// Creates an array of all the notes on a standard piano, ie. All notes in all octaves
const NOTES = OCTAVE_NUMBERS.reduce((notes, octaveNumber) => {
	// Array chunk of notes in a single octave
	const notesInOctave = TONES.map(tone => `${tone}${octaveNumber}`);

	// adds the Array chunk to the existing array of all notes in all octaves
	return [...notes, ...notesInOctave];
}, []);

// console.log(NOTES);

export default NOTES;
