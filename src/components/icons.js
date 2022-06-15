import React, { useState } from "react";
import Comm from "../assets/n-chart.svg";
import Zettel from "../assets/n-measure.svg";
import Weeks from "../assets/n-smile.svg";
import Devices from "../assets/company.svg";
import Gerate from "../assets/devices-new.svg";
import Signal from "../assets/info.svg";
import Fade from "react-reveal/Fade";
import Accordion from "./accordion";

export default function Icons() {
  const accItems = [
    {
      head: "fördert die Motivation",
      content: (
        <>
          <p>
            Immer auf dem neuesten Stand, Wissen statt Ahnen und ständig im
            Austausch mit den Kollegen: So erhöht jouri die Motivation, stärkt
            die Unternehmensbindung und lässt das Team näher zusammenrücken:
            jouri macht glücklich!
          </p>
          <ul>
            <li>
              Alle Mitarbeiter können gleichzeitig informiert werden, es fühlt
              sich niemand benachteiligt.
            </li>
            <li>
              Über Umfragen können Mitarbeiter aktiv an der Gestaltung des
              Unternehmens teilnehmen – die Identifikation mit dem Unternehmen
              steigt.
            </li>
            <li>
              Jeder kann Redakteur werden und wichtige Informationen aus seiner
              Abteilung mit Kollegen teilen – das Unternehmen rückt näher
              zusammen und die Fluktuation sinkt.
            </li>
            <li>
              Ärger über zu spät erhaltene Informationen oder Unwissenheit
              aufgrund fehlender Informationen wird vermieden.
            </li>
          </ul>
          <p>
            Use Case: In der Geschäftsführung kommt es zu einem Wechsel. Statt
            aus der Zeitung erfährt der Mitarbeiter es diesmal in der App – noch
            bevor es überhaupt öffentlich gemacht wurde. Er fühlt sich
            wertgeschätzt und ist motivierter.
          </p>
        </>
      ),
    },
    {
      head: "vereinfacht die Kommunikation",
      content: (
        <>
          <p>
            Information, Prozessoptimierung, Verknüpfung bestehender
            Anwendungen: jouri vereint das tägliche Handwerkszeug in einer App,
            erleichtert den Zugang und informiert verständlich und direkt – auch
            per Push-Nachricht: jouri ist kinderleicht!
          </p>
          <ul>
            <li>
              Die Mitarbeiter haben über jouri Zugriff auf wichtige Information,
              digitale Formulare und weitere Anwendungen. Das erleichtert den
              Alltag spürbar.
            </li>
          </ul>
          <p>
            Use Case: Jeden Morgen öffnet eine Mitarbeiterin als erstes ihre
            jouri App. Sie erhält auf der Startseite alle wichtigen
            Informationen auf einen Blick und kann anschließend noch ihren
            Urlaubsantrag digital ausfüllen und den Dienstplan einsehen. Ohne
            die App zu verlassen, ohne zu überlegen, wo sie was findet.
          </p>
        </>
      ),
    },
    {
      head: "macht Spaß",
      content: (
        <>
          <p>
            Jederzeit zugänglich, einfach zu bedienen, hilfreich im
            Arbeitsalltag: Da bleibt der Spaß nicht aus. Dank ansprechender
            Darstellung und spannenden Inhalten wird jouri gerne genutzt, sogar
            vor Dienstbeginn. jouri wird geliebt!
          </p>
          <ul>
            <li>
              Im Gegensatz zu einer E-Mail oder einem Schwarzen Brett werden die
              Informationen in jouri optisch ansprechend dargestellt.
            </li>
            <li>
              Interessante und relevante Inhalte sorgen für Freude beim Lesen
              und den ein oder anderen Like.
            </li>
            <li>
              Die Abkürzung von analogen Prozessen und schnelles Feedback machen
              die App zum gerne genutzten täglichen Begleiter.
            </li>
          </ul>
          <p>
            Use Case: Der neue Mitarbeiter stellt sich seiner Abteilung per App
            mit Bild und einigen amüsanten Fakten vor. Das Lesen macht Spaß und
            ein erstes Gesprächsthema für den ersten Arbeitstag ist auch
            gefunden – außerdem können Sie dem Namen schon jetzt ein Gesicht
            zuordnen.{" "}
          </p>
        </>
      ),
    },
    {
      head: "erregt Aufmerksamkeit",
      content: (
        <>
          <p>
            Top-informiert zu jeder Zeit: Was sich im Privaten durch
            Nachrichten-Apps etabliert hat, ist auch mit jouri möglich.
            Push-Nachrichten erzeugen bei besonders dringlichen Informationen,
            genau die Aufmerksamkeit, die sie verdienen: jouri wird gehört!
          </p>
          <ul>
            <li>
              Mit Push-Nachrichten lenken Sie zusätzliche Aufmerksamkeit auf
              besonders wichtige Informationen.
            </li>
            <li>
              Push-Nachrichten erhöhen die Wahrscheinlichkeit, dass eine News
              innerhalb kürzester Zeit gelesen wird erheblich.{" "}
            </li>
          </ul>
          <p>
            Use Case: An der Endhaltestelle macht der Busfahrer seine verdiente
            Pause. Während er einen Kaffee trinkt und sein Butterbrot isst,
            wirft er natürlich einen Blick auf sein privates Smartphone. Nachdem
            er einige Privatnachrichten beantwortet hat, ploppt eine
            Push-Nachricht seiner Leitstelle auf: Ein Großbrand stört den
            Verkehr massiv und führt zu Großflächigen Umleitungen. Er ist froh,
            dass er diese Information noch rechtzeitig erhalten hat.{" "}
          </p>
        </>
      ),
    },
    {
      head: "steht für Flexibilität",
      content: (
        <>
          <p>
            Digitales schwarzes Brett, Tool-Center und Schlüsselbund – alles
            kann, nichts muss. Die Individualisierung durch zahlreiche Module
            oder Funktionen steht bei jouri im Fokus und kann nach und nach
            erfolgen. jouri passt sich an!
          </p>
          <ul>
            <li>
              Die Basisversion von jouri kann individuell je nach Anforderung
              durch verschiedene Packages um Module und Funktionen ergänzt
              werden.
            </li>
            <li>
              Die Mitarbeiter können so nach und nach an die App herangeführt
              werden und mitentscheiden, welche Funktionen zukünftig integriert
              werden sollen.
            </li>
          </ul>
          <p>
            Use Case: Nach den ersten Monaten Nutzung hat sich jouri als
            Informationsplattform etabliert und wird täglich genutzt. Aus Ihrem
            Team wird der Wunsch an Sie herangetragen, künftig auch
            Urlaubsanträge und Schadensmeldungen digital abwickeln zu können.
            Sie entsprechen dem Wunsch, machen Ihre Mitarbeiter glücklich und
            tragen zur hohen Akzeptanz der App bei.{" "}
          </p>
        </>
      ),
    },
  ];
  const input = {
    headline: "Mit jouri haben Sie",
    subline: "viele Vorteile:",
    items: [
      {
        icon: Comm,
        text: "steigert die Produktivität",
        more: (
          <>
            <p>
              Kurze Wege, direktes Feedback, aktuelle Informationen: jouri spart
              Zeit, und vereinfacht Prozesse. Ein Kilometer gesparte
              Fahrstrecke, ein Gang weniger in die Zentrale oder zwei
              abgewickelte Urlaubsanträge in der Zeit von einem: jouri lohnt
              sich!
            </p>{" "}
            <ul>
              <li>
                Durch die Digitalisierung analoger Prozesse werden Zeit,
                Materialien und Personalkosten eingespart. Die Arbeitsleistung
                des Teams wird so gesteigert.
              </li>
              <li>
                Aktuelle Informationen vermeiden Verzögerungen im Betrieb und
                beugen Kundenbeschwerden vor.
              </li>
            </ul>
            <p>
              Use Case: Ein Busfahrer bekommt vor Dienstbeginn die Information
              über jouri, dass auf seiner Strecke eine Sperrung vorliegt. Er
              spart den Weg ans Schwarze Brett und steht nicht im Stau, weil er
              die empfohlene Umleitung fährt. Die Fahrgäste sind zufrieden, eine
              Verspätung wird vermieden und Diesel eingespart.
            </p>
          </>
        ),
      },
      {
        icon: Zettel,
        text: "macht Kommunikation messbar",
        more: (
          <>
            <p>
              Reportings, Lesebestätigungen oder Likes: Zu wissen, bei wie
              vielen Mitarbeitern eine Information ankommt, ist immer wertvoll
              und immer möglich. So wird Kommunikation nachvollziehbar und
              zielgerichtet: jouri schafft Transparenz!
            </p>
            <ul>
              <li>
                Geschäftsführung und Abteilungsleiter wissen, wie schnell sich
                Informationen verbreiten und auf welchem Informationsstand der
                Großteil des Teams ist.
              </li>
              <li>
                Redakteure können sehen, wie ihre Beiträge ankommen und was im
                Team als besonders interessant wahrgenommen wird.
              </li>
            </ul>
            <p>
              Use Case: Eine neue Coronaverordnung tritt kurzfristig am nächsten
              Morgen in Kraft. Über jouri setzen Sie Ihre Mitarbeiter in
              Kenntnis, dass Sie ab morgen auf dem Betriebsgelände Maske tragen
              müssen. Ihre Information wird noch vor Betriebsbeginn von 95
              Prozent ihrer Angestellten gelesen. Sie können auf weitere
              Kommunikationsmittel verzichten und müssen kein zusätzliches
              Personal an den Eingang senden.
            </p>
          </>
        ),
      },
      {
        icon: Weeks,
        text: "besticht durch Nutzerfreundlichkeit",
        more: (
          <>
            <p>
              Intuitiv, zeitgemäß, bequem: Ohne Schulung auf Anhieb verständlich
              und ganz auf den Nutzer abgestimmt. Die ansprechende Oberfläche
              von jouri nimmt alle im Team mit und vereint Generationen: jouri
              ist für jeden da!
            </p>
            <ul>
              <li>
                jouri ist intuitiv und ohne Schulung verständlich. Die
                Nutzerfreundlichkeit erhöht die Akzeptanz und ermöglicht es,
                Informationen schnell zu erfassen.{" "}
              </li>
            </ul>
            <p>
              Use Case: Die interne Kommunikation wird auf eine App umgestellt.
              Nach der Installation und der Anmeldung werden Ihnen in einem
              Tutorial direkt in der App alle wichtigen Funktionen erklärt.
              Obwohl Sie sich als weniger technik-affin bezeichnen würden,
              finden Sie ich auf Anhieb in der App zurecht, sind begeistert und
              nutzen sie regelmäßig.
            </p>
          </>
        ),
      },
      {
        icon: Devices,
        text: "ermöglicht unternehmensübergreifenden Einsatz",
        more: (
          <>
            <p>
              Ein Projekt, viele Unternehmen, die perfekte Kommunikationslösung:
              Schnell eingerichtet, ohne Hardwarekosten, dabei sicher und
              einfach. So wird projektbezogene Kommunikation zwischen
              Unternehmen kurzfristig möglich. jouri eröffnet neue
              Möglichkeiten!
            </p>
            <ul>
              <li>
                Intuitive Bedienung und kostengünstige Einführung machen den
                unternehmensübergreifenden Einsatz möglich.{" "}
              </li>
              <li>
                Die Installation auf privaten oder dienstlichen Smartphones ist
                möglich.
              </li>
              <li>
                Mehrer Unternehmen können die gleiche App für eine festgelegte
                Projektlaufzeit nutzen.
              </li>
            </ul>
            <p>
              Use Case: Sie planen gemeinsam mit Partnerunternehmen ein großes
              Projekt. In den nächsten zwei Jahren wird dafür viel
              Abstimmungsarbeit geleistet werden müssen. Dank jouri haben Sie
              einen Kanal, in dem alle wichtigen projektbezogenen Informationen
              ausgetauscht werden. Die schnelle Einrichtung ohne zusätzliche
              Hardwarekosten und die Aufteilung der Lizenzkosten haben alle
              Partner überzeugt.
            </p>
          </>
        ),
      },
      {
        icon: Gerate,
        text: "läuft auf allen Geräten",
        more: (
          <>
            <p>
              Smartphone, Tablet, Desktopanwendung: Die Auswahl des Endgeräts
              wird dem Kunden überlassen, denn jouri erfüllt alle
              Voraussetzungen. Auch Bildschirme, TFT’s oder andere digitale
              Touch-Points können über jouri gespeist werden: jouri kann
              Multitasking!
            </p>

            <ul>
              <li>
                Im Gegensatz zu anderen Lösungen ist jouri geräteunabhängig
                nutzbar.
              </li>
              <li>
                Die App kann sowohl auf Smartphones, Tablets als auch als
                Desktop-Anwendung genutzt werden.
              </li>
              <li>
                Zusätzlich können über dasselbe CMS-System Bildschirme oder
                TFT’s mit aktuellen Informationen bespielt werden.
              </li>
            </ul>
            <p>
              Use Case: Sowohl der Mitarbeiter im Fahrdienst, der über ein
              Dienst-Tablet verfügt, als auch der Werkstattmitarbeiter, der
              weder einen eigenen PC noch ein Dienstgerät hat, sollen die neue
              Informationslösung nutzen. Glücklicherweise ermöglicht jouri
              beides – die App wird genau dort installiert, wo der Mitarbeiter
              sie nutzen möchte – egal ob privates Smartphone, Dienst-Tablet
              oder Desktop-Anwendung.
            </p>
          </>
        ),
      },
      {
        icon: Signal,
        text: "sorgt für hohe Akzeptanz durch gezielte Information",
        more: (
          <>
            <p>
              Immer auf einen Blick, immer relevant: Die persönliche Startseite
              garantiert, dass nur ausgewählte, wichtige Informationen angezeigt
              werden. So gebietet jouri der Informationsflut Einhalt und
              vermeidet Überforderung: jouri informiert einzigartig!
            </p>
            <ul>
              <li>
                Auf der persönlichen Startseite finden Nutzer alle wichtigen
                Informationen für ihren Tag, ohne sich diese zusammensuchen zu
                müssen.
              </li>
              <li>
                Informationen werden nutzergruppenspezifisch ausgespielt, sodass
                nur relevante Informationen angezeigt werden.
              </li>
              <li>
                Die Anzahl an Informationen je Nutzer wird so gering wie möglich
                gehalten, um Überforderung zu vermeiden.
              </li>
            </ul>
            <p>
              Use Case: Bisher mussten Sie jeden Morgen auf dem Schwarzen Brett
              oder per E-Mail die wichtigen Informationen für Ihren Tag
              herausfiltern. Dank jouri öffnen Sie morgens die App und sehen mit
              einem Blick auf ihre persönliche Startseite alle Informationen,
              die seit Ihrem letzten Login neu dazugekommen sind. Es sind genau
              die Informationen, die sie für einen erfolgreichen Tag benötigen.
            </p>
          </>
        ),
      },
    ],
  };

  return (
    <div id="Icons">
      <div id="wrapped" className="wrapped">
        <h2>{input.headline}</h2>
        <div className="sub">{input.subline}</div>
        <div className="grid">
          {input.items &&
            input.items.map((item, idx) => {
              return <Icon item={item} index={idx} />;
            })}
        </div>
        <div style={{ marginTop: "2rem" }}>
          <h3>Weitere Vorteile:</h3>
          {accItems &&
            accItems.map((item, idx) => {
              return <Accordion item={item} index={idx} />;
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
      <div className="icon">
        <img onClick={() => setOpen(true)} src={item.icon} alt={item.text} />
        <div onClick={() => setOpen(true)}>{item.text}</div>
        {!open && (
          <div onClick={() => setOpen(true)} className="more">
            Mehr
          </div>
        )}
        {open && (
          <div onClick={() => setOpen(false)} className="icon_hover">
            <div>{item.more}</div>
            <div className="less">Ausblenden</div>
          </div>
        )}
      </div>
    </Fade>
  );
};
