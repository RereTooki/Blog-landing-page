import React from "react";
import Header from "../components/Header";
import BodyIntro from "../components/BodyIntro";
import BodyMid from "../components/BodyMid";
import Footer from "../components/Footer";
import "../App.css";

const Landingpage = () => {
  return (
    <>
      <div className="">
        <Header />
        <BodyIntro />
        <div className="pt-[60%] nsm:pt-0 md:pt-0">
          <BodyMid />
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Landingpage;
