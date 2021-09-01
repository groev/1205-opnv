import React from 'react';
import Logo from '../assets/logo.svg';
import Calendar from '../assets/calendar.svg';
import Home from '../assets/home.svg';
import MobiLogo from '../assets/mobiapp.svg';

export default function Header() {
	return (
		<div id="Header">
			<div>
				<img className="logo" src={Logo} alt="Logo" />{' '}
				<img className="mobi" src={MobiLogo} alt="Mobi" />
			</div>
			<div>
				<a className="contact" href="#Finish">
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
