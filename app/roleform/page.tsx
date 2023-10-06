"use client"
import axios from 'axios'
import { redirect, useRouter } from 'next/navigation'
import React, { useRef } from 'react'
import Header from "@/components/Header/Header"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function RolePage(){
    const usernameRef = useRef<HTMLInputElement>(null)
    const [Teacher,SetTeacher] = React.useState(false)
    const Handlesubmit =async () => {
        const input = usernameRef.current?.value
        console.log(input)
        if(Teacher){
            const res = await axios.post('/api/user',{type:"Teacher",username:input})
            if(!res) return 
        }
        if(!Teacher){
            const res = await axios.post('/api/user',{type:"Student",username:input})
            if(!res) return
        }
        const router = useRouter()
        router.push('/quiz')
    }
  return (
    <div>
   
      <div className="mt-10 flex flex-col items-center gap-7">
      <h1 className="z-10 text-center lg:text-6xl md:text-5xl text-4xl font-extrabold lg:w-[56rem] md:w-[40rem] w-[22rem] md:leading-normal leading-tight">
            Lets <span className="gradText1 leading-snug">Break</span>{" "}
            the ice.
          </h1>
      <div className='gradient1'></div>
    <Card className="w-[350px] bg-opacity-10 bg-purple-300 rounded-xl border-gray-600">
      <CardHeader>
        <CardTitle>Tell us about yourself</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className=''>
        <form>
          <div className="grid w-full items-center gap-4" >
            <div className="flex flex-col space-y-2.5">
              <Label htmlFor="name">Give Yourself a Nickname</Label>
              <Input ref={usernameRef} id="name" placeholder="Username" />
            </div>
            <div className="flex flex-col space-y-2.5">
              <Label htmlFor="framework">Choose your Profession: </Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="none">{" "}</SelectItem>
                  <SelectItem value="student">Student </SelectItem>
                  <SelectItem value="teacher">Teacher</SelectItem>
                  
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Back</Button>
        <Button onClick={()=>{Handlesubmit()}} type='submit'>Next</Button>
      </CardFooter>
    </Card>
    </div>
    </div>
  )
}

