import type { NextPage } from "next";
import Image from "next/image";
import Cards from "../components/cards";
import Content from "../components/content";
import Hero from "../components/hero/hero";
import Process from "../components/process";
import Reporting from "../components/reporting";
import Responsibilities from "../components/responsibilities/Responsibilities";
import ScreenShots from "../components/screenShots/ScreenShots";
import LidForm from "../components/LidForm";
import Reviews from "../components/Reviews";
import Footer from "../components/frame-component1";

const MacBookPro16: NextPage = () => {
  return (
    <div className="w-full h-full relative bg-white text-right text-22xl text-gray font-heebo">
      {/* <header className=" bg-sky-100 w-full h-80" /> */}
      <Hero />
      <Cards />
      <Responsibilities />
      <Content />
      <Process />
      <ScreenShots />
      <Reviews />
      {/* <Footer /> */}
    </div>
  );
};

export default MacBookPro16;
