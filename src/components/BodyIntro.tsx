import React from "react";
import "../App.css";
import editormobile from "../assets/images/illustration-editor-mobile.svg";
import editordesktop from "../assets/images/illustration-editor-desktop.svg";

const BodyIntro = () => {
  return (
    <>
      <div className="overflow-hidden flex flex-col pt-[30%] nsm:pb-[20%] nsm:pt-[15%] items-center font-overpass select-none">
        <h1
          className="text-[50px] nsm:pb-[2%] md:pb-[8%] leading-[60px] nsm:text-[35px] nsm:whitespace-nowrap text-center text-very-dark-blues font-semibold drop-shadow-lg"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          Designed for the future
        </h1>
        <div className="nsm:flex nsm:flex-row-reverse nsm:px-[10%] nsm:gap-x-[2%]">
          <picture
            className="nsm:basis-0 nsm:grow nsm:shrink drop-shadow-[0_40px_40px_rgba(0,0,0,0.15)]"
            data-aos="zoom-in-left"
            data-aos-duration="500"
          >
            <source
              className=""
              media="(min-width: 760px)"
              srcSet={editordesktop}
            />
            <img
              src={editormobile}
              alt=""
              className="pt-[110px] nsm:pt-0 nsm:translate-x-[44%] md:translate-x-[40%] nsm:translate-y-[60%] md:translate-y-0 nsm:scale-[1.7] w-[100%]"
            />
          </picture>

          <div
            className="nsm:basis-0 nsm:grow nsm:shrink"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <h1 className="px-[20px] nsm:px-0 text-[40px] nsm:text-[25px] pt-[18%] nsm:pt-[8%] pb-[4%] nsm:pb-0 leading-[50px] nsm:whitespace-nowrap text-center nsm:text-left text-very-dark-blues font-semibold drop-shadow-lg">
              Introducing an extensible editor
            </h1>
            <p className="text-center nsm:text-left px-[10%] nsm:px-0 leading-[35px] nsm:leading-normal text-[20px] nsm:text-[16px] tracking-wide nsm:tracking-normal text-very-dark-grayish-blues/80 drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)]">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
            <h1 className="px-[20px] nsm:px-0 text-[40px] nsm:text-[25px] pt-[13%] nsm:pt-[50px] pb-[5%] nsm:pb-0 leading-[50px] nsm:whitespace-nowrap text-center nsm:text-left text-very-dark-blues font-semibold drop-shadow-lg">
              Robust content management
            </h1>
            <p className="text-center nsm:text-left px-[10%] nsm:px-0 leading-[35px] nsm:leading-normal text-[20px] nsm:text-[16px] tracking-wide nsm:tracking-normal text-very-dark-grayish-blues/80 drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)]">
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
