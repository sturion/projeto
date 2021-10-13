import React from "react";
import { Carousel } from "react-responsive-carousel";
import slider1 from "./images/slider1.png"
import slider2 from "./images/slider2.png"
import slider3 from "./images/slider3.png"

export default () => (
  <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} showArrows={false} transitionTime="10">
    <div>
      <img alt="" src={slider1} className="sliderPic"/>
    </div>
    <div>
      <img alt="" src={slider2} className="sliderPic"/>
    </div>
  </Carousel>
);