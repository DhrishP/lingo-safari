import { isStudent } from "@/lib/userCheck";
import prisma from "@/prisma/client";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const {userId} = auth();
    if(!userId) return NextResponse.json("Unauthorized");
    const user = await isStudent(userId);
    if(!user) return NextResponse.json("not a student");
    const {questionId, correct} = await req.json();
    if (!(questionId)) return NextResponse.json("select a question");
    const questions = await prisma.attemptedQuestion.create({
      data: {
        questionId: questionId,
        correct: correct,
        studentId: user.id,
      },
    });
    return NextResponse.json(questions);
  } catch (err) {
    console.log(err);
    return NextResponse.error();
  }
}
