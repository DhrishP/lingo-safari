import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
 
    const {language} = await req.json();
    if (!language) return NextResponse.json("select a language");
    const questions = await prisma.questions.findMany({
      where: {
        language: language,
      },
    });
    return NextResponse.json(questions);
    // const questions = await prisma.questions.findMany({
    //   where: {
    //     language: language,
    //   },
    // });
    // const random = Array.from({ length: 20 }, () =>
    //   Math.floor(Math.random() * questions.length)
    // );
    // const filteredQuestions = questions.filter((val, ind) => {
    //   if (random.includes(ind)) {
    //     return val;
    //   }
    // });
    // if (filteredQuestions) {
    //   return NextResponse.json(filteredQuestions);
    // } else {
    //   return NextResponse.json("failed", { status: 400 });
    // }
  } catch (err) {
    console.log(err);
    return NextResponse.error();
  }
}
