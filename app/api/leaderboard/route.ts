import { isStudent } from "@/lib/userCheck";
import prisma from "@/prisma/client";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { userId } = auth();
  if (!userId) return NextResponse.json({ status: 401 });
  const res = await prisma.student.findMany({
    select: {
      coins: true,
      userId: true,
      username: true,
      id: true,
      questions: true,
    },
  });
  if (!res) return NextResponse.json({ status: 404 });
  return NextResponse.json(res);
}

export async function POST(
  req: Request
) {
  try {
    const { userId } = await req.json()
if(!userId) return NextResponse.json("Unauthorized");
const student = await isStudent(userId);
if(!student) return NextResponse.json("not a student");
const res = prisma.attemptedQuestion.findMany({
where: {
  studentId: student.id,
},
select: {
  questionId: true,
  correct: true,
},
});
const attemptedQuestionIds = (await res).map(
(attemptedQuestion) => attemptedQuestion.questionId
);
const fetchcoinval = await prisma.questions.findMany({
where: {
  id: {
    in: attemptedQuestionIds,
  },
},
});
const correct = (await res).map((attemptedQuestion) =>attemptedQuestion.correct === true ? attemptedQuestion.questionId : ""
);
let coin = 0;
for (let i = 0; i < fetchcoinval.length; i++) {
if (correct.includes(fetchcoinval[i].id)) {
  coin += fetchcoinval[i]?.coins as number;
}
}
return NextResponse.json(coin);
  }catch(err){
      console.log(err);
      return NextResponse.error()
  }
};