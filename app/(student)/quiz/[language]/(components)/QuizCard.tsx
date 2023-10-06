"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

export default function QuizCard({
  QuizArray,
  Preference,
}: {
  QuizArray: QuestionProps[];
  Preference: number;
}) {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  let random = Math.floor(Math.random() * QuizArray.length);
  let randomQuiz = [];
  const dummyvar = 5;
  for (let i = 0; i < QuizArray.length; i++) {
    randomQuiz.push(QuizArray[random]);
  }
  const [correct, setCorrect] = React.useState([]);

  return (
    <Card className="w-[75vw] p-10">
      <CardContent className="space-y-3  ">
        <CardTitle>Your Question</CardTitle>
        <CardDescription>
          {randomQuiz[currentQuestion].difficulty} Question
        </CardDescription>
        <div className="mt-22"> {randomQuiz[currentQuestion].statement}</div>
      </CardContent>
    </Card>
  );
}
