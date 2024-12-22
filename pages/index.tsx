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



      <h3 className="m-0 absolute top-[7092px] left-[1954px] text-inherit font-bold font-[inherit] text-steelblue-200 inline-block w-[449px] h-[60px] mq450:text-6xl mq900:text-14xl">
        מערכת
      </h3>
      <Image
        className="absolute top-[6761px] left-[0px] w-[1727px] h-[560px]"
        width={1727}
        height={560}
        alt=""
        src="/line-3.svg"
      />
      <section className="absolute top-[5794.3px] left-[266px] w-[1462px] flex flex-col items-start justify-start gap-[9px] max-w-full text-center text-10xl text-black font-heebo">
        <Reporting />
        <div className="w-[1207px] flex flex-row items-start justify-start py-0 px-[22px] box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-start gap-[27px] max-w-full mq1325:flex-wrap">
            <div className="h-[337px] flex-1 relative bg-[url('/-1@2x.png')] bg-cover bg-no-repeat bg-[top] min-w-[460px] max-w-full z-[1] mq900:min-w-full">
              <Image
                className="absolute top-[0px] left-[0px] w-full h-full object-cover hidden"
                width={708}
                height={337}
                alt=""
                src="/-1@2x.png"
              />
              <b className="absolute top-[300.94px] left-[-24px] inline-block w-[560px] h-[49.6px] [transform:_rotate(-3.7deg)] [transform-origin:0_0] mq450:text-[23px]">
                <p className="m-0">חברת המשלוחים עם הדרוג הכי גבוה!</p>
              </b>
            </div>
            <div className="flex flex-col items-start justify-start pt-[255px] px-0 pb-0 box-border max-w-full text-right text-22xl text-gray mq900:min-w-full mq1325:flex-1">
              <h3 className="m-0 self-stretch relative text-inherit leading-[46px] font-bold font-[inherit] z-[1] mq450:text-6xl mq450:leading-[28px] mq900:text-14xl mq900:leading-[37px]">
                <p className="m-0">לקוחות ממליצים -</p>
                <p className="m-0">שיתוף מחוויות אמיתיות!</p>
              </h3>
            </div>
          </div>
        </div>
        {/* <ProfessionalService /> */}
      </section>
      <Image
        className="absolute top-[7186.6px] left-[1237px] w-[249.4px] h-[254.1px] overflow-hidden object-contain z-[1]"
        loading="lazy"
        width={249}
        height={254}
        alt=""
        src="/exstra@2x.png"
      />
      {/* <FrameComponent1 /> */}
    </div>
  );
};

export default MacBookPro16;
