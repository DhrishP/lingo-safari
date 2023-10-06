"use client"
import axios from "axios";
import React from "react";
import QuizCard from "./(components)/QuizCard";

import prisma from "@/prisma/client";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

export default async function QuizPage({
  params,
}: {
  params: { language: string };
}) {
  let data: QuestionProps[] = [];
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/test`,
      { language: params.language as string }
    );
    if (res) {
      data = res.data;
    }
    // console.log(await data.json());
  } catch (error) {
    console.log(error);
  }
  const { userId } = auth();
  if (!userId) redirect("/sign-in");
  const findStudentID = await prisma.student.findUnique({
    where: {
      userId: userId,
    },
  });
  if (!findStudentID) redirect("/roleform");
  const findFinishedQues = await prisma.attemptedQuestion.findMany({
    where: {
      studentId: findStudentID.id,
    },
  });
  const attemptedQuestionIds = findFinishedQues.map((attemptedQuestion) => attemptedQuestion.questionId);
  const NotAttemptedArr = data.filter((question) => !attemptedQuestionIds.includes(question.id));
  

  return (
    <div className=" flex justify-center items-center ">
      <QuizCard  QuizArray={NotAttemptedArr} Preference={findStudentID.PrefTime} />
      <div className="gradient1"></div>
    </div>
  );



}
