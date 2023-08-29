import React from "react";
import "../App.css";
import logo from "../assets/images/logo.svg";
import iconarrow from "../assets/images/icon-arrow-light.svg";

const Footer = () => {
  return (
    <>
      <div className="items-center nsm:items-start flex flex-col nsm:flex-row nsm:justify-evenly pt-[80px] nsm:pt-[70px] bg-very-dark-black-blues rounded-tr-[150px] overflow-hidden select-none">
        <div className="">
          <img className="" src={logo} alt="Blogr's logo" />
        </div>
        <div className="flex flex-col">
          <div>
            <button className="pt-[40px] nsm:pt-0">
              <p className="text-whites hover:outline hover:outline-0">
                Product
              </p>
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
        <div className="flex flex-col pr-[20px]">
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
        <div className="flex flex-col pr-[12px]">
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
    </>
  );
};

export default Footer;
