import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Collapse } from "antd";
import { api } from "../../../global/baserUrl";
const { Panel } = Collapse;
const text = `
If you are planning to study abroad, you should definitely do it, because it opens you up to new opportunities, new people, and also let’s you experience other cultures. Studying abroad also makes it easy for you to travel internationally without much problems from immigration.
`;
const FAQ = () => {
  const [key, setKey] = useState();
  const onChange = (key) => {
    console.log(key);
    // setKey(key);
  };
  const [faq, setFaq] = useState<any>();
  const fetchTestimonial = async () => {
    const res = await api.get(`/faqs`);
    setFaq(res.data);
  };

  console.log(faq, "ggg");
  useEffect(() => {
    fetchTestimonial();
  }, []);
  return (
    <div className="container  mt-[70px] mx-auto ">
      <h2 className=" text-[2em] sm:text-[3em] text-blue-100 font-medium text-center">
        Frequently Asked Questions
      </h2>
      <div className=" lg:flex  mt-12">
        <div className=" basis-[60%]">
          <Collapse
            defaultActiveKey={["0"]}
            accordion
            className="  bg-yellow-200 border-0"
            style={{
              boxShadow: "0px 4px 16px rgba(0,0,0,0.10)",
            }}
          >
            {faq?.map((data: any, i: any) => {
              return (
                <Panel
                  header={data.title}
                  key={i + 0}
                  className="  bg-white-700 text-[18px] font-medium  text-black-300  border-0 py-4"
                >
                  <p className="  text-[15px] leading-[26px] bg-yellow-100  font-light">
                    {data.answer}
                  </p>
                </Panel>
              );
            })}
          </Collapse>
        </div>
        <div className=" basis-[30%] mt-4 lg:mt-0 lg:ml-8">
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
      </div>
      <div className=" lg:flex justify-between py-10 px-8 mt-10 bg-blue-600 rounded-[6px] text-white-200">
        <div>
          <p className="text-[1.70em]">
            Looking for best IELTS classes? Planning for Study Abroad?
          </p>
        </div>
        <div>
          <Link href={"/contact"}>
            <button className=" mt-5 lg:mt-0 bg-white-200 text-black-200  rounded-[28px] py-2 px-8 ">
              Contact us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
