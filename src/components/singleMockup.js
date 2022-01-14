import React from "react";
import Phone from "../assets/smartmockups.jpg";
import Fade from "react-reveal/Fade";

export default function SingleMockup() {
    const input = {
        head:
            "JOURI – eine attraktive Plattform für Mobilitätsunternehmen im Schichtbetrieb! ",
        arguments: [
            "Nutzer*innen bedienen die App intuitiv. ",
            "Fahrer*innen werden im Handumdrehen informiert. ",
            "Empfänger*innen werden sicher und messbar erreicht. ",
            "Prozesse werden vereinfacht (z. B. „Meldezettel“). ",
            "Module ermöglichen einen individuellen Aufbau.",
            "Fahrer*innen lieben die App! ",
        ],
    };
    return (
        <div id='SingleMockup'>
            <div className='wrapped'>
                <Fade left>
                    <img src={Phone} alt='handy' />
                </Fade>
                <div className='content'>
                    <h2>{input.head}</h2>
                    <ul>
                        {input.arguments &&
                            input.arguments.map((argument, idx) => (
                                <li key={`argument-${idx}`}>{argument}</li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
