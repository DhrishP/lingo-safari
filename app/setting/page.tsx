"use client";
import { UserProfile } from "@clerk/nextjs";
import React, { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Footer from "@/components/Footer/Footer";

const SettingPage = () => {
  const Inputref = React.useRef<HTMLInputElement>(null);
  const SelectRef = React.useRef<HTMLSelectElement>(null);
  const [username, setusername] = React.useState<string>("")
  useEffect(() => {
    const test = async () => {
      const res = await axios.get("/api/settings");
        setusername(res.data)
      console.log(res.data);
    };
    test()
  }, []);
  const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const type = SelectRef.current?.value;
    if (!type) return toast.error("Select an option"); // get the value of the select element
    const res = await axios.post("/api/settings", {
      username: username,
    });
    localStorage.setItem("type", type);
    if (!res) return toast.error("Something went wrong");
    toast.success("Updated");
  };
  return (
    <>
    <div className=" flex w-full flex-col gap-6 p-24 min-h-[80vh] justify-center items-center">
      <h1 className=" z-10 text-center lg:text-6xl md:text-5xl text-4xl font-extrabold lg:w-[56rem] md:w-[40rem] w-[22rem] md:leading-normal leading-tight">
        {" "}
        Personalise your <span className="gradText1 leading-snug"> experience</span>
      </h1>
      <div className="gradient1"></div>
      <div className="flex flex-col space-y-2.5 w-1/2">
        <form onSubmit={HandleSubmit}>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-white">
              Your username
            </label>
            <input
              value={username}
         
              onChange={(e)=>{setusername(e.target.value)}}
              type="text"
              id="username"
              className="shadow-sm bg-[#a9a9a917] border border-solid border-[#6c6c6c] text-gray-200 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500 dark:shadow-sm-light"
              placeholder="Your new name...."
              required
            />
          </div>
          <div className="mb-6">
            <select
              ref={SelectRef}
              id="countries"
              className="bg-[#a9a9a917] border border-solid border-[#6c6c6c] text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option defaultValue={'none'} className="text-black">Choose a Type</option>
              <option className="text-black">MCQ</option>
              <option className="text-black">Open-ended</option>
            </select>
          </div>
          <div className="flex flex-col space-y-2.5 text-center font-semibold">
            <a
              href="/setting/account"
              className=" bg-transparent text-cneter flex w-full py-2 px-3 font-extralight text-md border border-slate-100"
            >
              Manage Account
            </a>
          </div>
          <button
            type="submit"
            className="text-white mt-10 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 rounded-[6px] font-medium text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
          >
            Update
          </button>
        </form>
      </div>
      

    </div>
    <Footer/>
    </>
  );
};

export default SettingPage;
