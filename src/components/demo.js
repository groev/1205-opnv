import React from "react";
import Fade from "react-reveal/Fade";

export default function Demo() {
  return (
    <Fade left>
      <div id="demo">
        <div className="content">
          <div>
            <h2>Testen Sie die App für drei Monate im Betrieb!</h2>
            <p>
              Jetzt Termin vereinbaren, App ausprobieren und nie wieder missen
              wollen ... denn der Weg zu guter interner Firmenkommunikation war
              noch nie so leicht.
            </p>
          </div>
        </div>
        <div className="bild"></div>
      </div>
    </Fade>
  );
}
