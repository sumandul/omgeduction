import React from "react";
import {
  InlineWidget,
  PopupButton,
  PopupModal,
  useCalendlyEventListener,
} from "react-calendly";

const Appointment = () => {
  const close = () => {};
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => console.log(e.data.payload),
  });
  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + "../assets/app.jpg" + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "60vh",
          width: "100%",
          position: "relative",
          backgroundAttachment: "fixed",
          zIndex: 1,
        }}
      >
        {" "}
        <h1 className=" absolute top-[50%] left-[10%] z-30  text-white-200 font-medium text-[41px] ">
          Admission Form
        </h1>
        <div className=" z-2 bg-overlay absolute top-0 left-0 w-full h-full"></div>
      </div>
      <div className=" container mx-auto">
        <p className=" font-light text-black-300  px-2 sm:px-0 py-6 ">
          We look forward to welcoming you to{" "}
          <span className=" font-medium">OMG</span>. We respect your privacy
          100%, so the information that you provide will remain strictly
          confidential. Please fill out the form below and click submit for
          further information.
        </p>
        <div className=" bg-yellow-100 px-3 sm:px-8 py-10">
          {/* <div className="   grid gap-4  sm:grid-cols-2 ">
            <div>
              <label htmlFor="" className=" text-[14px]  ">
                Fullname*
              </label>
              <input
                type="text"
                className=" w-full border border-black-400 rounded-[5px] mt-1 py-2 px-3 "
              />
            </div>
            <div>
              <label htmlFor="" className=" text-[14px]  ">
                Highest Qualification
              </label>
              <div>
                <select
                  name=""
                  id=""
                  className="w-full mt-1  border border-black-400 rounded-[5px] py-2 px-3 "
                >
                  <option value="">+2</option>
                  <option value="">Master Degree</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="" className=" text-[14px]  ">
                Contact Number*
              </label>
              <input
                type="text"
                className=" w-full border mt-1 border-black-400 rounded-[5px] py-2 px-3  "
              />
            </div>
            <div>
              <label htmlFor="" className=" text-[14px]  ">
                Email Address*
              </label>
              <input
                type="text"
                className=" w-full border mt-1 border-black-400 rounded-[5px] py-2 px-3  "
              />
            </div>
            <div>
              <label htmlFor="" className=" text-[14px]  ">
                Have you taken IELTS/PTE Test?
              </label>
              <div>
                <select
                  name=""
                  id=""
                  className="w-full  border border-black-400 rounded-[5px] py-2 mt-1 px-3 "
                >
                  <option value="">Yes</option>
                  <option value="">No</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="" className=" text-[14px]  ">
                Select Event Location
              </label>
              <div>
                <select
                  name=""
                  id=""
                  className="w-full mt-1  border border-black-400 rounded-[5px] py-2 px-3 "
                >
                  <option value="">
                    Dillibazar, Charkhal, Kathmandu ,Nepal
                  </option>
                  <option value="">Sydney Australia</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="" className=" text-[14px]  ">
                Select Preferred Time
              </label>
              <div>
                <select
                  name=""
                  id=""
                  className="w-full  mt-1 border border-black-400 rounded-[5px] py-2 px-3 "
                >
                  <option value="">9:00 AM - 10:12 AM</option>
                  <option value="">9:00 AM - 10:12 AM</option>
                  <option value="">9:00 AM - 10:12 AM</option>
                  <option value="">9:00 AM - 10:12 AM</option>
                  <option value="">9:00 AM - 10:12 AM</option>
                  <option value="">9:00 AM - 10:12 AM</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="" className=" text-[14px]  ">
                What course are you interested to study abroad?
              </label>
              <input
                type="text"
                className=" w-full border mt-1 border-black-400 rounded-[5px] py-2 px-3 "
              />
            </div>
            <div className=" col-span-2">
              <label htmlFor="" className=" text-[14px]  ">
                What course are you interested to study abroad?
              </label>
              <div>
                {" "}
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={10}
                  className="w-full rounded-[5px] mt-1"
                ></textarea>
              </div>
           

              <div className=" text-center mt-4">
                <button className=" bg-blue-400 text-white-200 px-5 py-2 rounded-[5px]">
                  submit
                </button>
              </div>
            </div>
          </div> */}
          <div>
            <InlineWidget url="https://calendly.com/binodadhikary" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
