import React, { useEffect, useState } from "react";
import { api, imageBaseUrl } from "../../../global/baserUrl";
const distinationData = [
  {
    img: "../assets/aus-5.jpeg",
    title: "Australia",
  },
  {
    img: "../assets/uk-1.jpeg",
    title: "United Kingdom",
  },
  {
    img: "../assets/usa.jpeg",
    title: "USA",
  },
  {
    img: "../assets/canda-1.jpeg",
    title: "Canada",
  },
];

const Distination = () => {
  const [place, setPlace] = useState<any>();
  const fetchBrand = async () => {
    const res = await api.get(`/countires-offers`);
    setPlace(res.data);
  };

  console.log(place, "dgd");

  useEffect(() => {
    fetchBrand();
  }, []);
  return (
    <div className=" container mb-20 mt-[100px] mx-auto">
      <div className=" text-center ">
        <div>
          {" "}
          <span className=" text-blue-100 text-[1.2em]  font-medium">
            Abroad studies
          </span>
          <h3 className="text-[2em] sm:text-[3em] font-semibold ">
            Countries We Offer?
          </h3>
        </div>
      </div>
      <div className=" mt-5 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 ">
        {place?.map((data: any, i: any) => {
          return (
            <div key={i} className=" relative">
              <img
                src={`${imageBaseUrl}${data.country_img[0].url}`}
                className="w-full  rounded-[8px] object-cover h-full"
                alt=""
              />
              <span className=" text-white-200  text-[20px] font-medium absolute bottom-10 left-10">
                {data.country_name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Distination;
