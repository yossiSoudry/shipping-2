import type { NextPage } from "next";
import Image from "next/image";

export type ProfessionalServiceType = {
  className?: string;
};

const ProfessionalService: NextPage<ProfessionalServiceType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 pl-[252px] pr-0 box-border max-w-full text-center text-6xl text-gray font-heebo ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-[82px] max-w-[156%]">
       
        <div className="w-[950.5px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border gap-[26px] max-w-full text-22xl text-black">
          <h3 className="m-0 self-stretch relative text-inherit font-bold font-[inherit] mq450:text-6xl mq900:text-14xl">
            האקסטרה שלנו - כי אנחנו מאמינים שהאחריות עלינו
          </h3>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 pb-[32.7px] pl-0 pr-6 box-border max-w-full text-right text-16xl">
            <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
              <Image
                className="h-[65.7px] w-[65.5px] absolute !m-[0] top-[9px] right-[-23.5px] object-contain"
                loading="lazy"
                width={66}
                height={66}
                alt=""
                src="/vector.svg"
              />
              <Image
                className="h-[65.7px] w-[65.5px] absolute !m-[0] right-[-23.5px] bottom-[50.3px] object-contain"
                width={66}
                height={66}
                alt=""
                src="/vector.svg"
              />
              <Image
                className="h-[65.7px] w-[65.5px] absolute !m-[0] right-[-23.5px] bottom-[-32.7px] object-contain"
                width={66}
                height={66}
                alt=""
                src="/vector.svg"
              />
              <div className="h-[209px] flex-1 relative leading-[84px] inline-block max-w-full z-[1] mq450:text-2xl mq450:leading-[50px] mq900:text-9xl mq900:leading-[67px]">
                <p className="m-0">
                  <b className="font-heebo text-steelblue-200">+</b>
                  <span className="whitespace-pre-wrap">
                    {" "}
                    ללא הגבלת נסיונות מסירה
                  </span>
                </p>
                <p className="m-0">
                  <b className="font-heebo text-steelblue-200 whitespace-pre-wrap">{`+   `}</b>
                  <span className="whitespace-pre-wrap">
                    {" "}
                    שינוי כתובת ללא עלות
                  </span>
                </p>
                <p className="m-0">
                  <b className="font-heebo text-steelblue-200">+</b>
                  <span className="whitespace-pre-wrap">
                    {" "}
                    יצירת קשר בכל הדרכים - טלפון, SMS וואצאפ ואימייל
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalService;
