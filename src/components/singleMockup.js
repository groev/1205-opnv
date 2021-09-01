import React from 'react';
import Phone from '../assets/smartmockups.jpg';
import Fade from 'react-reveal/Fade';

export default function SingleMockup() {
	const input = {
		head: 'Moderne Mitarbeiter-Plattform eines Mobilitätsunternehmens mit Schichtbetrieb.',
		arguments: [
			'Intuitive Bedienung bei niedriger Hemmschwelle!',
			'Erleichterung der Arbeitsabläufe!',
			'Aktuelle Informationen an das gesamte Personal in wenigen Minuten!',
			'Einfache Erstellung und schnelle Versendung der Informationen!',
			'Sichere und messbare Erreichbarkeit der Empfänger!',
			'Nutzerfreundliche Module!',
			'Nutzer lieben die App!',
		],
	};
	return (
		<div id="SingleMockup">
			<div className="wrapped">
				<Fade left>
					<img src={Phone} alt="handy" />
				</Fade>
				<div className="content">
					<h2>{input.head}</h2>
					<ul>
						{input.arguments &&
							input.arguments.map((argument, idx) => (
								<li key={`argument-${idx}`}>{argument}</li>
							))}
					</ul>
				</div>
			</div>
		</div>
	);
}
