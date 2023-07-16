import React, { useState, useRef, useEffect } from "react";
import { HiMail, HiPhone, HiOutlineX, HiChevronRight } from "react-icons/hi";
import { MdMenu } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";
import { api } from "../../global/baserUrl";

const Nabar = () => {
  // const menuRef = useRef();
  // console.log(menuRef);
  const [contact, setContact] = useState<any>();
  const [dropDown, setDropDown] = useState(false);
  const [dropDownService, setDropDownService] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileDropDown, setMobileDropDown] = useState(false);
  const hanldeMobileMenu = () => {
    setMobileMenu(true);
  };
  console.log(mobileMenu);
  // useEffect(() => {
  //   document.addEventListener("click", (e) => {
  //     if (menuRef?.current?.contains(e.target)) {
  //       setMobileMenu(false);
  //     }
  //   });
  // }, []);
  const fetchContact = async () => {
    const res = await api.get(`/sticky-header`);
    setContact(res.data);
  };
  useEffect(() => {
    fetchContact();
  }, []);

  console.log(contact, "fdgywefd");

  const [fix, setFix] = useState(false);

  const setFixed = () => {
    if (window.scrollY >= 100) {
      setFix(true);
    } else {
      setFix(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", setFixed);
  }

  return (
    <>
      <div className="absolute nav z-50 top-0 left-0 w-full">
        <div className=" bg-blue-100  w-full">
          <div className=" container hidden lg:block mx-auto">
            <div className=" flex justify-between py-2 text-[14px] z-40">
              <div className=" text-white-200 flex">
                <Link
                  href={
                    "https://web.archive.org/web/20220302081208/mailto:info@omgeducation.com.au"
                  }
                >
                  <span className=" text-white-200 flex items-center ">
                    <HiMail className=" mr-2" />
                    {contact?.email}
                  </span>
                </Link>
                <span className=" ml-10 text-white flex items-center ">
                  <HiPhone className=" mr-2" />
                  {`+977-01-${contact?.Phone_Number}`},{" "}
                  {`+977-01-${contact?.phone_number_2}`}
                </span>
              </div>
              <div>
                <ul className=" text-white-200  flex  ">
                  <li>
                    {/* <Link href={contact?.facebook_link}> */}
                    <FaFacebookF />
                    {/* </Link> */}
                  </li>
                  <li className=" mx-4 ">
                    {/* <Link href={contact?.instagram_link}> */}
                    <FaInstagram />
                    {/* </Link> */}
                  </li>
                  <li>
                    {/* <Link href={contact?.twitter}> */}
                    <FaTwitter />
                    {/* </Link> */}
                  </li>
                  <li className=" ml-4">
                    {/* <Link href={contact?.linkedin_link}> */}
                    <FaLinkedin />
                    {/* </Link> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={` ${fix ? "fix-menu " : ""}`}>
          <div className={`container py-1 px-3 mx-auto  `}>
            <div className=" flex  justify-between items-center">
              <div>
                <Link href="/">
                  {" "}
                  <img
                    src="../assets/logo.png"
                    className="  object-contain w-[80px] sm:w-[130px] h-[72px]"
                    alt=""
                  />{" "}
                </Link>
              </div>
              <div>
                <MdMenu
                  className=" text-white-200 text-[24px] block lg:hidden"
                  onClick={hanldeMobileMenu}
                />
                {mobileMenu && (
                  <ul
                    className={`absolute font-medium top-0 capitalize duration-500 ease-in-out h-screen   text-white-200 px-4 py-8 ${
                      mobileMenu ? "left-[0px] " : " left-[-300px]"
                    }   w-1/2 bg-blue-500 z-50 `}
                  >
                    <div className=" flex  justify-end">
                      <HiOutlineX onClick={() => setMobileMenu(false)} />
                    </div>
                    <li>
                      <Link href={"/"}>Home</Link>
                    </li>
                    <li className=" my-4 ">
                      <Link href={"/about"}>about us</Link>
                    </li>
                    <li
                      className=" my-4 "
                      onClick={() => setMobileDropDown(!mobileDropDown)}
                    >
                      <div className=" flex justify-between">
                        <Link href={"/"}>abroad study</Link>{" "}
                        <HiChevronRight
                          className={` text-[20px] ${
                            mobileDropDown ? "rotate-0" : "rotate-90"
                          }`}
                        />
                      </div>
                      {mobileDropDown && (
                        <ul className=" text-[13px] font-medium  capitalize py-4  ">
                          <Link href={"/australia"}>
                            <li className=" ">Study in australia</li>
                          </Link>
                          <Link href={"/uk"}>
                            <li className=" mt-3">study in uk</li>
                          </Link>
                          <Link href={"/canada"}>
                            <li className=" mt-3">study in cananda</li>{" "}
                          </Link>
                          <Link href={"/usa"}>
                            <li className=" mt-3">study in usa</li>
                          </Link>
                        </ul>
                      )}
                    </li>

                    <li>
                      <Link href={"/service"}>services</Link>
                    </li>
                    <li className=" my-4  ">
                      <Link href={"/new"}>news</Link>
                    </li>

                    <li>
                      <Link href={"/appointment"}>Bookappointment</Link>
                    </li>
                    <li className="my-4 ">
                      <Link href={"/contact"}>contact us</Link>
                    </li>
                  </ul>
                )}
                <ul className=" hidden   lg:flex   text-white-200  uppercase font-medium   text-[14px] ">
                  <li className="py-2 hover:text-yellow-100">
                    <Link href={"/"}>Home</Link>
                  </li>
                  <li className="  py-2">
                    <Link href={"/about"}>about us</Link>
                  </li>
                  <li
                    className="  py-2 relative "
                    onMouseEnter={() => setDropDown(true)}
                    onMouseLeave={() => setDropDown(false)}
                  >
                    <Link href={"/abroadstudy"}>abroad study</Link>
                    {dropDown && (
                      <div className=" bg-yellow-300 absolute py-4 top-8 w-[200px]  left-0 text-black-300 ">
                        <ul className=" uppercase  ">
                          <Link href={"/australia"}>
                            <li className=" hover:bg-blue-100 py-1  ">
                              Study in australia
                            </li>
                          </Link>
                          <Link href={"/uk"}>
                            <li className=" mt-3 hover:bg-blue-100 py-1 ">
                              study in uk
                            </li>
                          </Link>
                          <Link href={"/canada"}>
                            <li className=" mt-3 hover:bg-blue-100 py-1 ">
                              study in cananda
                            </li>{" "}
                          </Link>
                          <Link href={"/usa"}>
                            <li className=" mt-3 hover:bg-blue-100 py-1">
                              study in usa
                            </li>
                          </Link>
                        </ul>
                      </div>
                    )}
                  </li>
                  <li
                    className="py-2 relative"
                    onMouseEnter={() => setDropDownService(true)}
                    onMouseLeave={() => setDropDownService(false)}
                  >
                    <Link href={"/service"}>services</Link>
                    {dropDownService && (
                      <div className=" bg-yellow-300 absolute py-4 top-8 w-[350px]  left-0 text-black-300 ">
                        <ul className=" uppercase  ">
                          <li className="hover:bg-blue-100  py-1">
                            Preparation Classes
                          </li>
                          <li className="hover:bg-blue-100 py-1  mt-3">
                            Career Counselling
                          </li>
                          <li className="hover:bg-blue-100 py-1 mt-3">
                            Admission Assistance
                          </li>
                          <li className="hover:bg-blue-100 py-1  mt-3">
                            Visa Documents Guidance
                          </li>
                          <li className="hover:bg-blue-100 py-1  mt-3">
                            Pre Departure&Post-Arrival Support
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                  <li className="py-2 ">
                    <Link href={"/new"}>news</Link>
                  </li>
                  <li className="py-2">
                    <Link href={"/appointment"}>Bookappointment</Link>
                  </li>
                  <li className="py-2 ">
                    <Link href={"/contact"}>contact us</Link>
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

export default Nabar;
