import React from 'react';
import Speech1 from '../assets/speech1.svg';
import mockup1 from '../assets/mockup1.png';
import mockup2 from '../assets/mockup2.png';
import mockup3 from '../assets/mockup3.png';
import { Zoom, Fade } from 'react-reveal';

export default function Mockups() {
	const input = {
		text: '1, 2, 3 und schnell informiert und alle aktuellen Informationen immer mobil dabei.<br />Nach maximal 3 Klicks erreichen Sie die volle Bandbreite der Inhalte.',
		screens: [
			{
				source: mockup1,
				hoverText:
					'Zeit- und ortsunabhängig Neues aus den unterschiedlichen Bereichen erfahren.',
			},
			{
				source: mockup3,
				hoverText:
					'Behalten Sie den Überblick mit chronologischem Aufbau der Infos.',
			},
			{
				source: mockup2,
				hoverText: 'Alle Einzelheiten erfahren Sie hier.',
			},
		],
	};
	return (
		<div id="Mockups">
			<div className="wrapped">
				<Zoom>
					<img src={Speech1} alt="Aus der App!" />
				</Zoom>
			</div>
		</div>
	);
}
