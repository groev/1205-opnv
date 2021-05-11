import React from 'react';
import { Fade } from 'react-reveal';

export default function GreenText() {
	return (
		<div id="Greentext">
			<div className="wrapped">
				<Fade down>
					<h2>
						DIGITALISIERUNG.
						<br />
						EINFACH. MACHEN.
					</h2>
				</Fade>
				<div className="content">
					<p>
						<strong>
							Kommunikation als Erfolgsgarant der digitalen Transformation.
						</strong>
					</p>
					<ul>
						<li>
							Holen Sie mit der App ihr Personal bei der Veränderung mit ins
							Boot.
						</li>
						<li>
							Gestalten Sie mit der App die Prozesse im Schulterschluss mit
							Ihrem Personal.
						</li>
						<li>
							Steigern Sie mit der App den digitalen Reifegrad der gesamten
							Belegschaft.
						</li>
					</ul>
					<p>
						<strong>
							Können Sie es sich noch leisten, bei der Informationspflicht des
							Personals auf digitale Wege zu verzichten? Die App bietet Ihnen
							einen einfachen Einstieg.
						</strong>
					</p>
				</div>
			</div>
		</div>
	);
}
