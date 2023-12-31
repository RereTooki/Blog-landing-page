import React from "react";
import "../App.css";
import logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <>
      <div className="items-center bg-very-dark-black-blues overflow-hidden select-none rounded-tr-[150px]">
        <div className="items-center nsm:items-start flex flex-col nsm:flex-row nsm:justify-evenly pt-[80px] nsm:pt-[70px] ">
          <div className="" data-aos="zoom-in-right" data-aos-duration="700">
            <img className="" src={logo} alt="Blogr's logo" />
          </div>
          <div
            className="flex flex-col"
            data-aos="zoom-in"
            data-aos-duration="700"
          >
            <div>
              <button className="pt-[40px] nsm:pt-0">
                <p className="text-whites">Product</p>
              </button>
            </div>
            <div>
              <button className=" pt-[30px]">
                <p className="text-grayish-blues hover:underline underline-offset-4">
                  Overview
                </p>
              </button>
            </div>
            <div>
              <button className=" pt-[5px]">
                <p className="text-grayish-blues hover:underline underline-offset-4">
                  Pricing
                </p>
              </button>
            </div>
            <div>
              <button className=" pt-[5px]">
                <p className="text-grayish-blues hover:underline underline-offset-4">
                  Marketplace
                </p>
              </button>
            </div>
            <div>
              <button className=" pt-[5px]">
                <p className="text-grayish-blues hover:underline underline-offset-4">
                  Features
                </p>
              </button>
            </div>
            <div>
              <button className=" pt-[5px] pb-[50px]">
                <p className="text-grayish-blues hover:underline underline-offset-4">
                  Integrations
                </p>
              </button>
            </div>
          </div>
          <div
            className="flex flex-col pr-[20px]"
            data-aos="zoom-in"
            data-aos-duration="700"
          >
            <div>
              <button className="">
                <p className="text-whites">Company</p>
              </button>
            </div>
            <div>
              <button className=" pt-[30px]">
                <p className="text-grayish-blues hover:underline underline-offset-4">
                  About
                </p>
              </button>
            </div>
            <div>
              <button className=" pt-[5px]">
                <p className="text-grayish-blues hover:underline underline-offset-4">
                  Team
                </p>
              </button>
            </div>
            <div>
              <button className=" pt-[5px]">
                <p className="text-grayish-blues hover:underline underline-offset-4">
                  Blog
                </p>
              </button>
            </div>
            <div>
              <button className=" pt-[5px] pb-[50px]">
                <p className="text-grayish-blues hover:underline underline-offset-4">
                  Careers
                </p>
              </button>
            </div>
          </div>
          <div
            className="flex flex-col pr-[12px]"
            data-aos="zoom-in"
            data-aos-duration="700"
          >
            <div>
              <button className="">
                <p className="text-whites">Connect</p>
              </button>
            </div>
            <div>
              <button className=" pt-[30px]">
                <p className="text-grayish-blues hover:underline underline-offset-4">
                  Contact
                </p>
              </button>
            </div>
            <div>
              <button className=" pt-[5px]">
                <p className="text-grayish-blues hover:underline underline-offset-4">
                  Newsletter
                </p>
              </button>
            </div>
            <div>
              <button className=" pt-[5px] pb-[50px]">
                <p className="text-grayish-blues hover:underline underline-offset-4">
                  LinkedIn
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="attribution pb-[30px] underline-offset-4">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://linkedin.com/in/rerel-oluwa-tooki-b53396253/"
            target="_blank"
          >
            Rere Tooki
          </a>
          .
        </div>
      </div>
    </>
  );
};

export default Footer;
