import React from 'react';
import Logo from '../assets/logo.svg';
import Calendar from '../assets/calendar.svg';
import Home from '../assets/home.svg';

export default function Header() {
	return (
		<div id="Header">
			<img src={Logo} alt="Logo" />
			<div>
				<a className="contact" href="mailto:hello@12-05.de">
					<img src={Calendar} alt="Kalender" />
					Termin vereinbaren
				</a>
				<a className="home" href="https://www.12-05.de">
					<img src={Home} alt="Home" />
				</a>
			</div>
		</div>
	);
}
