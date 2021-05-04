import React,{useState} from 'react'

const Camera = () => {
    const [playing, setPlaying] = useState(false);

	
	const startVideo = () => {
		setPlaying(true);
		navigator.getUserMedia(
			{
				video: true,
			},
			(stream) => {
				let video = document.getElementsByClassName('app__videoFeed')[0];
				if (video) {
					video.srcObject = stream;
				}
			},
			(err) => console.error(err)
		);
	};

	const stopVideo = () => {
		setPlaying(false);
		let video = document.getElementsByClassName('app__videoFeed')[0];
		video.srcObject.getTracks()[0].stop();
	};

	return (
		<div className="app">
			<div className="app__container">
				<video
					muted
					autoPlay
					className="app__videoFeed"
				></video>
			</div>
			<div className="app__input">
				{playing ? (
					<button onClick={stopVideo}>Stop</button>
				) : (
					<button onClick={startVideo}>Start</button>
				)}
			</div>
		</div>
	);
}

export default Camera;
