import type { NextPage } from "next";
import Image from "next/image";
import Cards from "./cards";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[0px] left-[0px] w-full flex flex-col items-start justify-start gap-[7px] max-w-full text-center text-18xl text-gray font-heebo ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start gap-px max-w-full mq1698:flex-wrap">
        <div className="w-full flex flex-col items-start justify-start gap-[68px] shrink-0 max-w-full mq450:gap-[17px] mq900:gap-[34px]">
          <div className="w-full relative max-w-full">
            <form className="m-0 absolute top-[678px] left-[465px] shadow-[5px_4px_32px_-1px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white w-[1096px] h-[155px] z-[3]">
              <div className="absolute top-[0px] left-[0px] shadow-[5px_4px_32px_-1px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white w-full h-full hidden" />
              <button className="cursor-pointer border-gray border-[1px] border-solid p-0 bg-steelblue-200 absolute top-[50px] left-[30px] rounded box-border w-[234px] h-[60px] whitespace-nowrap z-[4] hover:bg-steelblue-100 hover:border-dimgray hover:border-[1px] hover:border-solid hover:box-border">
                <div className="absolute top-[0px] left-[0px] rounded bg-steelblue-200 border-gray border-[1px] border-solid box-border w-full h-full hidden" />
                <b className="absolute top-[7px] left-[36px] text-11xl inline-block font-heebo text-white text-right w-[161px] h-11 z-[5]">
                  תבדקו אותנו
                </b>
              </button>
              <div className="absolute top-[50px] left-[286px] rounded bg-white border-gray border-[1px] border-solid box-border w-[234px] h-[60px] z-[4]">
                <div className="absolute top-[0px] left-[0px] rounded bg-white border-gray border-[1px] border-solid box-border w-full h-full hidden" />
                <div className="absolute top-[7px] left-[126px] text-11xl font-light font-heebo text-gray text-right inline-block w-20 h-11 min-w-[80px] z-[5] mq450:text-lg mq900:text-5xl">
                  אימייל
                </div>
              </div>
              <div className="absolute top-[50px] left-[542px] rounded bg-white border-gray border-[1px] border-solid box-border w-[234px] h-[60px] z-[4]">
                <div className="absolute top-[0px] left-[0px] rounded bg-white border-gray border-[1px] border-solid box-border w-full h-full hidden" />
                <div className="absolute top-[7px] left-[136px] text-11xl font-light font-heebo text-gray text-right inline-block w-[70px] h-11 min-w-[70px] z-[5] mq450:text-lg mq900:text-5xl">
                  טלפון
                </div>
              </div>
              <div className="absolute top-[50px] left-[798px] rounded bg-white border-gray border-[1px] border-solid box-border w-[234px] h-[60px] z-[4]">
                <div className="absolute top-[0px] left-[0px] rounded bg-white border-gray border-[1px] border-solid box-border w-full h-full hidden" />
                <div className="absolute top-[7px] left-[165px] text-11xl font-light font-heebo text-gray text-right inline-block w-[43px] h-11 min-w-[43px] z-[5] mq450:text-lg mq900:text-5xl">
                  שם
                </div>
              </div>
            </form>
            <Image
              className="absolute top-[74px] left-[2px] w-[423px] h-[109px] object-cover z-[2]"
              loading="lazy"
              width={423}
              height={109}
              alt=""
              src="/image-1@2x.png"
            />
            <Image
              className="absolute top-[231px] left-[688px] w-56 h-56 overflow-hidden z-[3]"
              loading="lazy"
              width={224}
              height={224}
              alt=""
              src="/isolation-mode.svg"
            />
            <Image
              className="absolute top-[304px] w-[637px] h-[414px] object-cover z-[4]"
              width={637}
              height={414}
              alt=""
              src="/-11@2x.png"
            />
            <Image
              className="absolute top-[210px] left-[481px] w-[258px] h-[490px] object-cover z-[5]"
              width={258}
              height={490}
              alt=""
              src="/--1@2x.png"
            />
            <Image
              className="absolute top-[522px] left-[508px] w-[439px] h-[205px] object-cover z-[6]"
              width={439}
              height={205}
              alt=""
              src="/--1-1@2x.png"
            />
          </div>

         
        </div>
        {/* <div className="h-[1080px] w-[586px] relative bg-gainsboro shrink-0 max-w-full z-[3]" /> */}
      </div>

    </section>
  );
};

export default FrameComponent;
