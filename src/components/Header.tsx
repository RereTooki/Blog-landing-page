import "../App.css";
import logo from "../assets/images/logo.svg";
import iconmenu from "../assets/images/icon-hamburger.svg";

const Header = () => {
  return (
    <>
      <div className="gradient overflow-hidden">
        <div className="pt-[80px] md:pt-[50px] pb-[200px] md:pb-[100px] flex flex-row justify-between">
          <img
            className="pl-[20px] md:pl-[100px]"
            src={logo}
            alt="Blogr's logo"
          />
          <img
            className="md:hidden cursor-pointer"
            src={iconmenu}
            alt="A menu icon"
          />
        </div>
        <div className="font-overpass text-whites pb-[80px] md:pb-[40px] text-center">
          <h1 className="text-[70px] leading-[75px]">
            A modern publishing platform
          </h1>
          <p className="text-[30px] pt-[20px] leading-[35px] text-whites/[.55]">
            Grow your audience and build your online brand
          </p>
        </div>
        <div className="font-ubuntu pb-[150px] md:pb-[100px] font-bold flex flex-row justify-center">
          <button className="text-light-reds mx-[40px] rounded-full bg-whites py-[10px] px-[15px]">
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
