import { UserProfile } from '@clerk/nextjs'
import React from 'react'
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SettingPage = () => {
  return (
    <div className=' flex w-full flex-col gap-6 p-24 min-h-[80vh] justify-center items-center'>
      <h1 className=' font-semibold text-xl text-center'> Personalise your experience</h1>
      <div className="flex flex-col space-y-2.5 w-1/2">
                  <Label className=' w-full rounded-xl' htmlFor="typeofgame">Choose your Preference: </Label>
                  <Select>
                    <SelectTrigger id="typeofgame">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="none"> </SelectItem>
                      <SelectItem value="student">MCQ </SelectItem>
                      <SelectItem value="teacher">Open-ended</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col space-y-2.5 w-1/2">
                  <Label className=' w-full rounded-xl' htmlFor="typeofgame">Language you are well versed in: </Label>
                  <Select>
                    <SelectTrigger id="typeofgame">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="none"> </SelectItem>
                      <SelectItem value="hi">Hindi </SelectItem>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="ta">Tamil</SelectItem>
                      <SelectItem value="te">Telugu</SelectItem>
                      <SelectItem value="pn">Punjabi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex flex-col space-y-2.5 w-1/2">
              <a href='/setting/account' className=' bg-transparent flex w-full py-2 px-3 font-extralight text-md border border-slate-100'>Manage Account</a>
              </div>
    </div>
  )
}

export default SettingPage