import { stringSimilarity } from "string-similarity-js";
import prisma from "@/prisma/client";
import { auth } from "@clerk/nextjs";
import { isTeacher, isStudent } from "@/lib/userCheck";
import axios from "axios";

export const checker =(answer:string, selectedOption: string, type:string) => {
    if(type==="mcq"){
    if(answer===selectedOption){
        return true
    }else{
        return false
    }
}else if(type==="open_ended"){
    let percentageSimilar = stringSimilarity(
        selectedOption.toLowerCase().trim(),
        answer.toLowerCase().trim()
      );
      percentageSimilar = Math.round(percentageSimilar * 100);
      if(percentageSimilar>50){
          return true
      }else{
          return false
      }
}
}

export const saveRecord = async (questionId:string,answer:string,selectedOption:string,type:string) => {
    try {
            console.log({questionId:questionId,correct:checker(answer,selectedOption,type)})
            const record = await axios.post("/api/attempt",{questionId:questionId,correct:checker(answer,selectedOption,type)})
            return record
        
    } catch (error) {
        return error
    }
}