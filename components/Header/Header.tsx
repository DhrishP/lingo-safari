"use client";
import { UserButton } from "@clerk/nextjs";
import React from "react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Settings, Users } from "lucide-react";
import Link from "next/link";
const Header = () => {
  const menu = "/public/menu.svg";
  const cross = "/public/cross.svg";
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle(!toggle);
  return (
    <div className="relative flex justify-between items-center w-full mt-5">
      <Link href={'/'} className="inline-flex items-center pl-9 gap-[14px] relative">
     
          {" "}
          <img
            className="relative w-[30px] h-[30px]"
            alt="Group"
            src="/logo.svg"
          />
          <div className="relative w-fit [font-family:'Inter-Bold',Helvetica] hidden lg:flex font-bold text-white text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
            LingoSafari
          </div>
        
      </Link>
      <div className="pr-5 hidden lg:flex gap-5 items-center">
        <div className="px-1 text-md">
          <a href="/" className="px-4">Home</a>
          <a href="/quiz" className="px-4">Quizes</a>
          <a href="/rewards" className="px-4">Rewards</a>


        </div>
        <div className="flex items-center space-x-5">
          <Link
            href={"/leaderboard"}
            className="flex cursor-pointer space-x-1 p-2 rounded-xl items-center bg-purple-600 hover:bg-purple-700 transition-all"
          >
            <Users className="w-5 h-5" />
            <p>Leaderboard</p>
          </Link>
          <UserButton afterSignOutUrl="/" />
          <Link href={"/setting"} className="cursor-pointer">
            <Settings className="w-5 h-5 " />
          </Link>
        </div>
      </div>
      <div className="lg:hidden z-40 m-4" onClick={handleClick}>
        <div>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Header;
