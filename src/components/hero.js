import React from "react";
import Bus from "../assets/opnv.mp4";
import Fade from "react-reveal/Fade";
import Slider from "react-slick";

export default function Hero() {
  const input = {
    subline: "Einfach und gut informiert:",
    videosrc: Bus,
  };

  const settings = {
    arrows: false,
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div id="Hero">
      <video autoplay="autoplay" muted loop>
        <source type="video/mp4" src={Bus}></source>
      </video>
      <Fade left>
        <div className="content">
          <span>{input.subline}</span>
          <h1>
            jouri – der tägliche Job-Begleiter
            <br />
            für Ihre Mitarbeiter!
          </h1>
          <a className="cta" href="#Finish">
            Hier Vorstellungstermin vereinbaren
          </a>
        </div>
      </Fade>
    </div>
  );
}
