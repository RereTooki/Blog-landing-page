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
        <BodyMid />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Landingpage;
