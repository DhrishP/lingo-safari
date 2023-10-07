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
      take: 15,
    });
    return NextResponse.json(questions);
  } catch (err) {
    console.log(err);
    return NextResponse.error();
  }
}
