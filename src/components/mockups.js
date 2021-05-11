import React from 'react';
import Speech1 from '../assets/speech1.svg';
import mockup1 from '../assets/mockup1.png';
import mockup2 from '../assets/mockup2.png';
import mockup3 from '../assets/mockup3.png';

export default function Mockups() {
	const input = {
		text:
			'1,2,3 und schnell informiert und alle aktuellen Informationen immer mobil dabei.<br />Nach maximal 3 Klicks erreichen Sie die volle Bandbreite der Inhalte.',
		screens: [
			{ source: mockup1, hoverText: 'test' },
			{ source: mockup2, hoverText: 'test' },
			{ source: mockup3, hoverText: 'test' },
		],
	};
	return (
		<div id="Mockups">
			<div className="wrapped">
				<img src={Speech1} alt="Aus der App!" />
				<div
					className="text"
					dangerouslySetInnerHTML={{ __html: input.text }}
				></div>
				<div className="mockup-grid">
					{input.screens &&
						input.screens.map((screen, idx) => {
							return (
								<div className="item">
									<div
										className="screen"
										style={{ backgroundImage: `url(${screen.source})` }}
									>
										<div className="hover">{screen.hoverText}</div>
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}
