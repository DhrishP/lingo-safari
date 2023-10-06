"use client"
import axios from 'axios'
import { redirect } from 'next/navigation'
import React, { useRef } from 'react'

const RolePage = () => {
    const usernameRef = useRef<HTMLInputElement>(null)
    const [Teacher,SetTeacher] = React.useState(false)
    const Handlesubmit =async () => {
        const input = usernameRef.current?.value
        if(Teacher){
            const res = await axios.post('/api/user',{message:"Teacher",username:input})
            if(!res) return 
        }
        if(!Teacher){
            const res = await axios.post('/api/user',{message:"Student",username:input})
        }
        
        redirect('/quiz')
    }
  return (
    <div>RolePage</div>
  )
}

export default RolePage