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
	let soundPlayer = NullSoundFontPlayer;
	const Player = {
		async setInstrument(instrumentName) {
			let soundFontPlayer = await SoundFontPlayer.instrument(audioContext, instrumentName);
			soundPlayer = soundFontPlayer ? soundFontPlayer : NullSoundFontPlayer;
		},
		playNote(note) {
			soundPlayer.play(note);
		},
	};
	return Player;
};

export default AudioPlayer;
