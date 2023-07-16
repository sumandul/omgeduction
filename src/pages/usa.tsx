import { Result } from "antd";
import React, { useEffect, useState } from "react";
import { api, imageBaseUrl } from "../global/baserUrl";
import Link from "next/link";

const Usa = () => {
  const [getData, setData] = useState<any>();
  const fetchAus = async () => {
    const res = await api.get("/sstudy-usas");
    if (res?.data?.length > 0) setData(res.data[0]);
  };
  const parseData = (string: string) => {
    var regex = /src="([^"]*)"/;
    var matches = `${string}`?.match(regex);
    if (string) {
      let data = `${string}`.replaceAll('src="', `src=\"${imageBaseUrl}`);
      return data;
    }
  };
  useEffect(() => {
    fetchAus();
  }, []);

  console.log(getData, "hjksdb");

  return (
    <>
      <div
        className="  relative top-0 left-0"
        id="about"
        style={{
          backgroundImage: `url(${imageBaseUrl}${getData?.background_image?.url})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "60vh",
          width: "100%",
          backgroundAttachment: "fixed",

          zIndex: 1,
        }}
      >
        {" "}
        <h1 className=" absolute top-[50%] left-[10%] z-30 translate-x-[] text-white-200 font-medium text-[41px] ">
          Study In USA
        </h1>
        <div className=" z-2 bg-overlay absolute top-0 left-0 w-full h-full"></div>
      </div>
      <div className=" container mx-auto ">
        <div className=" px-0 sm:flex  gap-10 mt-10">
          <div
            className=" basis-[70%] css-specific "
            dangerouslySetInnerHTML={{
              __html: parseData(getData?.description),
            }}
          />
          <div className=" basis-[30%]">
            <div>
              <h3 className=" text-white-200 py-4 px-2 bg-[#ED1D25] font-[500] text-[16px] ">
                Abroad Study
              </h3>
              <ul
                className=" text-[#444]  text-[16px]  font-[400] capitalize bg-[#F0F0F0] list-none
            "
              >
                <li className=" border-b-[1px] py-3 px-2">
                  {" "}
                  <Link href="/australia"> Study in Australia</Link>
                </li>
                <li className=" py-3 px-2 border-b-[1px]">
                  {" "}
                  <Link href="/uk">study in uk</Link>{" "}
                </li>
                <li className=" py-3 px-2 border-b-[1px]">
                  {" "}
                  <Link href="/canada">study in canada</Link>
                </li>
                <li className="py-3 px-2 border-b-[1px]">
                  <Link href="/usa"> study in USA</Link>
                </li>
              </ul>
            </div>
            <div className=" mt-6">
              <form
                action="
            "
              >
                <div className=" bg-yellow-200 px-10 border border-white-800 py-4">
                  <h4 className=" text-center text-[20px] font-medium  text-blue-400">
                    Request a call back
                  </h4>
                  <div className=" mt-5">
                    <input
                      style={{
                        boxShadow: " 0px 1px 1px rgb(255 248 220)",
                      }}
                      type="text"
                      className="  bg-white-200 px-5 border w-full border-yellow-300 rounded-[28px] py-3"
                      placeholder="Your Name*"
                    />
                  </div>
                  <div className=" mt-5">
                    <input
                      style={{
                        boxShadow: " 0px 1px 1px rgb(255 248 220)",
                      }}
                      type="text"
                      className="  bg-white-200 border w-full border-yellow-300 rounded-[28px] px-5  py-3"
                      placeholder="Your Email*"
                    />
                  </div>
                  <div className=" mt-5">
                    <input
                      style={{
                        boxShadow: " 0px 1px 1px rgb(255 248 220)",
                      }}
                      type="text"
                      className="  bg-white-200 border w-full px-5  border-yellow-300 rounded-[28px] py-3"
                      placeholder="Your Cotact Number*"
                    />
                  </div>
                  <div className=" mt-5">
                    <input
                      style={{
                        boxShadow: " 0px 1px 1px rgb(255 248 220)",
                      }}
                      type="text"
                      className="  bg-white-200 border w-full px-5  border-yellow-300 rounded-[28px] py-3"
                      placeholder="Your Message*"
                    />
                  </div>
                  <button className=" bg-blue-500 w-full py-3 rounded-[28px] text-white-200 mt-5">
                    submit
                  </button>
                </div>
              </form>
            </div>
            <div className=" mt-6  border-[1px] px-8 py-4">
              <div>
                <h3
                  className=" text-[#1c4675] text-[20px] text-center
                "
                >
                  News & Updates
                </h3>
                <ul className=" mt-4">
                  <li className="  border-b-[1px]  border-t-[1px]  py-2  text-[#444] text-[16px]  font-[400]">
                    Arriving in Australia
                    <div className=" text-[13px]  text-[#999]">
                      December 22, 2021
                    </div>
                  </li>
                  <li className="   py-2  border-b-[1px]  text-[#444] text-[16px]  font-[400]">
                    Arriving in Australia
                    <div className=" text-[13px]  text-[#999]">
                      December 22, 2021
                    </div>
                  </li>
                  <li className="   py-2  border-b-[1px]  text-[#444] text-[16px]  font-[400]">
                    Arriving in Australia
                    <div className=" text-[13px]  text-[#999]">
                      December 22, 2021
                    </div>
                  </li>
                  <li className="  py-2  border-b-[1px]  text-[#444] text-[16px]  font-[400]">
                    Arriving in Australia
                    <div className=" text-[13px]  text-[#999]">
                      December 22, 2021
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Usa;
