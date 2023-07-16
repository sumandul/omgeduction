import React from "react";
import { MdLocationOn, MdPermPhoneMsg } from "react-icons/md";
const Contact = () => {
  return (
    <>
      <div
        className="  relative top-0 left-0"
        id="abroad"
        style={{
          backgroundImage: "url(" + "../assets/c.jpg" + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "60vh",
          width: "100%",

          zIndex: 1,
        }}
      >
        <h1 className=" absolute top-[50%] left-[10%] z-30 translate-x-[] text-white-200 font-medium text-[41px] ">
          Contact us
        </h1>
        <div className=" z-2 bg-overlay absolute top-0 left-0 w-full h-full"></div>
      </div>
      <div className=" bg-yellow-100 py-20">
        <div className="  flex items-center justify-center">
          <div className=" px-4 sm:px-0 sm:w-1/2   ">
            <div>
              <div>
                <h3 className=" text-center font-medium text-[20px] text-blue-300">
                  Request a call back
                </h3>
              </div>
              <div className=" grid gap-4 mt-3  sm:grid-cols-2">
                <div>
                  <input
                    type="text"
                    className=" w-full border mt-1 border-black-400 rounded-[5px] py-2 px-3  "
                    placeholder="First name* "
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className=" w-full border mt-1 border-black-400 rounded-[5px] py-2 px-3  "
                    placeholder="Last name*"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className=" w-full border mt-1 border-black-400 rounded-[5px] py-2 px-3  "
                    placeholder="Email address* "
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className=" w-full border mt-1 border-black-400 rounded-[5px] py-2 px-3  "
                    placeholder="Contact number"
                  />
                </div>
                <div className=" col-span-2">
                  <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={10}
                    className="w-full border mt-1 border-black-400 rounded-[5px] py-2 px-3  "
                    placeholder="message"
                  ></textarea>
                </div>
                <div className=" col-span-2">
                  <button className=" bg-blue-800 w-full py-2 text-white-200 capitalize rounded-[5px]">
                    submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" container mx-auto">
          <div className=" grids grid-cols-4">
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
