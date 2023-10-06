"use client";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import prisma from "@/prisma/client";
import React from "react";
import toast from "react-hot-toast";

export default function QuizCard({
  QuizArray,
  Preference,
  StudentId
}: {
  QuizArray: QuestionProps[];
  Preference: number;
  StudentId: string;
}) {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  let random = Math.floor(Math.random() * QuizArray.length);
  let randomQuiz: QuestionProps[] = [];
  const dummyvar = 5;
  for (let i = 0; i < QuizArray.length; i++) {
    randomQuiz.push(QuizArray[random]);
  }
  const [correct, setCorrect] = React.useState<string[]>([]);
  const HandleOption = async (option: string) => {
    if (option === randomQuiz[currentQuestion].answer) {
      setCorrect([...correct, option]);
      const addAttemptedQuestion = await prisma.attemptedQuestion.create({
        data: {
          questionId: randomQuiz[currentQuestion].id,
          studentId: StudentId,
          correct: true,
        },
      });
      toast.success("Correct Answer");
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const addAttemptedQuestion = await prisma.attemptedQuestion.create({
        data: {
          questionId: randomQuiz[currentQuestion].id,
          studentId: StudentId,
          correct: false,
        },
      });
      toast.error("Wrong Answer");
      setCurrentQuestion(currentQuestion + 1);
      if (currentQuestion === Preference - 1) {
        alert("You have completed the quiz");
      }
    }
  };
  return (
    <>
      <div className="space-y-40">
        <Card className="w-[75vw] p-8 bg-slate-200 text-black">
          <CardContent className="space-y-3  ">
            <CardTitle className="font-bold">Your Question</CardTitle>
            <CardDescription className="capitalize ">
              {randomQuiz[currentQuestion].difficulty} Question
            </CardDescription>
            <div className="mt-22 text-lg">
              {" "}
              {randomQuiz[currentQuestion].statement}
            </div>
          </CardContent>
        </Card>

        <div className="flex space-x-6 w-full justify-center">
          <Button
            onClick={() => {
              HandleOption(randomQuiz[currentQuestion].options[0]);
            }}
            size={"lg"}
            className="px-24 bg-slate-50 hover:bg-purple-400 capitalize hover:text-gray-200 text-black  py-6 rounded-lg "
            variant={"outline"}
          >
            {randomQuiz[currentQuestion].options[0]}
          </Button>
          <Button
            onClick={() => {
              HandleOption(randomQuiz[currentQuestion].options[1]);
            }}
            size={"lg"}
            className="px-24 bg-slate-50 hover:bg-purple-400 capitalize hover:text-gray-200 text-black py-6 rounded-lg "
            variant={"outline"}
          >
            {randomQuiz[currentQuestion].options[1]}
          </Button>
          <Button
            onClick={() => {
              HandleOption(randomQuiz[currentQuestion].options[2]);
            }}
            size={"lg"}
            className="px-24 bg-slate-50 hover:bg-purple-400 capitalize hover:text-gray-200 text-black py-6 rounded-lg "
            variant={"outline"}
          >
            {randomQuiz[currentQuestion].options[2]}
          </Button>
          <Button
            onClick={() => {
              HandleOption(randomQuiz[currentQuestion].options[3]);
            }}
            size={"lg"}
            className="px-24 bg-slate-50 hover:bg-purple-400 capitalize hover:text-gray-200 text-black py-6 rounded-lg "
            variant={"outline"}
          >
            {randomQuiz[currentQuestion].options[3]}
          </Button>
        </div>
     
      </div>
    </>
  );
}
