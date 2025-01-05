import Image from "next/image";
import LidForm from "../LidForm";

const Hero = () => {
  return (
    <section dir="rtl" className="relative w-full min-h-screen overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#F7FBFF] h-40 z-10 transform -translate-y-[20%] -translate-x-[10%] -rotate-[10deg] origin-top-left" />
      <div className="absolute top-20 left-0 lg:w-[150%] h-[100%] bg-[#FFF1E5] transform -translate-y-[20%] -translate-x-[10%] -rotate-[10deg] origin-right lg:origin-top-left" />
      <div className="absolute -top-40 left-0 z-20">
        <Image
          src="/לוגו.svg"
          alt="Shipping Logo"
          width={360}
          height={120}
          priority
        />
      </div>

      <div className="relative container mx-auto px-4 h-full">

        <div className="flex flex-col lg:flex-row pt-32">
          <div className="w-full lg:w-1/2 space-y-4">
            <div className="text-[#1B3B75] text-xl leading-relaxed">
              <p>
                <span>עם </span>
                <span className="font-bold">קווי לילה</span>
              </p>
              <p>
                <span className="font-bold">מענה אנושי</span>
                <span> ואישי</span>
              </p>
              <p>ומערכת המטפלת</p>
              <p className="font-bold">בפניות חריגות אחרי שעות הפעילות</p>
            </div>

            <div className="space-y-2">
              <h1 className="text-6xl lg:text-7xl font-black leading-tight">
                משלוחים
                <br />
                במהירות שיא
              </h1>
              <h2 className="text-3xl font-light">אתם והלקוחות מרוצים!</h2>
            </div>
          </div>

          <div className="relative w-full lg:w-1/2 h-[600px]">
            <Image
              src="/truck.png"
              alt="משאית"
              width={520}
              height={300}
              className="absolute bottom-40 left-0"
            />
            <Image
              src="/courier.png"
              alt="שליח"
              width={300}
              height={500}
              className="absolute bottom-6  left-[55%]"
            />
            <Image
              src="/clock.svg"
              alt="שעון"
              width={140}
              height={140}
              className="absolute top-32 left-[90%] z-0"
            />
            <Image
              src="/packages.png"
              alt="חבילות"
              width={400}
              height={250}
              className="absolute bottom-6 left-[60%]"
            />
          </div>
        </div>
        <div className="w-full flex justify-center -mt-20 z-30">
          <LidForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;
