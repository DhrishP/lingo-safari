import React from "react";

export default function CardsPage() {
  return (
    <div className=" flex flex-col py-6 px-24 gap-12 w-full justify-center items-center min-h-[80vh]">
      <h1 className=" text-2xl font-bold text-center">I want to Learn... </h1>
      <div className=" flex flex-col flex-wrap lg:flex-nowrap lg:flex-row w-full gap-12">
        <div className=" w-full flex flex-col justify-between items-center bg-slate-400 bg-opacity-20 rounded-2xl pt-12 pb-5 px-12">
          <img
            className=" w-full h-48 shadow-md rounded-2xl border-slate-100 border"
            src="/ukFlag.png"
          />
          <h1 className=" font-semibold text-xl text-center">English</h1>
          <a
            href="/quiz/en"
            className=" rounded-xl bg-slate-400 bg-opacity-40 my-2 border-slate-300 px-4 py-1 text-md font-normal hover:bg-opacity-60 transition-all"
          >
            Start
          </a>
        </div>
        <div className=" w-full  flex flex-col justify-between items-center bg-slate-400 bg-opacity-20 rounded-2xl pt-12 pb-5 px-12">
          <img
            className=" w-full h-48 shadow-md rounded-2xl border-slate-100 border"
            src="/esFlag.png"
          />
          <h1 className=" font-semibold text-xl text-center">Spanish</h1>
          <a
            href="/quiz/es"
            className=" rounded-xl bg-slate-400 bg-opacity-40 my-2 border-slate-300 px-4 py-1 text-md font-normal hover:bg-opacity-60 transition-all"
          >
            Start
          </a>
        </div>
        <div className=" w-full flex flex-col justify-between items-center bg-slate-400 bg-opacity-20 rounded-2xl pt-12 pb-5 px-12">
          <img
            className=" w-full h-48 shadow-md rounded-2xl border-slate-100 border"
            src="/frFlag.png"
          />
          <h1 className=" font-semibold py-4 text-xl text-center">French</h1>
          <a
            href="/quiz/fr"
            className=" rounded-xl bg-slate-400 bg-opacity-40 my-2 border-slate-300 px-4 py-1 text-md font-normal hover:bg-opacity-60 transition-all"
          >
            Start
          </a>
        </div>
      </div>
      <div className="gradient1"></div>
    </div>
  );
}
