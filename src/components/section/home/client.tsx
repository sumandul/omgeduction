import React, { useEffect, useState } from "react";
import { HiArrowSmRight } from "react-icons/hi";
import Slider from "react-slick";
import { api } from "../../../global/baserUrl";
import { imageBaseUrl } from "../../../global/baserUrl";

const Client = () => {
  const [brand, setBrand] = useState<any>();
  const fetchBrand = async () => {
    const res = await api.get(`/top-brands`);
    setBrand(res.data);
  };

  useEffect(() => {
    fetchBrand();
  }, []);
  console.log(brand, "hh");

  var settings = {
    dots: false,
    // infinite: true,
    // autoplay: true,
    speed: 500,
    arrow: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <div className=" container mx-auto py-10">
      <Slider {...settings}>
        {brand?.map((data: any, i: any) => {
          return (
            <div className="  w-full border-b border-r  6  " key={i}>
              <div className=" flex  justify-center items-center  ">
                <img
                  src={`${imageBaseUrl}${data.brand_image.url}`}
                  className=" w-[180px]  "
                  alt=""
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Client;
