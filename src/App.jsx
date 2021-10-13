import React from "react";
import "./App.css";

import Body from "./components/Body";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Footer from "./components/footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default (props) => (
  <div className="App">
    <div className="Carousel">
      <a href="https://furia.gg" target="_blank"><Carousel className="slider" /></a>
    </div>
    <div className="Header">
    <Header></Header>
    </div>
    <div className="Body">
      <Body/>
    </div>
    <div>
      <Footer/>
    </div>
  
  </div>
);
