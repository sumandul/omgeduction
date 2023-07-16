import React, { useEffect, useState } from "react";
import { HiAcademicCap, HiBookOpen } from "react-icons/hi2";
import { api } from "../../../global/baserUrl";
const Service = () => {
  const [service, setService] = useState<any>();
  const fetchService = async () => {
    const res = await api.get(`/serviceoffers`);
    setService(res.data);
  };

  console.log(service, "dgd");

  useEffect(() => {
    fetchService();
  }, []);
  return (
    <div
      style={{
        backgroundImage: "url(" + "../assets/bg.jpeg" + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "50vh",
        width: "100%",
        position: "relative",

        zIndex: 1,
      }}
    >
      <div></div>
      <div
        className="  absolute top-0 left-0 w-full   -z-10   h-full "
        style={{
          backgroundImage:
            "linear-gradient( rgba(26, 35, 135, 0.6), rgba(26, 35, 135, 0.6)",
        }}
      ></div>
      <div className=" container mx-auto py-32 z-50">
        <div className=" text-center">
          <div className=" text-white-200">
            <span className="  text-[1.2em]  font-medium">Our services</span>
            <h3 className=" text-[2em] sm:text-[3em] font-semibold  leading-[55px]">
              Services we offer?
            </h3>
          </div>
        </div>
        <div className=" grid sm:grid-cols-2 lg:grid-cols-4 mt-20 gap-10">
          {service?.map((data: any, i: any) => {
            return (
              <div
                className=" bg-blue-300 border-2 h-[280px] rounded-[8px] relative text-white-200 border-white-100  py-[45px] px-[30px]"
                key={i}
              >
                <h4 className=" font-semibold text-[18px] text-center">
                  {data.Title}
                </h4>
                <p className=" text-[15px] mt-6 text-white-200 text-center">
                  {data.Discription}
                </p>
                <div className=" w-[58px] flex items-center justify-center h-[58px] absolute top-[-25px]  left-[40%]  rounded-full border-2 bg-white-200 border-blue-200">
                  {" "}
                  <HiBookOpen className="  text-red-600 text-[30px]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;
