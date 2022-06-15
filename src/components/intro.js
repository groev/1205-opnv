import React, { useState } from "react";
import Inform from "../assets/vorschau.png";
import Fade from "react-reveal/Fade";
import ModalVideo from "react-modal-video";

export default function Intro() {
  const [isOpen, setIsOpen] = useState(false);
  const input = {
    sub: "Wie läuft’s mit Ihrer Informationspflicht? Ist Ihre interne Kommunikation bisher aufwändig bis herausfordernd? Erreichen Sie alle Mitarbeiter*innen in kürzester Zeit?",
  };
  return (
    <div id="intro">
      <div className="wrapped">
        <Fade right>
          <div className="img-wrapper" onClick={() => setIsOpen(true)}>
            <img className="youtube" src={Inform} alt="Informieren" />
            Video öffnen
          </div>
        </Fade>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="mULEEUWWOHE"
          onClose={() => setIsOpen(false)}
        />
        <h2>Bon jouri!</h2>
        <p>
          Sie möchten die Produktivität Ihrer Mitarbeiter* erhöhen, ihre
          Motivation steigern und den Aufwand verringern?
        </p>
        <p> jouri ist eine App-Lösung für Teams im ÖPNV und Omnibusbetrieb.</p>
      </div>
    </div>
  );
}
