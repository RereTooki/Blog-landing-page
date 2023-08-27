import React from "react";
import "../App.css";
import editormobile from "../assets/images/illustration-editor-mobile.svg";
import editordesktop from "../assets/images/illustration-editor-desktop.svg";

const BodyIntro = () => {
  return (
    <>
      <div className="overflow-hidden flex flex-col pt-[30%] md:pb-[15%] nsm:pt-[15%] items-center font-overpass select-none">
        <h1 className="text-[60px] pb-[8%] leading-[65px] md:text-[35px] md:whitespace-nowrap text-center text-very-dark-blues font-semibold drop-shadow-lg">
          Designed for the future
        </h1>
        <div className="md:flex md:flex-row-reverse md:px-[10%] md:gap-x-[2%]">
          <picture className="md:basis-0 md:grow md:shrink drop-shadow-[0_40px_40px_rgba(0,0,0,0.15)]">
            <source
              className=""
              media="(min-width: 950px)"
              srcSet={editordesktop}
            />
            <img
              src={editormobile}
              alt=""
              className="md:translate-x-[40%] md:scale-[1.7] w-[100%]"
            />
          </picture>

          <div className="md:basis-0 md:grow md:shrink">
            <h1 className="px-[20px] md:px-0 text-[50px] md:text-[25px] pt-[8%] md:pt-0 pb-[4%] md:pb-0 leading-[65px] md:whitespace-nowrap text-center md:text-left text-very-dark-blues font-semibold drop-shadow-lg">
              Introducing an extensible editor
            </h1>
            <p className="text-center md:text-left px-[10%] md:px-0 leading-[42px] md:leading-normal text-[24px] md:text-[16px] tracking-wide md:tracking-normal text-very-dark-grayish-blues/80 drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)]">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
            <h1 className="px-[20px] md:px-0 text-[50px] md:text-[25px] pt-[10%] md:pt-[50px] pb-[5%] md:pb-0 leading-[65px] md:whitespace-nowrap text-center md:text-left text-very-dark-blues font-semibold drop-shadow-lg">
              Robust content management
            </h1>
            <p className="text-center md:text-left px-[10%] md:px-0 leading-[42px] md:leading-normal text-[24px] md:text-[16px] tracking-wide md:tracking-normal text-very-dark-grayish-blues/80 drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)]">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyIntro;
