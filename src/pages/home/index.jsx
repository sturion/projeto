import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from "../../components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Body from "../../components/Body";

const Home = () =>{
  return (
    <div>
      <div className="Carousel">
      <a href="https://furia.gg" target="_blank"><Carousel className="slider" /></a>
    </div>
      <nav>
        <ul>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/teams">Teams</Link>
          </li>
        </ul>
      </nav>
      <Body />
    </div>
  );
}

export default Home;