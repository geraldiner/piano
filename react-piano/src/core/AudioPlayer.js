import SoundFontPlayer from "soundfont-player";
import AudioContext from "./AudioContext";

const NullSoundFontPlayerNoteAudio = {
	stop() {},
};

const NullSoundFontPlayer = {
	play() {
		return NullSoundFontPlayerNoteAudio;
	},
};

const AudioPlayer = () => {
	const audioContext = AudioContext && new AudioContext();

	let soundFPlayer = NullSoundFontPlayer;

	const Player = {
		async setInstrument(instrumentName) {
			soundFPlayer = (await SoundFontPlayer.instrument(audioContext, instrumentName)) || NullSoundFontPlayerNoteAudio;
		},
		playNote(note) {
			return soundFPlayer.play(note);
		},
	};
	return Player;
};

export default AudioPlayer;
