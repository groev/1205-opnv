import React from "react";
import Phone from "../assets/smartmockups.jpg";
import Fade from "react-reveal/Fade";

export default function SingleMockup() {
  const input = {
    head: "JOURI – eine attraktive Plattform für Mobilitätsunternehmen im Schichtbetrieb! ",
    arguments: [
      "verbindet gute Information mit der Anbindung an bestehende Anwendungen und der Digitalisierung analoger Prozesse",
      "ist als App sowohl auf privaten Smartphones als auch auf Diensthandys und -Tablets einsetzbar",
      "lässt sich von Redakteuren sowie Nutzern einfach bedienen und ist in wenigen Wochen einsatzbereit",
      "kann individuell gestaltet und modular aufgebaut werden",
      "bietet einen niedrigen Einstiegspreis dank Lizenzmodell.",
    ],
  };

  return (
    <div id="SingleMockup">
      <div className="wrapped">
        <Fade left>
          <img src={Phone} alt="handy" />
        </Fade>
        <div className="content">
          <h2>Was jouri ausmacht</h2>
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
