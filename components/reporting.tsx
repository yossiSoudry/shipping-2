import type { NextPage } from "next";
import Image from "next/image";

export type ReportingType = {
  className?: string;
};

const Reporting: NextPage<ReportingType> = () => {
  return (
    <div className="text-right text-steelblue-200 font-heebo">
      <div className="w-[1196px] flex flex-col items-end justify-start  shrink-0 max-w-full">
        <div className="flex gap-4">
          <div className="w-1/2 pt-20 pr-20">
            <p className="text-3xl font-semibold">הפקת דוחות מסודרים בכל זמן</p>
            <p className="text-3xl text-black">ליעול והתמצאות מלאה</p>
            <ul dir="rtl" className="m-0 text-2xl pl-[29px]">
              <li className="mb-0">דוחות חודשיים ממוינים לפי קטגוריות</li>
              <li className="mb-0">
                דוחות איסוף תשלומים וקיזוז מעלויות המשלוחים
              </li>
              <li className="mb-0">אנליזה של שביעות רצון</li>
              <li className="mb-0">דוחות זמני אספקה ואיכות השירות</li>
              <li>ניתוח תובנות שילוח בהתאם לדוחות</li>
            </ul>
          </div>
          <div className="w-1/2 relative">
            <Image
              className="object-contain z-[2] absolute -right-20"
              loading="lazy"
              width={124}
              height={99}
              alt=""
              src="/ar5.svg"
            />
            <Image
              className="w-full h-full object-contain"
              width={1800}
              height={1200}
              alt=""
              src="/rectangle-6@2x.png"
            />
          </div>
        </div>

        <div className=" flex flex-col text-center gap-10 mt-40">
          <b className="text-4xl">
            אנו יודעים להתחבר לכל הפלטפורמות הדיגיטליות המובילות בקלות וביעילות
          </b>
          <div className="w-full flex flex-row items-start justify-end py-0 px-11 box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq1325:flex-wrap">
              <div className="h-[93px] w-[164px] relative bg-gainsboro" />
              <div className="h-[93px] w-[163px] relative bg-gainsboro" />
              <div className="h-[94px] w-[164px] relative bg-gainsboro" />
              <div className="h-[94px] w-[163px] relative bg-gainsboro" />
              <div className="h-[94px] w-[164px] relative bg-gainsboro" />
            </div>
          </div>
          <section
            dir="rtl"
            className="text-2xl font-heebo text-black text-center"
          >
            בנוסף, במידת הצורך, אנו מציעים התממשקות API מתקדמת, המאפשרת חיבור
            ישיר ומדויק למערכות שלכם, לשיפור תהליכי העבודה והאוטומציה. כך תיהנו
            משירות מותאם אישית, חכם ומהיר עוד יותר.
          </section>
        </div>
      </div>
      {/* <div className="w-[326px] flex flex-col items-start justify-start pt-[28.7px] px-0 pb-0 box-border max-w-full text-center text-35xl text-white">
        <h2 className="m-0 self-stretch relative text-inherit font-light font-[inherit] shrink-0 whitespace-nowrap mq450:text-13xl mq900:text-24xl">
          למי שירות E2E מתאים?
        </h2>
      </div> */}
    </div>
  );
};

export default Reporting;
