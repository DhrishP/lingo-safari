"use client"
import React from 'react'
import {motion} from 'framer-motion';

export default function Loading() {
  return (
    <div className=' flex flex-col justify-center items-center p-24 min-h-screen w-full'>
        <div className="gradient1"></div>
        <motion.img animate={{ translateY: [0, -60, 0] }}
                transition={{ ease: "linear", duration: 8, repeat: Infinity }} height={300} width={300} src='/loading.png'></motion.img>
        <div className="race-by"></div>
        <h1 className=' text-center font-medium text-lg py-2'>Hold up! we're cooking...</h1>
        
    </div>
  )
}
