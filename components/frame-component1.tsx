import type { NextPage } from "next";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[7945px] left-[0px] bg-steelblue-200 w-full flex flex-col items-start justify-start pt-[107px] pb-[186px] pl-72 pr-[287px] box-border gap-[26px] max-w-full text-center text-31xl text-white font-heebo mq450:pl-5 mq450:pr-5 mq450:box-border mq900:pl-36 mq900:pr-[143px] mq900:box-border ${className}`}
    >
      <div className="w-[1728px] h-[619px] relative bg-steelblue-200 hidden max-w-full" />
      <h2 className="m-0 self-stretch relative text-inherit font-bold font-[inherit] z-[1] mq450:text-11xl mq900:text-21xl">
        <p className="m-0">השארו פרטים כאן</p>
        <p className="m-0">ונתאים לכם את שירות המשלוחים הטוב ביותר עבורכם!</p>
      </h2>
      <div className="self-stretch shadow-[5px_4px_32px_-1px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white overflow-x-auto flex flex-row items-start justify-start pt-[49px] px-[31px] pb-[45px] box-border gap-[23.1px] max-w-full z-[1] text-right text-11xl text-gray">
        <div className="h-[154px] w-[1153px] relative shadow-[5px_4px_32px_-1px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white shrink-0 hidden max-w-full" />
        <div className="w-[246.2px] rounded bg-burlywood shrink-0 flex flex-row items-start justify-start pt-[7px] px-[37px] pb-[9px] box-border z-[1] text-center text-steelblue-200">
          <div className="h-[60px] w-[246.2px] relative rounded bg-burlywood hidden" />
          <b className="flex-1 relative z-[2] mq450:text-lg mq900:text-5xl">
            שליחה
          </b>
        </div>
        <div className="h-[60px] w-[246.2px] rounded bg-white border-gray border-[1px] border-solid box-border shrink-0 flex flex-row items-start justify-end pt-[5px] px-[30px] pb-[7px] z-[1]">
          <div className="h-[60px] w-[246.2px] relative rounded bg-white border-gray border-[1px] border-solid box-border hidden" />
          <div className="relative font-light inline-block min-w-[84.1px] z-[2] mq450:text-lg mq900:text-5xl">
            אימייל
          </div>
        </div>
        <div className="h-[60px] w-[246.2px] rounded bg-white border-gray border-[1px] border-solid box-border shrink-0 flex flex-row items-start justify-end pt-[5px] px-[30px] pb-[7px] z-[1]">
          <div className="h-[60px] w-[246.2px] relative rounded bg-white border-gray border-[1px] border-solid box-border hidden" />
          <div className="relative font-light inline-block min-w-[73.6px] z-[2] mq450:text-lg mq900:text-5xl">
            טלפון
          </div>
        </div>
        <div className="h-[60px] w-[246.2px] rounded bg-white border-gray border-[1px] border-solid box-border shrink-0 flex flex-row items-start justify-end pt-[5px] px-7 pb-[7px] z-[1]">
          <div className="h-[60px] w-[246.2px] relative rounded bg-white border-gray border-[1px] border-solid box-border hidden" />
          <div className="relative font-light inline-block min-w-[45.2px] z-[2] mq450:text-lg mq900:text-5xl">
            שם
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
