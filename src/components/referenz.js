import React from 'react';
import Beitrag from '../assets/Beitrag_Aue.pdf';
import Fade from 'react-reveal/Fade';

export default function Referenz() {
	return (
		<Fade right>
			<div id="Referenz">
				<div className="bild"></div>
				<div className="content">
					<h3>
						Lernen Sie unsere Referenz bei den Stadtwerke Solingen kennen!
					</h3>
					<ul>
						<li>keine Hardware- und Wartungskosten</li>
						<li>Abschaffen des 8 Meter langen schwarzen Bretts</li>
						<li>Implementierung in sechs Monaten</li>
						<li>Nutzung des eigenen Smartphones</li>
						<li>Akzeptanz bei 94 % (Nutzerquote)</li>
						<li>modularer Aufbau</li>
						{1 == 2 && (
							<a
								target="_blank"
								rel="noopener noreferrer"
								class="btn"
								href={Beitrag}
							>
								Mehr darüber in DER NAHVERKEHR 05/2021
							</a>
						)}
					</ul>
				</div>
			</div>
		</Fade>
	);
}
