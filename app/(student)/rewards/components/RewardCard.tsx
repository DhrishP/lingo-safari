import React from 'react'

export default function RewardCard({img, title, description, price} : {img: string, title:string, description:string, price:string}) {
  return (
        <div className=' col-span-1 w-full flex flex-col bg-zinc-400 bg-opacity-30 rounded-xl '>
            <img src={img} className=' w-full h-auto rounded-t-xl'/>
            <div className=' p-5 flex flex-col'>
            <h1 className=' text-2xl font-bold '>{title}</h1>
            <p className=' text-xl font-medium py-4'>{description}</p>
            <button className=' py-2 px-4 bg-purple-500 rounded-xl font-semibold hover:bg-purple-400 transition-all'>{price}🪙</button>
            </div>
        </div>
  )
}
