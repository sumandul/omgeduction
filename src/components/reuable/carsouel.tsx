import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { HiArrowSmRight } from "react-icons/hi";
import Link from "next/link";
import { api } from "../../global/baserUrl";
import { imageBaseUrl } from "../../global/baserUrl";
const sliderData = [
  {
    img: "./assets/aus-2.jpg",
  },
  {
    img: "./assets/aus-3.jpg",
  },
  {
    img: "./assets/aus-4.jpg",
  },
];

const Carsouel = () => {
  const [banner, setBanner] = useState<any>();
  const fetchbanner = async () => {
    const res = await api.get(`/banners`);
    setBanner(res.data);
  };

  useEffect(() => {
    fetchbanner();
  }, []);

  var settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    arrow: true,

    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className=" ">
      <Slider {...settings}>
        {banner?.map((data: any, i: any) => {
          console.log(data.Image.url, "dd");
          return (
            <div className=" w-full relative" key={i}>
              <img
                src={`${imageBaseUrl}${data.Image.url}`}
                className=" w-full max-h-[100vh] object-cover"
                alt=""
              />
              <div className="w-[67%] z-50 absolute top-[60%] sm:top-[50%] left-[50%] sm:left-[50%] translate-x-[-50%] translate-y-[-50%] ">
                <h1 className=" lg:w-[67%] text-white-200   sm:leading-[80px]  text-[1.6em] sm:text-[3em] lg:text-[4.5em] font-medium ">
                  {data?.Heading}
                </h1>
                <div className=" mt-3 sm:mt-8">
                  <Link href={"/about"}>
                    <button className=" flex  items-center capitalize text-white-200 bg-blue-100 border-2 border-blue-50 px-2 py-2 sm:px-10 sm:py-3 rounded-[6px]">
                      {data?.Button_Text}{" "}
                      <HiArrowSmRight className="ml-1 text-[20px]" />
                    </button>
                  </Link>
                </div>
              </div>
              <div className=" z-2 bg-overlay absolute top-0 left-0 w-full h-full"></div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carsouel;
