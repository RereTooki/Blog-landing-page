import "../App.css";
import logo from "../assets/images/logo.svg";
import iconmenu from "../assets/images/icon-hamburger.svg";
import iconarrow from "../assets/images/icon-arrow-light.svg";
import iconarrowdark from "../assets/images/icon-arrow-dark.svg";

const Header = () => {
  return (
    <>
      <div className="gradient overflow-hidden select-none">
        <div className="text-center flex flex-col items-center py-[40px] overfslow-hidden nsm:mx-[25%] vsm:mx-[15%] rounded-[10px] bg-very-dark-desaturated-blues divide-y divide-solid font-overpass">
          <div>
            <div className="flex flex-col">
              <div className="pl-[30px]">
                <button className=" flex flex-row">
                  <p className="text-whites pr-[10px]">Product</p>
                  <img
                    className="w-[9px] h-[8px] mt-[7px]"
                    src={iconarrowdark}
                    alt="Arrow icon"
                  />
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
                <button className=" pt-[5px]">
                  <p className="text-grayish-blues hover:underline underline-offset-4">
                    Integrations
                  </p>
                </button>
              </div>
            </div>
            <div className="flex flex-col pr-[20px]">
              <div className="pl-[25px]">
                <button className="flex flex-row">
                  <p className="text-whites pr-[10px]">Company</p>
                  <img
                    className="w-[9px] h-[8px] mt-[7px]"
                    src={iconarrowdark}
                    alt="Arrow icon"
                  />
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
                <button className=" pt-[5px]">
                  <p className="text-grayish-blues hover:underline underline-offset-4">
                    Careers
                  </p>
                </button>
              </div>
            </div>
            <div className="flex flex-col pr-[12px]">
              <div className="pl-[25px]">
                <button className="flex flex-row">
                  <p className="text-whites pr-[10px]">Connect</p>
                  <img
                    className="w-[9px] h-[8px] mt-[7px]"
                    src={iconarrowdark}
                    alt="Arrow icon"
                  />
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
                <button className=" pt-[5px] pb-[20px]">
                  <p className="text-grayish-blues hover:underline underline-offset-4">
                    LinkedIn
                  </p>
                </button>
              </div>
            </div>
          </div>
          <div className="gap-[12px] pt-[35px] flex flex-col font-bold">
            <div>
              <button className="text-whites border-4 rounded-full px-[30px] py-[10px]">
                Login
              </button>
            </div>
            <div>
              <button className="whitespace-nowrap text-whites rounded-full bg-light-reds px-[30px] py-[11px] font-semibold">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        <div
          className="pt-[80px] md:pt-[50px] pb-[200px] md:pb-[100px] flex flex-row justify-between font-overpass"
          data-aos="zoom-in"
          data-aos-duration="700"
        >
          <div className="flex flex-row">
            <img
              className="pl-[20px] md:pl-[100px]"
              src={logo}
              alt="Blogr's logo"
            />
            <button className="vsm:hidden md:flex pt-[5px] pl-[65px] pr-[50px] flex flex-row">
              <p className="text-whites/80 pr-[10px]">Product</p>
              <img
                className="w-[9px] h-[8px] mt-[8px]"
                src={iconarrow}
                alt="Arrow icon"
              />
            </button>
            <button className="vsm:hidden md:flex pt-[5px]  pr-[50px] flex flex-row">
              <p className="text-whites/80 pr-[10px]">Company</p>
              <img
                className="w-[9px] h-[8px] mt-[8px]"
                src={iconarrow}
                alt="Arrow icon"
              />
            </button>
            <button className="vsm:hidden md:flex pt-[5px]  pr-[30px] flex flex-row">
              <p className="text-whites/80 pr-[10px]">Connect</p>
              <img
                className="w-[9px] h-[8px] mt-[8px]"
                src={iconarrow}
                alt="Arrow icon"
              />
            </button>
          </div>
          <div className="flex flex-row font-bold">
            <button className="vsm:hidden md:flex text-whites rounded-full px-[30px] py-[10px]">
              Login
            </button>
            <button className="whitespace-nowrap vsm:hidden md:flex mr-[100px] text-light-reds ml-[30px] rounded-full bg-whites px-[30px] pt-[11px] hover:bg-very-light-reds hover:text-whites font-semibold">
              Sign Up
            </button>
            <img
              className="md:hidden cursor-pointer pr-[20px] md:pr-[100px] pt-[10px]"
              src={iconmenu}
              alt="A menu icon"
            />
          </div>
        </div>
        <div
          className="font-overpass px-[10px] text-whites pb-[80px] md:pb-[40px] text-center"
          data-aos="zoom-in"
          data-aos-duration="700"
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
          data-aos="zoom-in"
          data-aos-duration="700"
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
