import React from 'react'

export default function QuizCard({props}:{props : {statement: string, answer: string, options: string[], difficulty: string, language: string, coins: number}}) {
    
  return (
    <div className=' flex flex-row justify-center items-center gap-8 p-8 rounded-2xl bg-zinc-900 bg-opacity-40'>
        <div className=' flex flex-col justify-center items-center'>
            <h2 className=' text-lg font'></h2>
        </div>
    </div>
  )
}
