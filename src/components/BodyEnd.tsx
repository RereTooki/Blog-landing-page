import "../App.css";
import laptopmobile from "../assets/images/illustration-laptop-mobile.svg";
import laptopdesktop from "../assets/images/illustration-laptop-desktop.svg";

const BodyEnd = () => {
  return (
    <>
      <div className="overflow-hidden flex flex-col pt-[30%] pb-[20%] nsm:pt-[15%] md:pt-[25%] items-center font-overpass select-none">
        <div className="nsm:flex nsm:flex-row nsm:px-[10%] nsm:gap-x-[2%]">
          <picture
            className="nsm:basis-0 nsm:grow nsm:shrink drop-shadow-[0_40px_40px_rgba(0,0,0,0.15)]"
            data-aossorry="fade-right"
            data-aossorry-duration="700"
          >
            <source
              className=""
              media="(min-width: 760px)"
              srcSet={laptopdesktop}
            />
            <img
              src={laptopmobile}
              alt=""
              className="nsm:translate-x-[-39%] nsm:translate-y-[60%] md:translate-y-0 nsm:scale-[1.7] w-[100%]"
            />
          </picture>

          <div
            className="nsm:basis-0 nsm:grow nsm:shrink"
            data-aossorry="zoom-in-up"
            data-aossorry-duration="700"
          >
            <h1 className="px-[20px] nsm:px-0 text-[40px] nsm:text-[25px] pt-[8%] pb-[4%] nsm:pb-0 leading-[50px] nsm:whitespace-nowrap text-center nsm:text-left text-very-dark-blues font-semibold drop-shadow-lg">
              Free, open, simple
            </h1>
            <p className="text-center nsm:text-left px-[10%] nsm:px-0 leading-[35px] nsm:leading-normal text-[20px] nsm:text-[16px] tracking-wide nsm:tracking-normal text-very-dark-grayish-blues/80 drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)]">
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
            <h1 className="px-[20px] nsm:px-0 text-[40px] nsm:text-[25px] pt-[13%] nsm:pt-[50px] pb-[5%] nsm:pb-0 leading-[50px] nsm:whitespace-nowrap text-center nsm:text-left text-very-dark-blues font-semibold drop-shadow-lg">
              Powerful tooling
            </h1>
            <p className="text-center nsm:text-left px-[10%] nsm:px-0 leading-[35px] nsm:leading-normal text-[20px] nsm:text-[16px] tracking-wide nsm:tracking-normal text-very-dark-grayish-blues/80 drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)]">
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyEnd;
