import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import IMG1 from "../assets/3.jpg";
import IMG2 from "../assets/4.jpg";

const Services = () => {
  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        interval={1000}
      >
        <div>
          <img src={IMG1} alt="Item1" />
          <p>Full Stack</p>
        </div>
        <div>
          <img src={IMG2} alt="Item2" />
          <p>Peer-to-peer Support</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
