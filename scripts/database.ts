import prisma from "@/prisma/client";
import fs from "fs";
import path from "path";
import { Questions } from "@prisma/client";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const InsertData = async () => {
  try {
    const QuestionPath = path.join(__dirname, "data.json");
    const Questiondata: Questions[] = JSON.parse(
      fs.readFileSync(QuestionPath, "utf-8")
    );
    const insert = await prisma.questions.createMany({
      data: Questiondata,
    });
    console.log(insert);
  } catch (error) {
    console.log(error);
  }
};

const CalculateCoins = async () => {
  const findStudentID = "93fdd337-e6b3-440e-94e6-8396c413b292";
  const res = prisma.attemptedQuestion.findMany({
    where: {
      studentId: findStudentID,
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
  const correct = (await res).map((attemptedQuestion) =>
    attemptedQuestion.correct === true ? attemptedQuestion.questionId : ""
  );
  let coin = 0;
  for (let i = 0; i < fetchcoinval.length; i++) {
    if (correct.includes(fetchcoinval[i].id)) {
      coin += fetchcoinval[i]?.coins as number;
    }
  }
  console.log(coin);
  return coin;
};

CalculateCoins();
