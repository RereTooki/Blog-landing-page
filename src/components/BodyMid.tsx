import React from "react";
import "../App.css";
import circles from "../assets/images/bg-pattern-circles.svg";
import phones from "../assets/images/illustration-phones.svg";

const BodyMid = () => {
  return (
    <>
      <div className="gradient2 font-overpass text-center select-none flex flex-col">
        <div className="relative h-[250px]">
          <img
            className="absolute Sh-[320px] Sw-[320px] bottom-[1px]"
            src={phones}
            alt="A couple of phones"
          />
        </div>
        <div className="px-[10%] pt-0 pb-[40px]">
          <h1 className="text-[50px] leading-[60px]  font-semibold text-whites">
            State of the Art Infrastructure
          </h1>
          <p className="leading-[42px] text-[24px] tracking-wide text-grayish-blues">
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
