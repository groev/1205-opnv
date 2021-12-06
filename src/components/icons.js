import React, { useState } from "react";
import Comm from "../assets/icons8-communication.svg";
import Zettel from "../assets/icons8-notepad.svg";
import Weeks from "../assets/icons8-stack_of_paper.svg";
import Devices from "../assets/icons8-broadcasting.svg";
import Signal from "../assets/icons8-signal.svg";
import Gerate from "../assets/icons8-gerate.svg";

import Fade from "react-reveal/Fade";

export default function Icons() {
    const input = {
        headline: "Mit der mobiapp lösen Sie",
        subline: " viele  Herausforderungen:",
        items: [
            {
                icon: Comm,
                text: "Eliminierung von Kommunikationsproblemen",
                more:
                    "Das Personal im Dienst braucht die Infos sofort. Nicht verzögert sondern unmittelbar. Beeenden Sie zähe Kommunikationsketten über einzelne Hierarchiestufen.",
            },
            {
                icon: Zettel,
                text: "Abschaffung von \n Aushangkästen",
                more:
                    "Hoher Aufwand - wenig Nutzen. Sparen Sie Zeit und menschliche Ressource für die Pflege der Aushänge.",
            },
            {
                icon: Weeks,
                text: "Auflösung der Zettelwirtschaft ",
                more:
                    'Unmengen an Formularen, je nach Fall. Für alles gibt es einen "anderen" Zettel. Vereinfachen Sie für Ihr Fahrpersonal die Meldung, z. B. bei Schäden, Unfällen & Co.',
            },
            {
                icon: Devices,
                text: "Integration bestehender Systeme ",
                more:
                    "Dienstplan, Urlaub, Ausfahrt, Fahrzeug, ... für jeden Fall eine separte Anwendung. Das muss nicht sein. Erleichtern Sie Ihrem Personal die Suche über ein zentrales Tool.",
            },
            {
                icon: Signal,
                text: "Steigerung der Mitarbeiterperformance ",
                more:
                    "Wichtige Schulungen bis technisches Wissen. Individuelles Coaching des Mitarbeiters. Steigern Sie ganz individuell die Kompetenz jeder einzelnen Person.",
            },
            {
                icon: Gerate,
                text: "Einbindung verschiedener Endgeräte ",
                more:
                    "Ob Handy, Tablet, Screen, oder Desktop PC – nutzen Sie die mobiapp geräteungebunden zum Bespielen sämtlicher Devices.",
            },
        ],
    };

    return (
        <div id='Icons'>
            <div id='wrapped' className='wrapped'>
                <h2>{input.headline}</h2>
                <div className='sub'>{input.subline}</div>
                <div className='grid'>
                    {input.items &&
                        input.items.map((item, idx) => {
                            return <Icon item={item} index={idx} />;
                        })}
                </div>
            </div>
        </div>
    );
}

const Icon = ({ item, index }) => {
    const [open, setOpen] = useState(false);
    return (
        <Fade delay={(index + 1) * 200} left>
            <div className='icon'>
                <img
                    onClick={() => setOpen(true)}
                    src={item.icon}
                    alt={item.text}
                />
                <div onClick={() => setOpen(true)}>{item.text}</div>
                {!open && (
                    <div onClick={() => setOpen(true)} className='more'>
                        Mehr
                    </div>
                )}
                {open && (
                    <div onClick={() => setOpen(false)} className='icon_hover'>
                        <div>{item.more}</div>
                        <div className='less'>Ausblenden</div>
                    </div>
                )}
            </div>
        </Fade>
    );
};
