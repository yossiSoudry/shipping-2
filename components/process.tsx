import type { NextPage } from "next";
import Image from "next/image";

export type ProcessType = {
  className?: string;
};

const Process: NextPage<ProcessType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[26px] box-border max-w-full text-center text-43xl text-steelblue-200 font-heebo ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-[37px] max-w-full mq900:gap-[18px]">
        <div className="self-stretch flex flex-row items-end justify-start flex-wrap content-end gap-[31px] max-w-full mq900:gap-[15px]">
          <div className="flex-1 flex flex-row items-start justify-start relative max-w-full mq900:min-w-full">
            <h1 className="m-0 flex-1 relative text-inherit font-bold font-[inherit] whitespace-pre-wrap mq450:text-18xl mq900:text-31xl">
              איחסון   קבלת הזמנות אריזה ושילוח
            </h1>
            <Image
              className="h-[29.5px] w-12 absolute !m-[0] right-[237px] bottom-[15.5px] object-contain z-[1]"
              loading="lazy"
              width={48}
              height={30}
              alt=""
              src="/arrow-9.svg"
            />
            <Image
              className="h-[29.5px] w-12 absolute !m-[0] bottom-[15.5px] left-[414px] object-contain z-[1]"
              loading="lazy"
              width={48}
              height={30}
              alt=""
              src="/arrow-9.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[15.5px]">
            <Image
              className="w-12 h-[29.5px] relative object-contain"
              loading="lazy"
              width={48}
              height={30}
              alt=""
              src="/arrow-9.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[213px] text-mid text-black mq450:pl-5 mq450:pr-5 mq450:box-border mq900:pl-[53px] mq900:pr-[53px] mq900:box-border mq1325:pl-[106px] mq1325:pr-[106px] mq1325:box-border">
          <div className="flex-1 relative">
            <p className="m-0">{`אנחנו כאן כדי לקחת ממך את כל הטיפול הלוגיסטי. `}</p>
            <p className="m-0">
              נאחסן את הסחורה שלך במחסן המסודר שלנו, נקבל את ההזמנות ישירות
              במערכות שלנו, נארוז בקפידה ונשלח ללקוחות שלך.
            </p>
            <p className="m-0">{`אנחנו מומחים בטיפול בפרויקטים חד פעמיים כמו חלוקת מתנות לעובדים, משלוח ערכות לכנסים או אירועים מיוחדים. `}</p>
            <p className="m-0">
              <span>{`בין אם זה פרויקט חד פעמי או פעילות שוטפת - אנחנו נדאג לכל הלוגיסטיקה `}</span>
              <b className="font-heebo">ואתה תוכל להתרכז בניהול העסק שלך.</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
