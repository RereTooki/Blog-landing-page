import React from "react";
import "../App.css";
import editormobile from "../assets/images/illustration-editor-mobile.svg";
import editordesktop from "../assets/images/illustration-editor-desktop.svg";

const BodyIntro = () => {
  return (
    <>
      <div className="overflow-x-hidden flex flex-col pt-[30%] nsm:pt-[15%] items-center font-overpass select-none">
        <h1 className="text-[60px] pb-[8%] leading-[70px] md:text-[70px] md:leading-[75px] text-center">
          Designed for the future
        </h1>
        <picture className="w-[115%] md:w-auto">
          <source media="(min-width: 950px)" srcSet={editordesktop} />
          <img src={editormobile} alt="" className="w-[100%]" />
        </picture>
      </div>
    </>
  );
};

export default BodyIntro;
