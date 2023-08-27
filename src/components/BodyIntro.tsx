import React from "react";
import "../App.css";
import editormobile from "../assets/images/illustration-editor-mobile.svg";
import editordesktop from "../assets/images/illustration-editor-desktop.svg";

const BodyIntro = () => {
  return (
    <>
      <div className="overflow-x-hidden flex flex-col pt-[30%] nsm:pt-[15%] items-center font-overpass select-none">
        <h1 className="text-[60px] pb-[8%] leading-[65px] md:text-[70px] md:leading-[75px] text-center text-very-dark-blues font-semibold drop-shadow-lg">
          Designed for the future
        </h1>
        <picture className="w-[115%] md:w-auto drop-shadow-[0_40px_40px_rgba(0,0,0,0.15)]">
          <source media="(min-width: 950px)" srcSet={editordesktop} />
          <img src={editormobile} alt="" className="w-[100%]" />
        </picture>
        <h1 className="px-[20px] text-[50px] pt-[8%] pb-[4%] leading-[65px] md:text-[70px] md:leading-[75px] text-center text-very-dark-blues font-semibold drop-shadow-lg">
          Introducing an extensible editor
        </h1>
        <p className="text-center w-[80%] leading-[42px] text-[24px] tracking-wide text-very-dark-grayish-blues/80 drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)]">
          Blogr features an exceedingly intuitive interface which lets you focus
          on one thing: creating content. The editor supports management of
          multiple blogs and allows easy manipulation of embeds such as images,
          videos, and Markdown. Extensibility with plugins and themes provide
          easy ways to add functionality or change the looks of a blog.
        </p>
        <h1 className="px-[20px] text-[50px] pt-[10%] pb-[5%] leading-[65px] md:text-[70px] md:leading-[75px] text-center text-very-dark-blues font-semibold drop-shadow-lg">
          Robust content management
        </h1>
        <p className="text-center w-[80%] leading-[42px] text-[24px] tracking-wide text-very-dark-grayish-blues/80 drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)]">
          Flexible content management enables users to easily move through
          posts. Increase the usability of your blog by adding customized
          categories, sections, format, or flow. With this functionality, you’re
          in full control.
        </p>
      </div>
    </>
  );
};

export default BodyIntro;
