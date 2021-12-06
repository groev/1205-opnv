import React from "react";
import Beitrag from "../assets/Beitrag_Aue.pdf";
import Fade from "react-reveal/Fade";

export default function Referenz() {
    return (
        <Fade right>
            <div id='Referenz'>
                <div className='bild'></div>
                <div className='content'>
                    <h3>
                        Lernen Sie unsere Referenz bei den Stadtwerken Solingen
                        kennen!
                    </h3>
                    <ul>
                        <li>Abschaffung von schwarzem Brett und Intranet </li>
                        <li>Einsparung von Hardware- und Wartungskosten </li>
                        <li>Implementierung in nur 6 Monaten</li>
                        <li>Akzeptanz bei 94 % (Nutzerquote) </li>
                        <li>Nutzung des eigenen Smartphones </li>
                        <li>Modularer Aufbau mit individuellen Bausteinen </li>
                        {1 == 2 && (
                            <a
                                target='_blank'
                                rel='noopener noreferrer'
                                class='btn'
                                href={Beitrag}>
                                Mehr darüber in DER NAHVERKEHR 05/2021
                            </a>
                        )}
                    </ul>
                </div>
            </div>
        </Fade>
    );
}
