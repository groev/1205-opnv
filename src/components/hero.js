import React from "react";
import Bus from "../assets/opnv.mp4";
import Fade from "react-reveal/Fade";
import Slider from "react-slick";

export default function Hero() {
    const input = {
        subline: "Mit der mobiapp profitiert Ihr Personal: ",
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
        <div id='Hero'>
            <video autoplay='autoplay' muted loop>
                <source type='video/mp4' src={Bus}></source>
            </video>
            <Fade left>
                <div className='content'>
                    <span>{input.subline}</span>
                    <h1>
                        Leiten Sie Informationen dahin,
                        <br />
                        wo sie wirklich gebraucht werden!
                    </h1>
                </div>
            </Fade>
            <div className='splash'>
                <Slider {...settings}>
                    <div className='slide'>
                        <a
                            href='#Finish'
                            style={{ textDecoration: "none", color: "black" }}>
                            Hier Beratungstermin vereinbaren
                        </a>
                    </div>
                    <div className='slide'>
                        <a
                            href='#demo'
                            style={{ textDecoration: "none", color: "black" }}>
                            Kostenlose Test-Version anfordern
                        </a>
                    </div>
                </Slider>
            </div>
        </div>
    );
}
