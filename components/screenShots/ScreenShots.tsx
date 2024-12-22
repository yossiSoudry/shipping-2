import Image from "next/image";

const ScreenShots = () => {
  return (
    <div>
      <div className="flex container pt-20">
        <div className="flex-1 relative flex items-end">
          <div className="flex flex-col items-end absolute -top-96 left-10">
            <Image
              className="object-contain z-[3]"
              width={340}
              height={600}
              alt=""
              src="/smartphone_mockup.png"
            />
            <Image
              className="object-contain z-[4]"
              loading="lazy"
              width={124}
              height={99}
              alt=""
              src="/ar4.svg"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <p className="text-4xl text-steelblue-200 font-bold">
            מעקב אחרי המשלוח בזמן אמת
          </p>
          <p className="text-4xl">עבור מקבל החבילה ועבור השולח</p>
          <ul className="text-xl leading-9 list-disc px-8">
            <li>עדכון רציף על מצב המשלוח</li>
            <li>התרעות SMS לאורך כל התהליך</li>
            <li>חתימה דיגיטלית על קבלת המשלוח</li>
            <li>מעקב ועדכון איסוף תשלום מהלקוח</li>
            <li>מעקב חזרות וחריגים</li>
            <li>צילום מיקום המשלוח במידה ואושר נקודת הנחה</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ScreenShots;
