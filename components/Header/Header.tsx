"use client";
import { UserButton } from "@clerk/nextjs";
import React from "react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Album } from "lucide-react";
import Link from "next/link";
const Header = () => {
  const menu = "/public/menu.svg";
  const cross = "/public/cross.svg";
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle(!toggle);
  return (
    <div className="relative flex justify-between items-center w-full mt-5">
      <div className="inline-flex items-center pl-9 gap-[14px] relative">
        <img
          className="relative w-[30px] h-[30px]"
          alt="Group"
          src="/logo.svg"
        />
        <div className="relative w-fit [font-family:'Inter-Bold',Helvetica] hidden lg:flex font-bold text-white text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
          Lingo Safari
        </div>
      </div>
      <div className="pr-5 hidden lg:flex gap-5 items-center">
        <div className="flex items-center space-x-3">
        <Link href={'/courses'} className="flex cursor-pointer p-2 rounded-xl items-center bg-purple-600 ">
            <Album className="w-5 h-4" />
            <p>Courses</p>
          </Link >
          <UserButton afterSignOutUrl="/" />
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
