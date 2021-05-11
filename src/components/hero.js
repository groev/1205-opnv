import React from 'react';
import Bus from '../assets/opnv.mp4';
import Fade from 'react-reveal/Fade';

export default function Hero() {
	const input = {
		subline: 'Die ÖPNV App von 12-05:',
		videosrc: Bus,
	};
	return (
		<div id="Hero">
			<video autoplay="autoplay" muted loop>
				<source type="video/mp4" src={Bus}></source>
			</video>
			<Fade left>
				<div className="content">
					<span>{input.subline}</span>
					<h1>
						<b>Kommunikation</b> im ÖPNV <b>digitalisieren.</b>
					</h1>
				</div>
			</Fade>
		</div>
	);
}
