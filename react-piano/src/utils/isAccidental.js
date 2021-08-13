import NOTES from "../constants/NOTES";

export default function isAccidental(note) {
	return NOTES.includes(note) && note.includes("#");
}
