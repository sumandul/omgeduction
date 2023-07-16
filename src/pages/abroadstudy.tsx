import React from "react";
import Distination from "../components/section/home/distination";

const Abroadstudy = () => {
  return (
    <>
      <div
        className="  relative top-0 left-0"
        id="abroad"
        style={{
          backgroundImage: "url(" + "../assets/3.jpg" + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "60vh",
          width: "100%",
          backgroundAttachment: "fixed",

          zIndex: 1,
        }}
      >
        <h1 className=" absolute top-[50%] left-[10%] z-30 translate-x-[] text-white-200 font-medium text-[41px] ">
          Abroad Study
        </h1>
        <div className=" z-2 bg-overlay absolute top-0 left-0 w-full h-full"></div>
      </div>
      <div className=" container mx-auto">
        <Distination />
      </div>
    </>
  );
};

export default Abroadstudy;
