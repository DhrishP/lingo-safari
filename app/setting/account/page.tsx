import Footer from '@/components/Footer/Footer'
import { UserProfile } from '@clerk/nextjs'
import React from 'react'

export default function page() {
  return (
    <>
    <div className=' flex flex-col py-12 justify-center items-center  w-full min-h-[75vh]'>
        <UserProfile/>
        
    </div>
    <div className="gradient1"></div>
    <Footer/>
    </>
  )
}
