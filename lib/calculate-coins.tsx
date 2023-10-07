import prisma from "@/prisma/client";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";


export const CalculateCoins = async () => {
    const { userId } = auth();
    if (!userId) redirect("/sign-in");
    const findStudentID = await prisma.student.findUnique({
        where:{
            userId:userId
        }
    })
    if(!findStudentID) redirect("/roleform")
    const res = prisma.attemptedQuestion.findMany({
        where:{
            studentId:findStudentID.id
        },
        select:{
            questionId:true,
            correct:true
        }
    })
    const attemptedQuestionIds = (await res).map((attemptedQuestion) => attemptedQuestion.questionId);
    const fetchcoinval = await prisma.questions.findMany({
        where:{
            id:{
                in:attemptedQuestionIds
            }
        },
        
    })
    const coinval = fetchcoinval.map((question)=>question.coins)
    const correct = (await res).map((attemptedQuestion) =>( attemptedQuestion.correct === true? attemptedQuestion.questionId :null))
    let coin = 0
    if(!coinval) return 0
    for(let i=0;i<fetchcoinval.length;i++){
        if(correct.includes(fetchcoinval[i].id)){
             coin+=fetchcoinval[i]?.coins as number
        }
    }

    return coin
  
  }