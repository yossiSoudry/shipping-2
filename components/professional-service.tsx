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
        <div className="flex flex-row items-start justify-start py-0 pl-[34px] pr-0 box-border max-w-full">
          <div className="flex flex-col items-end justify-start gap-[38px]">
            <div className="w-[1850px] flex flex-row items-start justify-start max-w-full">
              <div className="flex flex-col items-end justify-start max-w-full">
                <div className="self-stretch relative z-[2] mq450:text-xl">
                  הלקוחות שלנו מספרים על שירות מקצועי ומדויק שעושה את העבודה
                  פשוטה ויעילה יותר:
                </div>
                <div className="w-[753px] flex flex-row items-start justify-end py-0 pl-[196px] pr-[197px] box-border max-w-full mt-[-12px] text-22xl text-black">
                  <h3 className="m-0 flex-1 relative text-inherit font-bold font-[inherit] z-[1] mq450:text-6xl mq900:text-14xl">
                    הטמעת ביקורות גוגל
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-[708px] flex flex-col items-end justify-start gap-[22px] max-w-full text-right text-32xl text-steelblue-200">
              <h2 className="m-0 self-stretch relative text-inherit font-extralight font-[inherit] z-[1] mq450:text-12xl mq900:text-22xl">
                ALL-IN-ONE
              </h2>
              <h3 className="m-0 relative text-24xl font-bold font-[inherit] text-white inline-block max-w-full mq450:text-7xl mq900:text-15xl">
                <p className="m-0">פלטפורמה דיגיטלית חכמה</p>
                <p className="m-0">לניהול מושלם של המשלוחים</p>
              </h3>
            </div>
          </div>
        </div>
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
