import prisma from "@/prisma/client";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { isTeacher, isStudent } from "@/lib/userCheck";

export async function POST(
      req: Request
    ) {
      try {
        const { userId } = auth()
        const {statement, answer, options, difficulty, language } = await req.json()
        if (!userId) return NextResponse.json("Unauthorized")
        const teacher = await isTeacher(userId)
        if (!teacher) {
          return NextResponse.json("Only teachers can post questions");
        }else{
            const coins = difficulty==="Easy"?100:difficulty==="Medium"?150:200
            const question = await prisma.questions.create({
                data : {
                    statement:statement,
                    answer:answer,
                    difficulty:difficulty,
                    coins:coins,
                    language:language,
                    options:options,
                    TeacherId:teacher.id
                }
            })
            if(question){
                return NextResponse.json(question);
            }else{
                return NextResponse.json("failed",{status:400});
            }
        }
      } catch (err) {
        console.log(err);
        return NextResponse.error();
      }
    }

    export async function GET(
        req: Request
    ) {
        try {
            const { userId } = await auth()
            const { searchParams} = new URL(req.url)
            const language = searchParams.get("language")
            console.log(language)
            console.log(userId)
            if(!language)return NextResponse.json("selct a language")
            if (!userId) return NextResponse.json("Unauthorized")
            const questions = await prisma.questions.findMany({
                where: {
                    language: language
                }
            })
            const random = Array.from({ length: 20 }, () => Math.floor(Math.random() * questions.length));
            const filteredQuestions = questions.filter((val, ind) => {
                if (random.includes(ind)) {
                    return val
                }
            })
            if (filteredQuestions) {
                return NextResponse.json(filteredQuestions);
            } else {
                return NextResponse.json("failed", { status: 400 });
            }
        } catch (err) {
            console.log(err);
            return NextResponse.error();
        }
    }
