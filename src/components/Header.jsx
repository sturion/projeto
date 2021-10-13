import React from "react";
import LogoFuria from "./images/FuriaLogo.png";

export default (props) => {
  return (
    <div>
      <header className="Menu">
        <ul>
          <il>
            <img src={LogoFuria} className="header-logo-furia" />
          </il>
        </ul>
        <ul className="PagesList">
          <il className="Page"><div className="effect-one"><a className="PageLink" href="#">Home</a></div></il>
          <il className="Page"><a className="PageLink" href="#">Teams</a></il>
          <il className="Page"><a className="PageLink" href="#">About</a></il>
        </ul>
        <div className="HashFuria">
          <p className="HashtagDDF">#DIADEFURIA</p>
        </div>
      </header>
    </div>
  );
};
