import React, { useEffect, useState } from "react";
import { api, imageBaseUrl } from "../global/baserUrl";

const About = () => {
  const [about, setAbout] = useState<any>(false);
  const hanldeMobileMenu = () => {
    setAbout(true);
  };

  const parseData = (string: string) => {
    var regex = /src="([^"]*)"/;
    var matches = `${string}`?.match(regex);
    if (string) {
      let data = `${string}`.replaceAll('src="', `src=\"${imageBaseUrl}`);
      return data;
    }
  };

  const fetchAbout = async () => {
    const res = await api.get(`/abouts`);
    setAbout(res.data[0]);
  };
  useEffect(() => {
    fetchAbout();
  }, []);

  console.log(about, "hcjsd");
  return (
    <>
      <div
        className="  relative top-0 left-0"
        id="about"
        style={{
          backgroundImage: "url(" + "../assets/2.jpg" + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "60vh",
          width: "100%",
          backgroundAttachment: "fixed",

          zIndex: 1,
        }}
      >
        {" "}
        <h1 className=" absolute top-[50%] left-[10%] z-30 translate-x-[] text-white-200 font-medium text-[41px] ">
          About us
        </h1>
        <div className=" z-2 bg-overlay absolute top-0 left-0 w-full h-full"></div>
      </div>
      <div className="container  py-10 mx-auto">
        <div
          className=" basis-[70%] css-specific "
          dangerouslySetInnerHTML={{
            __html: parseData(about?.description),
          }}
        />
        {/* <h1 className=" px-4 pt-4 sm:px-0 sm:pt-0  text-blue-800 text-[18px]">
          “Your Future, Our Guidance”{" "}
        </h1>
        <p className="px-4 pt-4 sm:px-0 sm:pt-0   font-light text-[16px] text-justify  leading-[32px] text-black-300">
          OMG Education Services was recognised in 2006. We had started our
          association with the mission of providing students with fair and
          correct direction about their advanced studies. Inside our joint
          knowledge of 10 years, our skilled direction analysts and staff have
          accomplished to offer students excellent facilities. We specify in
          providing a varied choice of facilities to scholars wishful to study
          in Australia from counselling them in selecting the correct institute
          and serving with their visa application to greeting them in Australia
          and serving them relax with the Australian lifecycle.{" "}
        </p>
        <p className=" bg-blue-900 text-blue-800 font-light text-center text-[22px] leading-[32px] p-[26px] my-8">
          Since 2006, our side of listed relocation agents, capable education
          analysts, career counsellors, advocates, and assessment specialists
          have provided end-to-end facilities to an additional than 40,000 and
          including worldwide students, and assisted them to emerge their
          Australian visions. We don’t trade ideas; we aid students in creating
          well selections and guide them to occurring their aims by present
          possible education and career advising.{" "}
        </p> */}
        {/* <div className="  sm:flex justify-between ">
          <div className=" relative sm:basis-[40%]">
            <img
              src="../assets/ab-1.jpg"
              className=" w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="px-4 pt-4 sm:px-0 sm:pt-0  sm:basis-[58%]">
            <h3 className=" text-blue-800 font-semibold">Why Us? </h3>
            <p className="  font-light text-[16px] text-justify mt-2 leading-[32px] text-black-300">
              OMG Education Services has well-known itself as a top institute
              that offers honest, reliable, and faithful education and migration
              counselling guidance for learning in Australia. We bid end-to-end
              counselling facilities to global students, whether they are
              looking to come or now in Australia. Be it first counselling on
              the predictions of advanced studies in Australia, or selecting the
              correct education institute, or succumbing visa application or
              traveling to Australia or be it providing guidance for career,
              relocation, or assessment – we offer all of these facilities below
              one roof. OMG has its divisions in Nepal and Australia. And even
              however we first started the founding with the motive of providing
              students with excellent educational direction. Over the years of
              the facility, OMG has also created expertise in migration, RPL,
              and specialized year facilities.{" "}
            </p>
          </div>
        </div> */}
        <div className=" grid mt-8 sm:grid-cols-2 gap-8">
          <div className=" bg-blue-900 p-8 text-center">
            <h3 className=" text-blue-800 text-center font-semibold text-[19px]">
              Our Mission{" "}
            </h3>
            <p className="font-light text-[16px] text-justify mt-2 leading-[32px] text-black-300 ">
              {about?.our_misson}
            </p>
          </div>
          <div className=" bg-blue-900 p-8 text-center">
            <h3 className=" text-blue-800 text-center font-semibold text-[19px]">
              Our Vision{" "}
            </h3>
            <p className="font-light text-[16px] text-justify mt-2 leading-[32px] text-black-300 ">
              {about?.our_vision}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
