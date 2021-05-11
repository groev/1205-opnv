import React from 'react';
import Inform from '../assets/inform.svg';

export default function Intro() {
	const input = {
		headline: 'Halten Sie Ihr Personal auf dem Laufenden: Egal wann. Egal wo.',
		sub:
			'Wie läuft’s mit Ihrer Informationspflicht? Ist Ihre interne Kommunikation bisher aufwändig bis herausfordernd? Erreichen Sie alle Mitarbeiter*innen in kürzester Zeit?',
	};
	return (
		<div id="intro">
			<div className="wrapped">
				<img src={Inform} alt="Informieren" />
				<h2>{input.headline}</h2>
				<div className="sub">{input.sub}</div>
			</div>
		</div>
	);
}
