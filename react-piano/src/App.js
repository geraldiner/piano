import React, { useEffect } from "react";
import AudioPlayer from "./components/AudioPlayer";

const App = () => {
	const audioPlayer = AudioPlayer();

	useEffect(() => {
		audioPlayer.setInstrument("acoustic_grand_piano");
	}, [audioPlayer]);

	const handleClick = () => {
		audioPlayer.playNote("G4");
	};

	return (
		<div>
			<button onClick={handleClick}>Play</button>
		</div>
	);
};

export default App;
