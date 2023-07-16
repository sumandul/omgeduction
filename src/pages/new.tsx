import React from "react";

const New = () => {
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
          News
        </h1>
        <div className=" z-2 bg-overlay absolute top-0 left-0 w-full h-full"></div>
      </div>
      <div className=" container  mt-10 mx-auto">
        <h2 className=" text-blue-800 font-semibold text-[18px]">News</h2>
        <div className="  grid mt-3 sm:grid-cols-3 gap-10">
          <div>
            <img src="../assets/new.png" className=" w-full" alt="" />
            <div className=" text-center py-4 bg-blue-900">
              <p>Arriving in Australia</p>
            </div>
          </div>
          <div>
            <img src="../assets/new.png" className=" w-full" alt="" />
            <div className=" text-center py-4 bg-blue-900">
              <p>Arriving in Australia</p>
            </div>
          </div>
          <div>
            <img src="../assets/new.png" className=" w-full" alt="" />
            <div className=" text-center py-4 bg-blue-900">
              <p>Arriving in Australia</p>
            </div>
          </div>
          <div>
            <img src="../assets/new.png" className=" w-full" alt="" />
            <div className=" text-center py-4 bg-blue-900">
              <p>Arriving in Australia</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default New;
