import React from "react";
import { HiLocationMarker, HiOutlineChevronRight } from "react-icons/hi";
import { HiMail, HiPhone } from "react-icons/hi";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="footer"
      style={{
        backgroundImage: "url(" + "../assets/f-bg.png" + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "50vh",
        width: "100%",
        marginTop: "100px",
      }}
    >
      <div className=" container mx-auto">
        <div className="grid sm:grid-cols-4 py-20 ">
          <div className="pl-6 sm:pl-0">
            <img src="../assets/logo.png" className="  w-40" alt="" />
            <ul className=" text-white-200 text-[14px] mt-5 font-normal">
              <li className=" flex items-center">
                <HiLocationMarker className=" text-[30px] mr-2 " />
                Charkhal Road, Dillibazar, Kathmandu, Nepal (Opposite to Post
                office)
              </li>
              <li className=" flex items-centerv my-2 ">
                <HiPhone className=" mr-2" /> +977-01-4445436, +977-01-4445438
              </li>
              <li className=" flex items-center">
                <HiMail className=" mr-2" /> info@omgeducation.com.au
              </li>
              <li className="mt-5">Follow us</li>
              <span className=" mt-5  gap-3 flex">
                <FaFacebookF />
                <FaInstagram />
                <FaTwitter /> <FaLinkedin />
              </span>
            </ul>
          </div>
          <div className=" border-l  text-white-200 border-blue-700 pl-6">
            <h4 className=" text-[18px] font-medium">About us</h4>
            <ul className=" text-[14px] ">
              <li className=" flex items-center font-normal  mt-5">
                <HiOutlineChevronRight
                  className="text-[16px] mr-2"
                  style={{
                    color: "#9eccf4",
                  }}
                />
                Home
              </li>
              <li className=" flex items-center  mt-5">
                {" "}
                <HiOutlineChevronRight
                  className="text-[16px] mr-2"
                  style={{
                    color: "#9eccf4",
                  }}
                />
                About Us
              </li>
              <li className=" flex items-center  mt-5">
                {" "}
                <HiOutlineChevronRight
                  className="text-[16px] mr-2"
                  style={{
                    color: "#9eccf4",
                  }}
                />
                Enquiry
              </li>
              <li className=" flex items-center  mt-5">
                {" "}
                <HiOutlineChevronRight
                  className="text-[16px] mr-2"
                  style={{
                    color: "#9eccf4",
                  }}
                />
                News
              </li>
              <li className=" flex items-center  mt-5">
                {" "}
                <HiOutlineChevronRight
                  className="text-[16px] mr-2"
                  style={{
                    color: "#9eccf4",
                  }}
                />
                Contact Us
              </li>
            </ul>
          </div>
          <div className=" border-l text-white-200 pl-6 border-blue-700">
            <h4 className=" text-[18px] font-medium">Services</h4>
            <ul className=" text-[14px]  ">
              <li className=" flex items-center  mt-5">
                {" "}
                <HiOutlineChevronRight
                  className="text-[16px] mr-2"
                  style={{
                    color: "#9eccf4",
                  }}
                />
                IELTS Preparation
              </li>
              <li className=" flex items-center  mt-5">
                {" "}
                <HiOutlineChevronRight
                  className="text-[16px] mr-2"
                  style={{
                    color: "#9eccf4",
                  }}
                />
                PTE Academic
              </li>
              <li className=" flex items-center  mt-5">
                {" "}
                <HiOutlineChevronRight
                  className="text-[16px] mr-2"
                  style={{
                    color: "#9eccf4",
                  }}
                />
                Education Servicesy
              </li>
              <li className=" flex items-center  mt-5">
                {" "}
                <HiOutlineChevronRight
                  className="text-[16px] mr-2"
                  style={{
                    color: "#9eccf4",
                  }}
                />
                Pre-Departure Assistance
              </li>
            </ul>
          </div>
          <div className=" border-l text-white-200 pl-6 border-blue-700">
            <h4 className=" text-[18px] font-medium">Abroad Study</h4>
            <ul className=" text-[14px]">
              <li className=" flex items-center  mt-5">
                {" "}
                <HiOutlineChevronRight
                  className="text-[16px] mr-2"
                  style={{
                    color: "#9eccf4",
                  }}
                />
                Study in United Kingdom
              </li>
              <li className=" flex items-center  mt-5">
                {" "}
                <HiOutlineChevronRight
                  className="text-[16px] mr-2"
                  style={{
                    color: "#9eccf4",
                  }}
                />
                Study In Australia
              </li>
              <li className=" flex items-center  mt-5">
                {" "}
                <HiOutlineChevronRight
                  className="text-[16px] mr-2"
                  style={{
                    color: "#9eccf4",
                  }}
                />
                Study in Canada
              </li>
              <li className=" flex items-center  mt-5">
                {" "}
                <HiOutlineChevronRight
                  className="text-[16px] mr-2"
                  style={{
                    color: "#9eccf4",
                  }}
                />
                Study In USA
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" border-t border-blue-700 text-white-200 flex justify-center items-center py-4 text-[16px] font-normal">
        <p>© Copyright OMG Education. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
