"use client";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { saveRecord } from "@/lib/AnswerChecker";
import prisma from "@/prisma/client";
import { redirect } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { Volume2 } from "lucide-react";

export default function QuizCard({
  QuizArray,
  Preference,
  StudentId,
}: {
  QuizArray: QuestionProps[];
  Preference: number;
  StudentId: string;
}) {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  let random = Math.floor(Math.random() * QuizArray.length);
  let randomQuiz: QuestionProps[] = [];
  for (let i = 0; i < QuizArray.length; i++) {
    randomQuiz.push(QuizArray[random]);
  }
  const [correct, setCorrect] = React.useState<string[]>([]);
  const HandleOption = async (option: string) => {
    const addAttemptedQuestion = await saveRecord(randomQuiz[currentQuestion].id, randomQuiz[currentQuestion].answer,option, randomQuiz[currentQuestion].type)
    console.log(addAttemptedQuestion);
    if (option === randomQuiz[currentQuestion].answer) {
      setCorrect([...correct, option]);
      toast.success("Correct Answer");
      setCurrentQuestion(currentQuestion + 1);
    } else {
      toast.error("Wrong Answer");
      setCurrentQuestion(currentQuestion + 1);
      if (currentQuestion === QuizArray.length - 1) {
        redirect("/quiz")
        // alert("You have completed the quiz");
      }
    }
  };
  const textToAudio=()=>{
    const text = randomQuiz[currentQuestion].statement.replaceAll(/_/g, "")+" "+randomQuiz[currentQuestion].options.join(", ");
    let msg = text;
    
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    
    speech.text = msg;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    
    window.speechSynthesis.speak(speech);
    speechSynthesis.cancel();
}

  return (
    <>
      <div className="space-y-40">
        <Card className="w-[75vw] p-8 bg-slate-200 text-black">
          <CardContent className="space-y-3  ">
            <CardTitle className="font-bold flex flex-row gap-2">Your Question<span onClick={()=>{textToAudio()}}><Volume2/></span></CardTitle>
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

    
  