const NOTE_TO_KEY = {
	"F4": "A",
	"F#4": "W",
	"G4": "S",
	"G#4": "E",
	"A4": "D",
	"A#4": "R",
	"B4": "F",
	"C5": "G",
	"C#5": "Y",
	"D5": "H",
	"D#5": "U",
	"E5": "J",
	"F5": "K",
	"F#5": "O",
	"G5": "L",
	"G#5": "P",
	"A5": ";",
	"A#5": "[",
	"B5": "'",
};

const KEY_TO_NOTE = {
	"A": "F4",
	"W": "F#4",
	"S": "G4",
	"E": "G#4",
	"D": "A4",
	"R": "A#4",
	"F": "B4",
	"G": "C5",
	"Y": "C#5",
	"H": "D5",
	"U": "D#5",
	"J": "E5",
	"K": "F5",
	"O": "F#5",
	"L": "G5",
	"P": "G#5",
	";": "A5",
	"[": "A#5",
	"'": "B5",
};

const MAPS = { NOTE_TO_KEY, KEY_TO_NOTE };

export default MAPS;
