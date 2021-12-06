import React from "react";
import SlideImg from "../assets/SWS_App160.jpg";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

export default function SliderBlock() {
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
        <div className='slider' style={{ backgroundImage: `url(${SlideImg})` }}>
            <div className='slide-wrapper'>
                <Slider {...settings}>
                    <div className='slide'>„Alle Infos, die ich brauche“</div>
                    <div className='slide'>„Ich bin immer up to date“</div>
                    <div className='slide'>„Egal wann. Egal wo!“</div>
                    <div className='slide'>„Und Spaß macht es auch noch“</div>
                </Slider>
            </div>
        </div>
    );
}
