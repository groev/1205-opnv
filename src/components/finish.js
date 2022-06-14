import React, { useState } from "react";
import Speech2 from "../assets/speech2.svg";
import Aue from "../assets/marcus.jpg";
import Accordion from "./accordion";
import { Fade } from "react-reveal";
import { Formik, Form, Field } from "formik";
import axios from "axios";

export default function Finish() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const data1 = {
    head: "Module",
    items: [
      "Informations- und Newsbereiche aus den Abteilungen",
      "Mängelzettel/Schadensmeldungen für die Werkstatt",
      "Meldezettel für Kundencenter und Kantine",
      "Terminvereinbarungen von Schulungen",
      "Kompetenztraining (Quiz)",
      "Abruf wichtiger Dokumente",
      "Schnelle Kontaktaufnahme",
      "Interaktive Tarifinformationen",
      "Schnittstellen zu Dienstplänen und Fahrzeugdaten",
      "Und vieles mehr…",
    ],
  };
  const data2 = {
    head: "Vorteile",
    items: [
      "Nach kurzer Zeit sofort loslegen",
      "In kleinen Schritten einführbar (dank des modularen Systems)",
      "Keine zusätzlichen Hardware-Kosten",
      "Nutzerfreundliche, intuitive Oberfläche ",
      "Direkter Draht zum Personal",
      "Rollenbasierte Ansprache unterschiedlicher Nutzergruppen",
      "Schnittstellen und Integration in bestehenden Systemlandschaften",
      "Einfach zu bedienendes Redaktionssystem",
      "Effizienzsteigerung bei internen Abläufen ",
      "Schnelle Amortisation ",
      "Neben App-Anwendung für Smartphones auch auf PC- und Tablet nutzbar",
      "Ersetzt zahlreiche komplizierte Kommunikationswege und Prozesse",
      "Erweiterbar auf andere Betriebsbereiche (Werkstatt, Vertrieb, Leitstelle, u. v. m.)",
    ],
  };
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
    date: "",
  };

  // make a submit function for the form that uses axios and submits to formspark.io
  const submit = (values) => {
    setError(null);
    if (
      !values.name.length ||
      !values.email.length ||
      !values.phone.length ||
      !values.message.length ||
      !values.date.length
    ) {
      setError("Bitte füllen Sie alle Felder aus.");
      return;
    }
    axios
      .post("https://submit-form.com/LhPmSzti", values)
      .then((res) => {
        setIsSubmitted(true);
      })
      .catch((err) => {
        setError("Es ist ein Fehler aufgetreten");
        console.log(err);
      });
  };

  return (
    <div id="Finish">
      <div className="wrapped">
        <h2 className="green">
          Möchten Sie mehr über jouri wissen, dann vereinbaren
          <br />
          Sie jetzt Ihren persönlichen und unverbindlichen Beratungstermin.
        </h2>
        {!isSubmitted ? (
          <Formik onSubmit={submit} initialValues={initialValues}>
            <Form>
              <div className="field-group">
                <label>Name</label>
                <Field name="name" placeholder="" />
              </div>
              <div className="field-group">
                <label>E-Mail Adresse</label>
                <Field name="email" placeholder="" />{" "}
              </div>

              <div className="field-group">
                <label>Telefon</label>
                <Field name="phone" placeholder="" />{" "}
              </div>

              <div className="field-group">
                <label>Nachricht</label>
                <Field name="message" placeholder="" />{" "}
              </div>

              <div className="field-group">
                <label>Wunschtermin</label>
                <Field name="date" placeholder="" type="date" />{" "}
              </div>
              <button type="submit">Absenden</button>
              {error && <p className="error">{error}</p>}
            </Form>
          </Formik>
        ) : (
          <p>Ihre Anfrage wurde erfolgreich verschickt.</p>
        )}
      </div>
      <div className="wrapped">
        <Fade up>
          <div className="contact">
            <img src={Aue} alt="Marcus Aue" />
            <p>
              <br />
              <br />
              Marcus Aue
              <br />
              <span style={{ fontSize: "1rem" }}>Geschäftsführung</span>
              <br />
              E-Mail:{" "}
              <a style={{ color: "#b7d12a" }} href="mailto:m.aue@12-05.de">
                m.aue@12-05.de
              </a>
              <br /> Telefon:{" "}
              <a style={{ color: "#b7d12a" }} href="tel:0212233879633">
                0212 2338796-33
              </a>
            </p>
          </div>
        </Fade>
        <div className="accids">
          <a href="https://www.12-05.de/opnv">Unsere ÖPNV-Kompetenz</a>
        </div>
        <div className="hinweis">
          <p>
            Aus Gründen der besserern Lesbarkeit verwenden wir das generische
            Maskulinum. Die verkürtze Sprachform hat redaktionelle Gründe und
            ist wertfrei.
          </p>
        </div>
        <div className="footer">
          <div>12-05 Solutions GmbH & Co. KG</div>
          <div className="menu">
            <a href="https://12-05.de/#contacts">Kontakt</a>
            <a href="https://12-05.de/datenschutz">Datenschutz</a>
            <a href="https://12-05.de/impressum">Impressum</a>
          </div>
        </div>
      </div>
    </div>
  );
}
