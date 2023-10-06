import React from 'react'

export default function QuizCard({props}:{props : {statement: string, answer: string, options: string[], difficulty: string, language: string, coins: number}}) {
    
  return (
    <div className=' flex flex-col justify-center items-center gap-8 p-8 rounded-2xl bg-zinc-900 bg-opacity-40'>
            <h2 className=' text-lg font-semibold py-4 text-center'>{props.statement}</h2>
        {props.options.map((option, index) => {
            return (
              <div key={index} className=' flex w-full flex-col justify-center items-center py-2 px-4 rounded-lg bg-slate-500 bg-opacity-40'>
          
          <h1 className=' text-md font-normal '>{`${index+1}. ${option} `}</h1>
          </div>
            )
          }
        )}
    </div>
  )
}
