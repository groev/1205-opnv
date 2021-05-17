import React from 'react';
import Speech2 from '../assets/speech2.svg';
import Aue from '../assets/aue.jpg';
import Accordion from './accordion';
import { Zoom } from 'react-reveal';

export default function Finish() {
	const data1 = {
		head: 'Auszug der möglichen Module',
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
		head: 'Vorteile im Überblick',
		items: [
			'Nach kurzer Zeit sofort Loslegen',
			'In kleinen Schritten, dank des modularen Systems - einzuführen',
			'Keine zusätzlichen Hardware-Kosten',
			'Nutzerfreundliche, intuitive Oberfläche ',
			'Direkter Draht zum Personal',
			'Rollenbasierte Ansprache unterschiedlicher Nutzergruppen',
			'Schnittstellen und Integration in bestehenden Systemlandschaften',
			'Einfach zu bedienendes Redaktionssystem',
			'Effizienzsteigerung bei internen Abläufen ',
			'Schnelle Amortisation ',
			'Neben App-Anwendung für Smartphones auch als PC- und Tablet nutzbar',
			'Ersetzt zahlreiche komplizierte Kommunikationswege und Prozesse',
			'Erweiterbar auf andere Betriebsbereiche (Werkstatt, Vertrieb, Leitstelle, u. v. m.)',
		],
	};
	return (
		<div id="Finish">
			<div className="wrapped">
				<Zoom>
					<img src={Speech2} alt="speech2"></img>
				</Zoom>

				<div className="contact">
					<img src={Aue} alt="Marcus Aue" />
					<p>
						<span className="green">
							Vereinbaren Sie jetzt Ihren persönlichen und unverbindlichen
							Vorstellungstermin.
						</span>
						<br />
						<br />
						Marcus Aue
						<br />
						<span style={{ fontSize: '1rem' }}>Geschäftsführung</span>
						<br />
						E-Mail: <a href="mailto:m.aue@12-05.de">m.aue@12-05.de</a>
						<br /> Telefon: <a href="tel:0212233879633">0212 2338796-33</a>
						<br /> Mobil: <a href="tel:015124159933">0151 24159933</a>
					</p>
				</div>

				<div className="accids">
					<Accordion data={data1} />
					<Accordion data={data2} />
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
