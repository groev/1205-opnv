import React from 'react';
import Inform from '../assets/inform.svg';
import Fade from 'react-reveal/Fade';

export default function Intro() {
	const input = {
		sub:
			'Wie läuft’s mit Ihrer Informationspflicht? Ist Ihre interne Kommunikation bisher aufwändig bis herausfordernd? Erreichen Sie alle Mitarbeiter*innen in kürzester Zeit?',
	};
	return (
		<div id="intro">
			<div className="wrapped">
				<Fade right>
					<img src={Inform} alt="Informieren" />
				</Fade>

				<h2>
					Halten Sie Ihr Personal auf dem Laufenden:
					<br />
					<strong>Egal wann. Egal wo.</strong>
				</h2>
				<div className="sub">{input.sub}</div>
			</div>
		</div>
	);
}
