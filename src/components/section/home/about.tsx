import React, { useEffect, useState } from "react";
import { api } from "../../../global/baserUrl";

const About = () => {
  return (
    <div className=" container mt-[3rem] lg:mt-[10rem] mx-auto">
      <div className=" grid lg:grid-cols-2 gap-8 ">
        <div className="px-4 lg:px-20">
          <h2 className=" text-blue-100 text-[2rem] sm:text-[3em]  font-medium sm:leading-[58px]">
            Welcome to Omg Education Services
          </h2>
          <p className=" leading-[26px] mt-3  font-light  text-black-100  text-[16px]">
            OMG Education Services was established in 2006. We had started our
            organization with the mission of providing students with unbiased
            and proper guidance regarding their higher studies. Within our
            combined experience of 10 years, our experienced guidance counselors
            and staff have managed to provide students with quality services.
            Due to which OMG has grown significantly and the credit regarding
            this goes entirely to our students who have trusted us with their
            precious future.
          </p>
          <div className=" mt-4">
            <button className=" bg-blue-100 text-white-200 px-5 py-2 rounded-[5px]">
              learn more
            </button>
          </div>
        </div>
        <div>
          <img src="../assets/aus-4.jpg" className=" w-full " alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
