import { CalculateCoins } from '@/lib/calculate-coins';
import { auth } from '@clerk/nextjs';
import axios from 'axios'
import React from 'react'
import RewardCard from './components/RewardCard';
import { title } from 'process';

export default async function page() {
    const coin = CalculateCoins()
    const data = [
        {
            "img": "/cpn1.png",
            "title": "10% off on all Samsung products",
            "description": "Use this coupon to get 10% off on all products",
            "price": "500",
        },
        {
            "img": "/cpn2.png",
            "title": "20% off on all products",
            "description": "Use this coupon to get 10% off on all products",
            "price": "700",
        },
        {
            "img": "/cpn3.png",
            "title": "10% off on all products",
            "description": "Use this coupon to get 10% off on all products",
            "price": "900",
        },
        {
            "img": "/cpn4.png",
            "title": "40% off on all products",
            "description": "Use this coupon to get 10% off on all products",
            "price": "500",
        },
        {
            "img": "/cpn5.png",
            "title": "35% off on all products",
            "description": "Use this coupon to get 10% off on all products",
            "price": "1000",
        },
    ]
    return (
        <div className=' flex flex-col w-full min-h-[80vh] justify-center px-12 items-center'>
            <h1 className=' text-6xl font-extrabold text-center py-4'>🪙</h1>
            <h2 className=' text-3xl font-bold'>{coin} left</h2>
            <div className="gradient1"></div>
            <div className=' my-12 grid grid-cols-3 w-full gap-6 bg-zinc-950 bg-opacity-70 p-12 bg-rounded-xl'>
            {data.map((item, index) => {
                return(
                    <RewardCard key={index} img={item.img} title={item.title} description={item.description} price={item.price} />
                )
            })}
            </div>

        </div>
    )
}
