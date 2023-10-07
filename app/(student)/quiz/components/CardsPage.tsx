"use client"
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function CardsPage() {
  const [lang, setlang] = useState("")
  const [difficulty, setdifficulty] = useState("")
  const [type, settype] = useState("")

  const router = useRouter()
  // useEffect(() => {
  //   if(lang!==""&&difficulty!==""){
  //     router.push(`/quiz/${lang}/${difficulty}`)
  //   }
  // }, [lang,difficulty])
  
  return lang===""?(
    <div className=" flex flex-col py-16 px-6 md:px-24 gap-12 w-full justify-center items-center min-h-screen">
      <h1 className=" text-2xl font-bold text-center">I want to Learn...</h1>
      <div className=" flex flex-col flex-wrap lg:flex-nowrap lg:flex-row w-full gap-12 mb-28">
        <div className=" w-full flex flex-col justify-between items-center bg-slate-400 bg-opacity-20 rounded-2xl pt-12 pb-5 px-12">
          <img
            className=" w-full h-auto shadow-md rounded-2xl object-cover	 border-slate-100 border"
            src="/ukFlag.png"
          />
          <div className=" flex flex-col gap2 py-2">
          <h1 className=" font-semibold text-xl text-center">English</h1>
          <p className=""> Prerequisite: Hindi</p>
          </div>
          <button onClick={()=>{setlang("en")}}
            className=" rounded-xl bg-slate-400 bg-opacity-40 my-2 border-slate-300 px-4 py-1 text-md font-normal hover:bg-opacity-60 transition-all"
          >
            Start
          </button>
        </div>
        <div className=" w-full  flex flex-col justify-between items-center bg-slate-400 bg-opacity-20 rounded-2xl pt-12 pb-5 px-12">
          <img
            className=" w-full h-auto shadow-md rounded-2xl border-slate-100 border"
            src="/esFlag.png"
          />
          <div className=" flex flex-col gap2 py-2">
          <h1 className=" font-semibold text-xl text-center">Spanish</h1>
          <p className=""> Prerequisite: English</p>
          </div>
          <button onClick={()=>{setlang("es")}}
            className=" rounded-xl bg-slate-400 bg-opacity-40 my-2 border-slate-300 px-4 py-1 text-md font-normal hover:bg-opacity-60 transition-all"
          >
            Start
          </button>
        </div>
        <div className=" w-full flex flex-col justify-between items-center bg-slate-400 bg-opacity-20 rounded-2xl pt-12 pb-5 px-12">
          <img
            className=" w-full h-auto shadow-md rounded-2xl border-slate-100 border"
            src="/frFlag.png"
          />
          <div className=" flex flex-col gap2 py-2">
          <h1 className=" font-semibold text-xl text-center">French</h1>
          <p className=""> Prerequisite: English</p>
          </div>
          <button onClick={()=>{setlang("fr")}}
            className=" rounded-xl bg-slate-400 bg-opacity-40 my-2 border-slate-300 px-4 py-1 text-md font-normal hover:bg-opacity-60 transition-all"
          >
            Start
          </button>
        </div>
      </div>
      <div className="gradient1"></div>
    </div>
  ):difficulty===""?(
    <div className=" flex w-full px-24 justify-center items-center min-h-[80vh]">
    <div className=" flex w-full flex-col rounded-2xl bg-slate-100 bg-opacity-30  ">
        <div className=" w-full text-center py-3 px-4 border-b text-2xl font-semibold">Select difficulty</div>
          <div onClick={()=>{setdifficulty("easy")}} className=" w-full text-center py-2 px-4 border-b text-xl font-medium bg-slate-100 bg-opacity-0 hover:bg-opacity-20 transition-all">Easy</div>
          <div onClick={()=>{setdifficulty("intermediate")}} className=" w-full text-center py-2 px-4 border-b text-xl font-medium bg-slate-100 bg-opacity-0 hover:bg-opacity-20 transition-all">Intermediate</div>
          <div onClick={()=>{setdifficulty("advanced")}} className=" w-full text-center py-2 px-4 border-b text-xl font-medium bg-slate-100 bg-opacity-0 hover:bg-opacity-20 transition-all">Advanced</div>
      </div>
      <div className="gradient1"></div>
      </div>
  ):
  (
    <div className=" flex w-full px-24 justify-center items-center min-h-[80vh]">
    <div className=" flex w-full flex-col rounded-2xl bg-slate-100 bg-opacity-30  ">
        <div className=" w-full text-center py-3 px-4 border-b text-2xl font-semibold">Select Type of questions</div>
          <div onClick={()=>{settype("mcq");router.push(`/quiz/${lang}/${difficulty}/${"mcq"}`)}} className=" w-full text-center py-2 px-4 border-b text-xl font-medium bg-slate-100 bg-opacity-0 hover:bg-opacity-20 transition-all">MCQs</div>
          <div onClick={()=>{settype("open_ended");router.push(`/quiz/${lang}/${difficulty}/${"open_ended"}`)}} className=" w-full text-center py-2 px-4 border-b text-xl font-medium bg-slate-100 bg-opacity-0 hover:bg-opacity-20 transition-all">Open-Ended</div>
      </div>
      <div className="gradient1"></div>
      </div>
  )
}