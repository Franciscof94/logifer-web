import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IPSLogo from "../../images/Marks/IPSLogo.png";
import lomaNegraLogo from "../../images/Marks/lomaNegraLogo.png";
import weberLogo from "../../images/Marks/weberLogo.png";
import fanelliLogo from "../../images/Marks/fanelliLogo.png";
import holcimLogo from "../../images/Marks/holcimLogo.png";
import acindarLogo from "../../images/Marks/acindarLogo.png";
import "./Carousel.css";

const marks = [
  IPSLogo,
  lomaNegraLogo,
  weberLogo,
  fanelliLogo,
  holcimLogo,
  acindarLogo,
];

class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3600,
      autoplaySpeed: 800,
      cssEase: "linear",
      arrows: false,
      className: "slides",
    };

    return (
      <div className="root">
        <div>
          <Slider {...settings}>
            {marks.map((mark, i) => {
              return (
                <img src={mark} alt="Marcas" className="markImage" key={i} />
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

export default SimpleSlider;
