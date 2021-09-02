import React from 'react';
import Speech2 from '../assets/speech2.svg';
import Aue from '../assets/marcus.jpg';
import Accordion from './accordion';
import { Fade } from 'react-reveal';

export default function Finish() {
	const data1 = {
		head: 'Module',
		items: [
			'Informations- und Newsbereiche aus den Abteilungen',
			'Mängelzettel/Schadensmeldungen für die Werkstatt',
			'Meldezettel für Kundencenter und Kantine',
			'Terminvereinbarungen von Schulungen',
			'Kompetenztraining (Quiz)',
			'Abruf wichtiger Dokumente',
			'Schnelle Kontaktaufnahme',
			'Interaktive Tarifinformationen',
			'Schnittstellen zu Dienstplänen und Fahrzeugdaten',
			'Und vieles mehr…',
		],
	};
	const data2 = {
		head: 'Vorteile',
		items: [
			'Nach kurzer Zeit sofort loslegen',
			'In kleinen Schritten einführbar (dank des modularen Systems)',
			'Keine zusätzlichen Hardware-Kosten',
			'Nutzerfreundliche, intuitive Oberfläche ',
			'Direkter Draht zum Personal',
			'Rollenbasierte Ansprache unterschiedlicher Nutzergruppen',
			'Schnittstellen und Integration in bestehenden Systemlandschaften',
			'Einfach zu bedienendes Redaktionssystem',
			'Effizienzsteigerung bei internen Abläufen ',
			'Schnelle Amortisation ',
			'Neben App-Anwendung für Smartphones auch auf PC- und Tablet nutzbar',
			'Ersetzt zahlreiche komplizierte Kommunikationswege und Prozesse',
			'Erweiterbar auf andere Betriebsbereiche (Werkstatt, Vertrieb, Leitstelle, u. v. m.)',
		],
	};
	return (
		<div id="Finish">
			<div className="wrapped">
				<Fade up>
					<div className="contact">
						<img src={Aue} alt="Marcus Aue" />
						<p>
							<span className="green">
								Vereinbaren Sie jetzt Ihren persönlichen und unverbindlichen
								Beratungstermin.
							</span>
							<br />
							<br />
							Marcus Aue
							<br />
							<span style={{ fontSize: '1rem' }}>Geschäftsführung</span>
							<br />
							E-Mail: <a href="mailto:m.aue@12-05.de">m.aue@12-05.de</a>
							<br /> Telefon: <a href="tel:0212233879633">0212 2338796-33</a>
						</p>
					</div>
				</Fade>
				<div className="accids">
					<Accordion data={data1} />
					<Accordion data={data2} />
					<a href="https://www.12-05.de/opnv">Unsere ÖPNV-Kompetenz</a>
				</div>
				<div className="footer">
					<div>12-05 Solutions GmbH & Co. KG</div>
					<div className="menu">
						<a href="https://12-05.de/#contacts">Kontakt</a>
						<a href="https://12-05.de/datenschutz">Datenschutz</a>
						<a href="https://12-05.de/impressum">Impressum</a>
					</div>
				</div>
			</div>
		</div>
	);
}
