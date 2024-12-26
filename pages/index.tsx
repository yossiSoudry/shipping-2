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

const MacBookPro16: NextPage = () => {
  return (
    <div className="w-full h-full relative bg-white text-right text-22xl text-gray font-heebo">
      <header className=" bg-aliceblue w-full h-80" />
      <Hero />
      <Cards />
      <Responsibilities />
      <Content />
      <Process />
      <ScreenShots />
      <Reviews />



      {/* <h3 className="m-0 absolute top-[7092px] left-[1954px] text-inherit font-bold font-[inherit] text-steelblue-200 inline-block w-[449px] h-[60px] mq450:text-6xl mq900:text-14xl">
        מערכת
      </h3> */}
      {/* <Image
        className="absolute top-[6761px] left-[0px] w-[1727px] h-[560px]"
        width={1727}
        height={560}
        alt=""
        src="/line-3.svg"
      /> */}

      {/* <Image
        className="absolute top-[7186.6px] left-[1237px] w-[249.4px] h-[254.1px] overflow-hidden object-contain z-[1]"
        loading="lazy"
        width={249}
        height={254}
        alt=""
        src="/exstra@2x.png"
      /> */}
      {/* <FrameComponent1 /> */}
    </div>
  );
};

export default MacBookPro16;
