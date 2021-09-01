import React from 'react';
import { Fade } from 'react-reveal';

export default function GreenText() {
	return (
		<div id="Greentext">
			<div className="wrapped">
				<Fade down>
					<h2>Die Module: So bauen Sie Ihre individuelle Lösung!</h2>
				</Fade>
				<div className="content">
					<Fade>
						<div className="infogrid">
							<div className="head grid-1">Informationsmodule</div>
							<div className="grid-1">
								News/Aktuelles aus unterschiedlichen Bereichen
							</div>
							<div className="grid-1">Pushfunktionen für eilige Meldungen</div>
							<div className="grid-1">Newsstream zur schnellen Übersicht </div>
							<div className="grid-1">Einfaches Aufrufen und Auffinden</div>
							<div className="grid-1">Abruf von umfassenden Dokumenten </div>
							<div className="grid-1">Integration weiterer Abteilungen</div>
							<div className="grid-1">Einfaches Redaktionssystem</div>

							<div className="head grid-2">Interaktionsmodule</div>
							<div className="grid-2">
								Verlinkung/Integration Dienstplan, Urlaubsplan
							</div>
							<div className="grid-2">
								Schadens- und Unfallmeldungen (Fahrzeug, Haltestelle, Objekte)
							</div>
							<div className="grid-2">
								Urlaubsmeldungen, Diensttausche, Fundsachen
							</div>
							<div className="grid-2">
								Bestellungen: Dienstkleidung, Kantine, Arbeitsunterlagen
							</div>
							<div className="grid-2">
								Feedbackfunktionen, Kommentarfunktionen
							</div>
							<div className="grid-2">Tarifinformationen </div>
							<div className="grid-2">Fahrsituation (ITCS) </div>
							<div className="head grid-3">Performancemodule</div>
							<div className="grid-3">
								Buchung von Schulungen, Fahrerschulungen{' '}
							</div>
							<div className="grid-3">Training, E-Learnings</div>
							<div className="grid-3">Quiz- und Assessmentfunktionen</div>
							<div className="grid-3">persönliches Profil</div>
							<div className="grid-3">Community</div>

							<div className="grid-3">Umfragen </div>
							<div className="grid-3">Onboarding</div>
						</div>
					</Fade>
				</div>
			</div>
		</div>
	);
}
