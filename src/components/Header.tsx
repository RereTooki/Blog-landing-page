import React from "react";
import "../App.css";
import bgintromobile from "../assets/images/bg-pattern-intro-mobile.svg";
import bgintrodesktop from "../assets/images/bg-pattern-intro-desktop.svg";
import bgrandom from "../assets/images/icon-arrow-dark.svg";

const Header = () => {
  return (
    <>
      <div className="gradient">
        <picture>
          <source media="(min-width: 768px)" srcSet={bgintrodesktop} />
          <img src={bgintromobile} alt="Background icon design" className="" />
        </picture>
      </div>
    </>
  );
};

export default Header;
