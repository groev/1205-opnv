import React from 'react';
import Smile from '../assets/smile.svg';
import Functions from '../assets/functions.svg';
import Weeks from '../assets/weeks.svg';
import Devices from '../assets/devices.svg';
import Fade from 'react-reveal/Fade';

export default function Icons() {
	const input = {
		headline: 'Mit der ÖPNV App wird alles einfacher.',
		subline: 'Schneller. Bequemer. In Echtzeit.',
		items: [
			{ icon: Smile, text: 'hohe Nutzerzufriedenheit' },
			{ icon: Functions, text: 'Funktionen flexibel anpassbar' },
			{ icon: Weeks, text: 'In wenigen Wochen implementiert' },
			{ icon: Devices, text: 'Läuft auf allen Smartphones' },
		],
	};
	return (
		<div id="Icons">
			<div className="wrapped">
				<h2>{input.headline}</h2>
				<div className="sub">{input.subline}</div>
				<div className="grid">
					{input.items &&
						input.items.map((item, idx) => {
							return (
								<Fade delay={(idx + 1) * 200} left>
									<div className="icon">
										<img src={item.icon} alt={item.text} />
										<div>{item.text}</div>
									</div>
								</Fade>
							);
						})}
				</div>
			</div>
		</div>
	);
}
