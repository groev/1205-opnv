import React, { useState } from 'react';
import Inform from '../assets/play.svg';
import Fade from 'react-reveal/Fade';
import ModalVideo from 'react-modal-video';

export default function Intro() {
	const [isOpen, setIsOpen] = useState(false);
	const input = {
		sub: 'Wie läuft’s mit Ihrer Informationspflicht? Ist Ihre interne Kommunikation bisher aufwändig bis herausfordernd? Erreichen Sie alle Mitarbeiter*Innen in kürzester Zeit?',
	};
	return (
		<div id="intro">
			<div className="wrapped">
				<Fade right>
					<div className="img-wrapper" onClick={() => setIsOpen(true)}>
						<img className="youtube" src={Inform} alt="Informieren" />
						Video öffnen
					</div>
				</Fade>
				<ModalVideo
					channel="youtube"
					autoplay
					isOpen={isOpen}
					videoId="SC7Iv0YKdXE"
					onClose={() => setIsOpen(false)}
				/>

				<h2>
					Vor Arbeitsbeginn stets aktuell zeit- und ortsunabhängig informiert
					sein!
					<br />
				</h2>
				<div className="sub">{input.sub}</div>
			</div>
		</div>
	);
}
