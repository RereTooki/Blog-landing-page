import "../App.css";
import logo from "../assets/images/logo.svg";
import iconmenu from "../assets/images/icon-hamburger.svg";
import iconmenuclose from "../assets/images/icon-close.svg";
import iconarrow from "../assets/images/icon-arrow-light.svg";
import iconarrowdark from "../assets/images/icon-arrow-dark.svg";
import { useState } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible6, setIsVisible6] = useState(false);
  const [isVisible7, setIsVisible7] = useState(false);

  return (
    <>
      <div className="gradient select-none">
        {isVisible && (
          <div
            className="relative flex flex-col items-end md:hidden z-10"
            data-aossorry="zoom-in-left"
            data-aossorry-duration="700"
          >
            <div className=" absolute top-[150px] mr-[20px] w-[60vw] px-[8%] shadow-[0_0_20px_2px_rgba(0,0,0,0.5)] text-center py-[40px] rounded-[10px] bg-whites divide-y divide-solid font-overpass">
              <div>
                <div className="flex flex-col items-center">
                  <div className="">
                    <button
                      className="flex flex-row pb-[15px] hover:underline focus:underline underline-offset-4"
                      onClick={() => {
                        if (isVisible2 === false) {
                          setIsVisible2(true);
                          setIsVisible3(false);
                          setIsVisible4(false);
                          setIsVisible5(false);
                          setIsVisible6(false);
                          setIsVisible7(false);
                        } else setIsVisible2(false);
                      }}
                    >
                      <p className="text-very-dark-blues font-semibold pr-[10px]">
                        Product
                      </p>
                      {isVisible2 || (
                        <img
                          className="w-[9px] h-[8px] mt-[7px]"
                          src={iconarrowdark}
                          alt="Arrow icon"
                          data-aossorry="zoom-in"
                          data-aossorry-duration="700"
                        />
                      )}
                      {isVisible2 && (
                        <img
                          className="w-[9px] h-[8px] mt-[7px] gradient5"
                          src={iconarrowdark}
                          alt="Arrow icon"
                        />
                      )}
                    </button>
                  </div>
                  {isVisible2 && (
                    <div
                      className="bg-grayish-blues/30 py-[15px] w-[100%] rounded-[10px]"
                      data-aossorry="fade-left"
                      data-aossorry-duration="700"
                    >
                      <div>
                        <button className="">
                          <p className="text-very-dark-blues hover:underline underline-offset-4">
                            Overview
                          </p>
                        </button>
                      </div>
                      <div>
                        <button className=" pt-[5px]">
                          <p className="text-very-dark-blues hover:underline underline-offset-4">
                            Pricing
                          </p>
                        </button>
                      </div>
                      <div>
                        <button className=" pt-[5px]">
                          <p className="text-very-dark-blues hover:underline underline-offset-4">
                            Marketplace
                          </p>
                        </button>
                      </div>
                      <div>
                        <button className=" pt-[5px]">
                          <p className="text-very-dark-blues hover:underline underline-offset-4">
                            Features
                          </p>
                        </button>
                      </div>
                      <div>
                        <button className=" pt-[5px]">
                          <p className="text-very-dark-blues hover:underline underline-offset-4">
                            Integrations
                          </p>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-center">
                  <div className="">
                    <button
                      className="pt-[20px] pb-[15px] flex flex-row hover:underline focus:underline underline-offset-4"
                      onClick={() => {
                        if (isVisible3 === false) {
                          setIsVisible3(true);
                          setIsVisible2(false);
                          setIsVisible4(false);
                          setIsVisible5(false);
                          setIsVisible6(false);
                          setIsVisible7(false);
                        } else setIsVisible3(false);
                      }}
                    >
                      <p className="text-very-dark-blues font-semibold  pr-[10px]">
                        Company
                      </p>
                      {isVisible3 || (
                        <img
                          className="w-[9px] h-[8px] mt-[7px]"
                          src={iconarrowdark}
                          alt="Arrow icon"
                          data-aossorry="zoom-in"
                          data-aossorry-duration="700"
                        />
                      )}
                      {isVisible3 && (
                        <img
                          className="w-[9px] h-[8px] mt-[7px] gradient5"
                          src={iconarrowdark}
                          alt="Arrow icon"
                        />
                      )}
                    </button>
                  </div>
                  {isVisible3 && (
                    <div
                      className="bg-grayish-blues/30 py-[15px] w-[100%] rounded-[10px]"
                      data-aossorry="fade-left"
                      data-aossorry-duration="700"
                    >
                      <div>
                        <button className="">
                          <p className="text-very-dark-blues hover:underline underline-offset-4">
                            About
                          </p>
                        </button>
                      </div>
                      <div>
                        <button className=" pt-[5px]">
                          <p className="text-very-dark-blues hover:underline underline-offset-4">
                            Team
                          </p>
                        </button>
                      </div>
                      <div>
                        <button className=" pt-[5px]">
                          <p className="text-very-dark-blues hover:underline underline-offset-4">
                            Blog
                          </p>
                        </button>
                      </div>
                      <div>
                        <button className=" pt-[5px]">
                          <p className="text-very-dark-blues hover:underline underline-offset-4">
                            Careers
                          </p>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-center pb-[20px]">
                  <div className="">
                    <button
                      className="pt-[20px] pb-[15px] flex flex-row hover:underline focus:underline underline-offset-4"
                      onClick={() => {
                        if (isVisible4 === false) {
                          setIsVisible4(true);
                          setIsVisible2(false);
                          setIsVisible3(false);
                          setIsVisible5(false);
                          setIsVisible6(false);
                          setIsVisible7(false);
                        } else setIsVisible4(false);
                      }}
                    >
                      <p className="text-very-dark-blues font-semibold pr-[10px]">
                        Connect
                      </p>
                      {isVisible4 || (
                        <img
                          className="w-[9px] h-[8px] mt-[7px]"
                          src={iconarrowdark}
                          alt="Arrow icon"
                          data-aossorry="zoom-in"
                          data-aossorry-duration="700"
                        />
                      )}
                      {isVisible4 && (
                        <img
                          className="w-[9px] h-[8px] mt-[7px] gradient5"
                          src={iconarrowdark}
                          alt="Arrow icon"
                        />
                      )}
                    </button>
                  </div>
                  {isVisible4 && (
                    <div
                      className="bg-grayish-blues/30 py-[15px] w-[100%] rounded-[10px]"
                      data-aossorry="fade-left"
                      data-aossorry-duration="700"
                    >
                      <div>
                        <button className="">
                          <p className="text-very-dark-blues hover:underline underline-offset-4">
                            Contact
                          </p>
                        </button>
                      </div>
                      <div>
                        <button className=" pt-[5px]">
                          <p className="text-very-dark-blues hover:underline underline-offset-4">
                            Newsletter
                          </p>
                        </button>
                      </div>
                      <div>
                        <button className=" pt-[5px]">
                          <p className="text-very-dark-blues hover:underline underline-offset-4">
                            LinkedIn
                          </p>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="gap-[12px] pt-[35px] flex flex-col font-bold">
                <div>
                  <button className="text-very-dark-blues rounded-full px-[30px] py-[10px] hover:underline underline-offset-4">
                    Login
                  </button>
                </div>
                <div>
                  <button className="gradientbutton whitespace-nowrap text-whites rounded-full px-[30px] py-[11px] font-semibold hover:bg-very-light-reds hover:underline underline-offset-4">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="relative vsm:hidden md:flex z-10">
          {isVisible5 && (
            <div
              className="absolute top-[105px] left-[266px] p-[15px] rounded-[10px] bg-whites font-overpass shadow-[0_0_20px_2px_rgba(0,0,0,0.5)]"
              data-aossorry="zoom-in"
              data-aossorry-duration="500"
            >
              <div>
                <button className="">
                  <p className="text-very-dark-blues hover:font-semibold hover:underline underline-offset-4">
                    Overview
                  </p>
                </button>
              </div>
              <div>
                <button className=" pt-[5px]">
                  <p className="text-very-dark-blues hover:font-semibold hover:underline underline-offset-4">
                    Pricing
                  </p>
                </button>
              </div>
              <div>
                <button className=" pt-[5px]">
                  <p className="text-very-dark-blues hover:font-semibold hover:underline underline-offset-4">
                    Marketplace
                  </p>
                </button>
              </div>
              <div>
                <button className=" pt-[5px]">
                  <p className="text-very-dark-blues hover:font-semibold hover:underline underline-offset-4">
                    Features
                  </p>
                </button>
              </div>
              <div>
                <button className=" pt-[5px]">
                  <p className="text-very-dark-blues hover:font-semibold hover:underline underline-offset-4">
                    Integrations
                  </p>
                </button>
              </div>
            </div>
          )}
          {isVisible6 && (
            <div
              className="absolute top-[105px] left-[393px] p-[15px] rounded-[10px] bg-whites font-overpass shadow-[0_0_20px_2px_rgba(0,0,0,0.5)]"
              data-aossorry="zoom-in"
              data-aossorry-duration="500"
            >
              <div>
                <button className="">
                  <p className="text-very-dark-blues hover:font-semibold hover:underline underline-offset-4">
                    About
                  </p>
                </button>
              </div>
              <div>
                <button className=" pt-[5px]">
                  <p className="text-very-dark-blues hover:font-semibold hover:underline underline-offset-4">
                    Team
                  </p>
                </button>
              </div>
              <div>
                <button className=" pt-[5px]">
                  <p className="text-very-dark-blues hover:font-semibold hover:underline underline-offset-4">
                    Blog
                  </p>
                </button>
              </div>
              <div>
                <button className=" pt-[5px]">
                  <p className="text-very-dark-blues hover:font-semibold hover:underline underline-offset-4">
                    Careers
                  </p>
                </button>
              </div>
            </div>
          )}
          {isVisible7 && (
            <div
              className="absolute top-[105px] left-[529px] p-[15px] rounded-[10px] bg-whites font-overpass shadow-[0_0_20px_2px_rgba(0,0,0,0.5)]"
              data-aossorry="zoom-in"
              data-aossorry-duration="500"
            >
              <div>
                <button className="">
                  <p className="text-very-dark-blues hover:font-semibold hover:underline underline-offset-4">
                    Contact
                  </p>
                </button>
              </div>
              <div>
                <button className=" pt-[5px]">
                  <p className="text-very-dark-blues hover:font-semibold hover:underline underline-offset-4">
                    Newsletter
                  </p>
                </button>
              </div>
              <div>
                <button className=" pt-[5px]">
                  <p className="text-very-dark-blues hover:font-semibold hover:underline underline-offset-4">
                    LinkedIn
                  </p>
                </button>
              </div>
            </div>
          )}
        </div>

        <div
          className="pt-[80px] md:pt-[50px] pb-[200px] md:pb-[100px] flex flex-row justify-between font-overpass"
          data-aossorry="zoom-in"
          data-aossorry-duration="700"
        >
          <div className="flex flex-row">
            <img
              className="pl-[20px] md:pl-[100px]"
              src={logo}
              alt="Blogr's logo"
            />
            <button
              className="vsm:hidden md:flex pt-[10px] pl-[65px] pr-[50px] flex flex-row font-semibold underline-offset-4 hover:underline focus:underline decoration-whites/80"
              onClick={() => {
                if (isVisible5 === false) {
                  setIsVisible5(true);
                  setIsVisible(false);
                  setIsVisible2(false);
                  setIsVisible3(false);
                  setIsVisible4(false);
                  setIsVisible6(false);
                  setIsVisible7(false);
                } else setIsVisible5(false);
              }}
            >
              <p className="text-whites/80 pr-[10px] ">Product</p>
              {isVisible5 || (
                <img
                  className="w-[9px] h-[8px] mt-[8px]"
                  src={iconarrow}
                  alt="Arrow icon"
                  data-aossorry="zoom-in"
                  data-aossorry-duration="500"
                />
              )}
              {isVisible5 && (
                <img
                  className="w-[9px] h-[8px] mt-[7px] gradient5"
                  src={iconarrow}
                  alt="Arrow icon"
                />
              )}
            </button>
            <button
              className="vsm:hidden md:flex pt-[10px]  pr-[50px] flex flex-row font-semibold underline-offset-4 hover:underline focus:underline decoration-whites/80"
              onClick={() => {
                if (isVisible6 === false) {
                  setIsVisible6(true);
                  setIsVisible(false);
                  setIsVisible2(false);
                  setIsVisible3(false);
                  setIsVisible4(false);
                  setIsVisible5(false);
                  setIsVisible7(false);
                } else setIsVisible6(false);
              }}
            >
              <p className="text-whites/80 pr-[10px]">Company</p>
              {isVisible6 || (
                <img
                  className="w-[9px] h-[8px] mt-[8px]"
                  src={iconarrow}
                  alt="Arrow icon"
                  data-aossorry="zoom-in"
                  data-aossorry-duration="500"
                />
              )}
              {isVisible6 && (
                <img
                  className="w-[9px] h-[8px] mt-[7px] gradient5"
                  src={iconarrow}
                  alt="Arrow icon"
                />
              )}
            </button>
            <button
              className="vsm:hidden md:flex pt-[10px] flex flex-row font-semibold underline-offset-4 hover:underline focus:underline decoration-whites/80"
              onClick={() => {
                if (isVisible7 === false) {
                  setIsVisible7(true);
                  setIsVisible(false);
                  setIsVisible2(false);
                  setIsVisible3(false);
                  setIsVisible4(false);
                  setIsVisible5(false);
                  setIsVisible6(false);
                } else setIsVisible7(false);
              }}
            >
              <p className="text-whites/80 pr-[10px]">Connect</p>
              {isVisible7 || (
                <img
                  className="w-[9px] h-[8px] mt-[8px]"
                  src={iconarrow}
                  alt="Arrow icon"
                  data-aossorry="zoom-in"
                  data-aossorry-duration="500"
                />
              )}
              {isVisible7 && (
                <img
                  className="w-[9px] h-[8px] mt-[7px] gradient5"
                  src={iconarrow}
                  alt="Arrow icon"
                />
              )}
            </button>
          </div>
          <div className="flex flex-row font-bold">
            <button className="vsm:hidden md:flex text-whites rounded-full px-[30px] py-[10px]">
              Login
            </button>
            <button className="whitespace-nowrap vsm:hidden md:flex mr-[100px] text-light-reds ml-[30px] rounded-full bg-whites px-[30px] pt-[11px] hover:bg-very-light-reds hover:text-whites font-semibold">
              Sign Up
            </button>
            {isVisible && (
              <button
                onClick={() => {
                  setIsVisible(false);
                  setIsVisible2(false);
                  setIsVisible3(false);
                  setIsVisible4(false);
                  setIsVisible5(false);
                  setIsVisible6(false);
                  setIsVisible7(false);
                }}
                data-aossorry="zoom-in"
                data-aossorry-duration="700"
              >
                <img
                  className="md:hidden cursor-pointer pr-[20px] md:pr-[100px] pt-[10px]"
                  src={iconmenuclose}
                  alt="A menu icon"
                />
              </button>
            )}
            {isVisible || (
              <button
                onClick={() => {
                  setIsVisible(true);
                  setIsVisible2(false);
                  setIsVisible3(false);
                  setIsVisible4(false);
                  setIsVisible5(false);
                  setIsVisible6(false);
                  setIsVisible7(false);
                }}
                data-aossorry="zoom-in"
                data-aossorry-duration="700"
              >
                <img
                  className="md:hidden cursor-pointer pr-[20px] md:pr-[100px] pt-[10px]"
                  src={iconmenu}
                  alt="A menu icon"
                />
              </button>
            )}
          </div>
        </div>
        <div
          className="font-overpass px-[10px] text-whites pb-[80px] md:pb-[40px] text-center"
          data-aossorry="zoom-in"
          data-aossorry-duration="700"
        >
          <h1 className="text-[60px] leading-[70px] md:text-[70px] md:leading-[75px]">
            A modern publishing platform
          </h1>
          <p className="text-[30px] pt-[20px] leading-[35px] text-whites/[.55]">
            Grow your audience and build your online brand
          </p>
        </div>
        <div
          className="font-ubuntu pb-[150px] md:pb-[100px] font-bold flex flex-row justify-center"
          data-aossorry="zoom-in"
          data-aossorry-duration="700"
        >
          <button className="text-light-reds mr-[10px] rounded-full bg-whites py-[10px] px-[15px] hover:bg-very-light-reds hover:text-whites">
            Start for Free
          </button>
          <button className="rounded-full border-[1.5px] py-[10px] px-[15px] text-whites hover:bg-whites hover:text-light-reds">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
