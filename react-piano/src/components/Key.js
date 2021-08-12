import React from "react";

const Key = ({ isPlaying, isAccidental, keyboardKey }) => {
	const keyType = isAccidental ? "key black" : "key white";

	return (
		<div>
			<div className={isPlaying ? `${keyType} active` : keyType}>
				<span className="key-label">{keyboardKey}</span>
			</div>
		</div>
	);
};

export default Key;
