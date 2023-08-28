import React from "react";
import "../App.css";
import circles from "../assets/images/bg-pattern-circles.svg";
import phones from "../assets/images/illustration-phones.svg";

const BodyMid = () => {
  return (
    <>
      <div className=" overflow-hidden relative gradient2 font-overpass text-center select-none flex flex-col">
        <img
          className="tsranslate-y-[-44%] basis-0 absolute top-[-220px]"
          src={phones}
          alt="A couple of phones"
        />
        <div className="px-[10%] pt-[50%] basis-0 ">
          <h1 className="text-[50px] leading-[60px]  font-semibold text-whites">
            State of the Art Infrastructure
          </h1>
          <p className="leading-[32px] text-[24px] tracking-wide text-grayish-blues">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </>
  );
};

export default BodyMid;
