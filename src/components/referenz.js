import React from "react";
import Beitrag from "../assets/Beitrag_Aue.pdf";
import Fade from "react-reveal/Fade";

export default function Referenz() {
  return (
    <Fade right>
      <div id="Referenz">
        <div className="bild"></div>
        <div className="content">
          <h3>Was wir bei den Stadtwerken Solingen erreicht haben:</h3>
          <ul>
            <li>95 % Nutzerquote</li>
            <li>Abschaffung vom Schwarzen Brett und Intranet </li>
            <li>Einsparung von Hardware- und Wartungskosten </li>
            <li>Implementierung in nur 6 Monaten</li>
            <li>Nutzung des eigenen Smartphones</li>
            {1 == 2 && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                class="btn"
                href={Beitrag}
              >
                Mehr darüber in DER NAHVERKEHR 05/2021
              </a>
            )}
          </ul>
        </div>
      </div>
    </Fade>
  );
}
