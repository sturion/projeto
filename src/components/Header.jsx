import React from "react";
import LogoFuria from "./images/FuriaLogo.png";
import { BrowserRouter, Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header className="Menu">
        <ul>
          <il>
            <img src={LogoFuria} className="header-logo-furia" />
          </il>
        </ul>
        <ul className="pages-list">
          <Link to="/" className="underline">Home</Link>
          <Link to="/teams" className="underline">Teams</Link>
          <Link to="/sobre" className="underline">Manifesto</Link>
        </ul>
        <div className="HashFuria">
          <p className="HashtagDDF">#DIADEFURIA</p>
        </div>
      </header>
    </div>
  );
};
export default Header;
