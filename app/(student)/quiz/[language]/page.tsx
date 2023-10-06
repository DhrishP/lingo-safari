import React from 'react'

export default async function Page({params}:{params: {language: string}}) {
    const data = await fetch(`/api/questions?language=${params.language}`)
    const questions = await data.json()
    console.log(questions) 
  return (
    <div>page</div>
  )
}
