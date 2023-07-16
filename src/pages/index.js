import Banner from "../components/section/home/banner";
import About from "../components/section/home/about";
import Distination from "../components/section/home/distination";
import Service from "../components/section/home/service.tsx";
import Testimonials from "../components/section/home/testimonial";
import Client from "../components/section/home/client";
import FAQ from "../components/section/home/faq.tsx";
export default function Home() {
  return (
    <div className=" -z-10   w-full">
      <Banner />
      <About />
      <Distination />
      <Service />
      <Testimonials />
      <Client />
      <FAQ />
    </div>
  );
}
