import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="header">
      </div>
      <div className="relative flex justify-center"></div>
      <div className="flex flex-col items-center gap-7">
        <div className="md:mt-0 flex flex-col items-center gap-4">
          <h1 className="z-10 text-center lg:text-6xl md:text-5xl text-4xl font-extrabold lg:w-[56rem] md:w-[40rem] w-[22rem] md:leading-normal leading-tight">
            The Most <span className="gradText1 leading-snug">Gamified</span>{" "}
            Way to Learn a Language
          </h1>
          <p className="text-center md:text-xl text-base font-medium text-[#616161] lg:w-[46rem] md:w-[35rem] w-[15rem]">
            Join us and Learn Language in a Jiffy
          </p>
        </div>
        <div className="z-10 flex h-11 justify-between rounded-2xl bg-black border-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
          <div className="relative w-[132px] h-[43px] bg-white rounded-[7px] overflow-hidden border border-solid border-transparent [background:linear-gradient(180deg,rgb(113,101,255)_0%,rgb(85.51,71.19,255)_100%)]">
            <div className="absolute top-[11px] left-[22px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap cursor-pointer">
              <a href="/quiz">Get Started</a>
            </div>
          </div>
        </div>
        <img src="/Saly-10.png" />
        <div className="gradient1"></div>
      </div>
    </>
  );
}
