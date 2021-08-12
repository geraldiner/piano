import NOTES from "../constants/NOTES";
export const isAccidentalNote = note => {
	return NOTES.includes(note) && note.includes("#");
};
