import React from "react";
import Logo from "../assets/logo.svg";
import Calendar from "../assets/calendar.svg";
import Home from "../assets/home.svg";
import Email from "../assets/email.svg";
import phone from "../assets/phone.svg";
import MobiLogo from "../assets/mobiapp.svg";
import JouriLogo from "../assets/jouri_sw2.png";

export default function Header() {
    return (
        <div id='Header'>
            <div>
                <a href='https://12-05.de'>
                    <img className='logo' src={Logo} alt='Logo' />
                </a>
                <img className='mobi' src={JouriLogo} alt='Jouri' />
            </div>

            <div className='navi'>
                <a href='#wrapped'>Herausforderungen</a>
                <a href='#SingleMockup'>Vorteile</a>
                <a href='#Greentext'>Module</a>
            </div>

            <div>
                <a className='home' href='mailto:mobi-app@12-05.de'>
                    <img className='email' src={Email} alt='email' />
                </a>
                <a
                    style={{ marginRight: "16px" }}
                    className='home'
                    href='tel:0212233879666'>
                    <img className='email' src={phone} alt='phone' />
                </a>
                <a className='contact' href='#Finish'>
                    <img src={Calendar} alt='Kalender' />
                    Termin vereinbaren
                </a>
            </div>
        </div>
    );
}
