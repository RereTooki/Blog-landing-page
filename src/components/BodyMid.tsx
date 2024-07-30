import "../App.css";
import phones from "../assets/images/illustration-phones.svg";

const BodyMid = () => {
  return (
    <>
      <div className="gradient2 font-overpass text-center select-none flex flex-col nsm:flex-row nsm:text-left">
        <div
          className="relative nsm:w-[160%] md:w-[100%] lg:w-[70%] nsm:h-auto h-[250px]"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          <img
            className="absolute nsm:bottom-[-60px] md:bottom-[-70px] nsm:left-[20px] nsm:w-[550px] md:w-[450px] bottom-[-50px] nsm:h-[400px] md:h-[430px]"
            src={phones}
            alt="A couple of phones"
          />
        </div>
        <div
          className="px-[10%] pt-[4%] pb-[40px] nsm:pl-[2%] nsm:py-[7%]"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <h1 className="text-[40px] nsm:text-[25px] leading-[60px]  font-semibold text-whites nsm:whitespace-nowrap">
            State of the Art Infrastructure
          </h1>
          <p className="leading-[42px] nsm:leading-normal text-[24px] nsm:text-[16px] tracking-wide text-grayish-blues">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </>
  );
};

export default BodyMid;
