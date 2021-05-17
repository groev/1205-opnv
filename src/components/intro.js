import React, { useState } from 'react';
import Inform from '../assets/play.svg';
import Fade from 'react-reveal/Fade';
import ModalVideo from 'react-modal-video';

export default function Intro() {
	const [isOpen, setIsOpen] = useState(false);
	const input = {
		sub: 'Wie läuft’s mit Ihrer Informationspflicht? Ist Ihre interne Kommunikation bisher aufwändig bis herausfordernd? Erreichen Sie alle Mitarbeiter*innen in kürzester Zeit?',
	};
	return (
		<div id="intro">
			<div className="wrapped">
				<Fade right>
					<img onClick={() => setIsOpen(true)} src={Inform} alt="Informieren" />
				</Fade>
				<ModalVideo
					channel="youtube"
					autoplay
					isOpen={isOpen}
					videoId="exPKRBoGrZo"
					onClose={() => setIsOpen(false)}
				/>

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
