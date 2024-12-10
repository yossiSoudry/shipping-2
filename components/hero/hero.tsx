import Image from "next/image";
import FrameComponent from "../frame-component";

const Hero = () => {
  return (
    <div className="h-[calc(100vh-200px)]">
      <Image
        className="absolute -top-16 object-cover z-[1] w-full"
        width={2000}
        height={1100}
        alt=""
        src="/line-1.svg"
      />
      <Image
        className="absolute top-[540px] w-full z-[2] object-cover"
        width={2000}
        height={500}
        alt=""
        src="/line-2.svg"
      />

      <div className="absolute top-[154px] right-20 text-xl text-steelblue-200 inline-block w-[751px] h-[281px] z-[2]">
        <p className="m-0">
          <span className="font-heebo">{`עם `}</span>
          <span className="font-black">קווי לילה</span>
        </p>
        <p className="m-0">
          <span className="font-black">מענה אנושי</span>
          <span> ואישי</span>
        </p>
        <p className="m-0">{`ומערכת המטפלת `}</p>
        <p className="m-0">
          <span>ב</span>
          <span className="font-black">פניות חריגות אחרי שעות הפעילות</span>
        </p>
      </div>
      <h1 className="m-0 absolute top-[404px] right-20 text-[100px] leading-[130px] font-black font-[inherit] inline-block w-[596px] h-[130px] z-[3] mq450:text-11xl mq450:leading-[52px] mq900:text-31xl mq900:leading-[78px]">
        במהירות שיא
      </h1>
      <h1 className="m-0 absolute top-[299px] right-20 text-[98px] font-normal font-[inherit] inline-block w-[372px] h-36 z-[4] mq450:text-10xl mq900:text-[49px]">
        משלוחים
      </h1>
      <h1
        dir="rtl"
        className="m-0 absolute top-[514px] right-20 text-[66px] leading-[91px] font-extralight font-[inherit] inline-block w-[616px] h-[91px] z-[4] mq450:text-21xl mq450:leading-[55px] mq900:text-[53px] mq900:leading-[73px]"
      >
        אתם והלקוחות מרוצים!
      </h1>
      <FrameComponent />
    </div>
  );
};

export default Hero;
