import type { NextPage } from "next";

export type PlatformInfoType = {
  className?: string;
};

const PlatformInfo: NextPage<PlatformInfoType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[453px] box-border relative max-w-full text-right text-22xl text-steelblue-200 font-heebo ${className}`}
    >
      <div className="w-full !m-[0] absolute right-[0px] bottom-[0px] left-[0px] bg-burlywood flex flex-col items-end justify-start pt-[147px] pb-[29px] pl-[414px] pr-[606px] box-border gap-[22px] max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq900:pl-[207px] mq900:pr-[303px] mq900:box-border">
        <div className="w-[1728px] h-[453px] relative bg-burlywood hidden max-w-full" />
        <div className="self-stretch flex flex-col items-end justify-start max-w-full">
          <h3 className="m-0 w-[449px] relative text-inherit font-bold font-[inherit] inline-block max-w-full z-[1] mq450:text-6xl mq900:text-14xl">
            מערכת
          </h3>
          <h2 className="m-0 self-stretch relative text-32xl font-extralight font-[inherit] z-[2] mt-[-5px] mq450:text-12xl mq900:text-22xl">
            ALL-IN-ONE
          </h2>
        </div>
        <h3 className="m-0 relative text-24xl font-bold font-[inherit] text-white inline-block max-w-full z-[1] mq450:text-7xl mq900:text-15xl">
          <p className="m-0">פלטפורמה דיגיטלית חכמה</p>
          <p className="m-0">לניהול מושלם של המשלוחים</p>
        </h3>
      </div>
      <div className="self-stretch bg-steelblue-200 flex flex-col items-end justify-start pt-[73px] px-[202px] pb-[203px] box-border relative gap-[34px] max-w-full text-center text-35xl text-white mq450:gap-[17px] mq450:pl-5 mq450:pr-5 mq450:box-border mq900:pl-[101px] mq900:pr-[101px] mq900:box-border">
        <div className="w-[1728px] h-[537px] relative bg-steelblue-200 hidden max-w-full z-[0]" />
        <h2 className="m-0 w-[515px] relative text-inherit font-light font-[inherit] inline-block max-w-full z-[1] mq450:text-13xl mq900:text-24xl">
          למי שירות E2E מתאים?
        </h2>
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-2.5 box-border max-w-full text-16xl">
          <div className="flex-1 flex flex-row items-start justify-center flex-wrap content-start gap-[97px] max-w-full mq450:gap-6 mq900:gap-12">
            <div className="flex-1 flex flex-col items-end justify-start gap-px min-w-[277px] max-w-full">
              <b className="w-[238px] relative inline-block z-[1] mq450:text-2xl mq900:text-9xl">
                יבואנים וסוכנים
              </b>
              <div className="relative text-3xl text-right z-[1] mq450:text-lg">
                שירותי אחסון בטוח לסחורה וטיפול מלא בהפצה ללקוחות ולנקודות
                המכירה.
              </div>
            </div>
            <div className="flex-1 flex flex-col items-end justify-start gap-px min-w-[277px] max-w-full">
              <b className="w-[310px] relative inline-block z-[1] mq450:text-2xl mq900:text-9xl">
                מנהלי רכש בארגונים
              </b>
              <div className="relative text-3xl text-right z-[1] mq450:text-lg">
                פתרון מקצועי לפרויקטים מיוחדים כמו חלוקת שי לעובדים, ערכות
                לכנסים ואירועים תקופתיים.
              </div>
            </div>
            <div className="flex-1 flex flex-col items-end justify-start gap-px min-w-[277px] max-w-full">
              <b className="w-[286px] relative inline-block z-[1] mq450:text-2xl mq900:text-9xl">
                בעלי חנויות אונליין
              </b>
              <div className="relative text-3xl text-right z-[1] mq450:text-lg">
                פתרון קבוע לאחסון וטיפול במשלוחים היומיומיים, בלי הצורך בניהול
                מחסן וצוות אריזה.
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1096px] !m-[0] absolute right-[290px] bottom-[-83px] shadow-[5px_4px_32px_-1px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white flex flex-col items-end justify-start pt-7 pb-[45px] pl-[30px] pr-16 box-border gap-[19px] max-w-full z-[1] text-right text-6xl text-steelblue-200">
          <div className="w-[1096px] h-[189px] relative shadow-[5px_4px_32px_-1px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white hidden max-w-full" />
          <div className="w-[907px] relative inline-block max-w-full z-[2] mq450:text-xl">
            השאירו פרטים ותתחילו להתיעל
          </div>
          <form className="m-0 self-stretch flex flex-row items-start justify-center gap-[22px] mq1325:flex-wrap">
            <button className="cursor-pointer border-gray border-[1px] border-solid pt-[5px] pb-[7px] pl-9 pr-[35px] bg-steelblue-200 flex-[0.9045] rounded box-border flex flex-row items-start justify-start min-w-[161px] max-w-[234px] min-h-[60px] z-[2] hover:bg-steelblue-100 hover:border-dimgray hover:border-[1px] hover:border-solid hover:box-border mq450:flex-1">
              <div className="h-[60px] w-[234px] relative rounded bg-steelblue-200 border-gray border-[1px] border-solid box-border hidden" />
              <b className="flex-1 relative text-11xl font-heebo text-white text-right z-[3]">
                תבדקו אותנו
              </b>
            </button>
            <div className="flex-[0.9775] rounded bg-white border-gray border-[1px] border-solid box-border flex flex-row items-start justify-end pt-[5px] px-[29px] pb-[7px] min-w-[161px] max-w-[234px] min-h-[60px] z-[2] mq450:flex-1">
              <div className="h-[60px] w-[234px] relative rounded bg-white border-gray border-[1px] border-solid box-border hidden" />
              <div className="relative text-11xl font-light font-heebo text-gray text-right z-[3] mq450:text-lg mq900:text-5xl">
                אימייל
              </div>
            </div>
            <div className="flex-[0.9775] rounded bg-white border-gray border-[1px] border-solid box-border flex flex-row items-start justify-end pt-[5px] px-[29px] pb-[7px] min-w-[161px] max-w-[234px] min-h-[60px] z-[2] mq450:flex-1">
              <div className="h-[60px] w-[234px] relative rounded bg-white border-gray border-[1px] border-solid box-border hidden" />
              <div className="relative text-11xl font-light font-heebo text-gray text-right inline-block min-w-[70px] z-[3] mq450:text-lg mq900:text-5xl">
                טלפון
              </div>
            </div>
            <div className="flex-1 rounded bg-white border-gray border-[1px] border-solid box-border flex flex-row items-start justify-end pt-[5px] px-[27px] pb-[7px] min-w-[161px] max-w-[234px] min-h-[60px] z-[2]">
              <div className="h-[60px] w-[234px] relative rounded bg-white border-gray border-[1px] border-solid box-border hidden" />
              <div className="relative text-11xl font-light font-heebo text-gray text-right z-[3] mq450:text-lg mq900:text-5xl">
                שם
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlatformInfo;
