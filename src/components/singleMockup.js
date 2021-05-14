import React from 'react';
import Phone from '../assets/Startseite_gespiegelt.png';
import Fade from 'react-reveal/Fade';

export default function SingleMockup() {
	const input = {
		head: 'Moderne Mitarbeiter-Plattform eines Mobilitätsunternehmens mit Schichtbetrieb.',
		arguments: [
			'Intuitive Bedienung bei niedriger Hemmschwelle',
			'Erleichterung der Arbeitsabläufe',
			'Aktuelle Informationen an das gesamte Personal in wenigen Minuten',
			'Einfache Erstellung und schnelle Versendung der Informationen',
			'Sichere und messbare Erreichbarkeit der Empfänger',
			'Schnelles Auffinden von dauerhaft verfügbaren Informationen',
			'Einstellung von Terminen, Wünschen und Gesprächen zu jeder Zeit',
			'Abbildung von relevanten Prozessen (z. B. Schadensmeldung) ',
			'Schnittstellen zu Branchenlösungen (z. B. Perdis)',
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
