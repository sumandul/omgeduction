import React, { useEffect, useState } from "react";
import { HiArrowSmRight } from "react-icons/hi";
import Slider from "react-slick";
import { api } from "../../../global/baserUrl";

const data = [
  {
    img: "../assets/p-1.jpg",
    name: "",
  },
];
const Testimonial = () => {
  const [testimonial, setTestimonial] = useState<any>();
  const fetchTestimonial = async () => {
    const res = await api.get(`/testimonials`);
    setTestimonial(res.data);
  };

  useEffect(() => {
    fetchTestimonial();
  }, []);
  console.log(testimonial, "j");
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    centerMode: false,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 2,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      className="testinomial"
      style={{
        backgroundImage: "url(" + "../assets/texti.jpg" + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "50vh",
        paddingTop: "60px",
        width: "100%",
        position: "relative",
      }}
    >
      <div className=" container mx-auto">
        <h2 className=" text-blue-100 text-[2em] sm:text-[3em] font-medium text-center mb-10">
          Student Speaks
        </h2>
        <Slider {...settings}>
          {testimonial?.map((data: any, i: any) => {
            return (
              <div className=" w-full h-[230px] bg-white-300 " key={i}>
                <div
                  className=" sm:flex lg:px-2 py-3 h-full "
                  style={{
                    boxShadow: "5px 0 30px rgba(1,41,112,0.08)",
                  }}
                >
                  <div className=" basis-[20%] pt-4    flex  items-center justify-center  sm:items-start ">
                    <img
                      src="./assets/p3.jpg"
                      className=" w-[88px] h-[88px] rounded-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className=" basis-[80%]  pr-5 pt-3 ">
                    <p className=" text-[15px] font-light  text-justify   leading-[25px]">
                      {data?.Content}
                    </p>
                    <div className=" mt-4">
                      <h3 className=" text-[18px] text-black-200 font-bold">
                        {data?.Name}
                      </h3>
                      <span className=" text-white-400">{data?.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
