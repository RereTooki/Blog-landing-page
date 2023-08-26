import "../App.css";
import logo from "../assets/images/logo.svg";
import iconmenu from "../assets/images/icon-hamburger.svg";
import iconarrow from "../assets/images/icon-arrow-light.svg";

const Header = () => {
  return (
    <>
      <div className="gradient overflow-hidden">
        <div className="pt-[80px] md:pt-[50px] pb-[200px] md:pb-[100px] flex flex-row justify-between">
          <div className="flex flex-row">
            <img
              className="pl-[20px] md:pl-[100px]"
              src={logo}
              alt="Blogr's logo"
            />
            <button className="vsm:hidden md:flex pt-[5px] pl-[65px] pr-[50px] flex flex-row">
              <p className="text-whites/80 pr-[10px]">Product</p>
              <img
                className="w-[9px] h-[8px] mt-[10px]"
                src={iconarrow}
                alt="Blogr's logo"
              />
            </button>
            <button className="vsm:hidden md:flex pt-[5px]  pr-[50px] flex flex-row">
              <p className="text-whites/80 pr-[10px]">Company</p>
              <img
                className="w-[9px] h-[8px] mt-[10px]"
                src={iconarrow}
                alt="Blogr's logo"
              />
            </button>
            <button className="vsm:hidden md:flex pt-[5px]  pr-[30px] flex flex-row">
              <p className="text-whites/80 pr-[10px]">Connect</p>
              <img
                className="w-[9px] h-[8px] mt-[10px]"
                src={iconarrow}
                alt="Blogr's logo"
              />
            </button>
          </div>
          <div className="flex flex-row font-bold">
            <button className="vsm:hidden md:flex text-whites rounded-full px-[30px] py-[10px]">
              Login
            </button>
            <button className="whitespace-nowrap vsm:hidden md:flex mr-[100px] text-light-reds ml-[30px] rounded-full bg-whites px-[30px] py-[10px]">
              Sign Up
            </button>
            <img
              className="md:hidden cursor-pointer pr-[20px] md:pr-[100px] pt-[10px]"
              src={iconmenu}
              alt="A menu icon"
            />
          </div>
        </div>
        <div className="font-overpass px-[10px] text-whites pb-[80px] md:pb-[40px] text-center">
          <h1 className="text-[60px] leading-[75px]">
            A modern publishing platform
          </h1>
          <p className="text-[30px] pt-[20px] leading-[35px] text-whites/[.55]">
            Grow your audience and build your online brand
          </p>
        </div>
        <div className="font-ubuntu pb-[150px] md:pb-[100px] font-bold flex flex-row justify-center">
          <button className="text-light-reds mr-[10px] rounded-full bg-whites py-[10px] px-[15px]">
            Start for Free
          </button>
          <button className="rounded-full border-[1.5px] py-[10px] px-[15px] text-whites">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
