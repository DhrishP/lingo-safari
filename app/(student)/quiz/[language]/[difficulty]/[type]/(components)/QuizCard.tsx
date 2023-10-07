"use client";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { checker, saveRecord } from "@/lib/AnswerChecker";
import prisma from "@/prisma/client";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { Volume2 } from "lucide-react";

export default function QuizCard({
  type,
  QuizArray,
  Preference,
  StudentId,
}: {
  type: string;
  QuizArray: QuestionProps[];
  Preference: number;
  StudentId: string;
}) {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [coin, setcoin] = React.useState(0)
  let random = Math.floor(Math.random() * QuizArray.length);
  let randomQuiz: QuestionProps[] = [];
  for (let i = 0; i < QuizArray.length; i++) {
    randomQuiz.push(QuizArray[random]);
  }
  useEffect(() => {
    if (!QuizArray[currentQuestion+1]) {
      redirect("/quiz")
      // alert("You have completed the quiz");
    }
  }, [currentQuestion])
  
  console.log(randomQuiz[currentQuestion]);
  const [correct, setCorrect] = React.useState<string[]>([]);
  const openRef = React.useRef<HTMLInputElement>(null);
  const HandleOption = async (option: string) => {
    const addAttemptedQuestion = await saveRecord(randomQuiz[currentQuestion].id, randomQuiz[currentQuestion].answer,option, type)
    if (checker(randomQuiz[currentQuestion].answer, option,type)) {
      setCorrect([...correct, option]);
      toast.success(`Correct Answer +${randomQuiz[currentQuestion].coins} 🪙`);
      setcoin(coin+randomQuiz[currentQuestion].coins);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      toast.error(`Wrong Answer, it should be "${randomQuiz[currentQuestion].answer}"`);
      setCurrentQuestion(currentQuestion + 1);
      console.log(QuizArray.length-currentQuestion)
      
    }
  };
  const textToAudio=()=>{
    const text = type==="mcq"?(randomQuiz[currentQuestion].statement.replaceAll(/_/g, "")+", , "+randomQuiz[currentQuestion].options.join(", ")):randomQuiz[currentQuestion].statement.replaceAll(/_/g, "");
    let msg = text;
    
    let speech = new SpeechSynthesisUtterance();
    speech.lang = `${randomQuiz[currentQuestion].language}-US`;
    
    speech.text = msg;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    
    window.speechSynthesis.speak(speech);
    // speechSynthesis.cancel();
}

  return randomQuiz[currentQuestion]&&(
    <>
      <div className=" space-y-4 md:space-y-6 lg:space-y-2 px-6 md:px-12 lg:px-24">
      <div className="relative w-2/12 h-8 md:w-24 md:h-8 bg-[#a9a9a917] rounded-[9px] overflow-hidden border items-center justify-center border-solid border-[#6c6c6c]">
      <div className=" [font-family:'Inter-Regular',Helvetica] mt-2 font-normal text-[#9f9f9f] text-[12px] text-center leading-[normal] whitespace-nowrap">
       <a href="/quiz"> Back</a>
      </div>
    </div>
        <h1 className={`${coin>0?"opacity-100":"opacity-100"} transition-all font-bold text-xl text-center`}> Total coins earned : {coin}🪙</h1>
        <Card className=" w-full p-2 bg-white text-black rounded-xl  ">
          <CardContent className="space-y-4  ">
            <CardTitle className="font-bold flex flex-row pt-3 gap-2">Your Question<span onClick={()=>{textToAudio()}}><Volume2/></span></CardTitle>
            <CardDescription className="capitalize ">
              {randomQuiz[currentQuestion]?.difficulty} Question
            </CardDescription>
            <div className="mt-22 text-lg">
              {" "}
              {randomQuiz[currentQuestion].statement}
            </div>
          </CardContent>
        </Card>
        {type==="open_ended"?<div className="flex space-x-6 w-full justify-center">
        <input ref={openRef} className=" w-full rounded-xl py-2 px-4 bg-slate-100  border-zinc-950 border text text-zinc-950 " ></input>
        <Button
            onClick={() => {
              const input = openRef.current?.value
              if(input)
              HandleOption(input);
            openRef.current!.value=""
            }}
            size={"lg"}
            className="px-24 bg-slate-50 hover:bg-purple-600 capitalize hover:text-gray-200 text-black  py-6 rounded-xl"
            variant={"outline"}
          >
            Submit
          </Button>
        </div>
        :
        <div className="flex flex-col lg:flex-row gap-2 w-full justify-center">
          <Button
            onClick={() => {
              HandleOption(randomQuiz[currentQuestion].options[0]);
            }}
            size={"lg"}
            className="px-24 bg-slate-50 hover:bg-purple-600 capitalize hover:text-gray-200 text-black  py-6 rounded-xl "
            variant={"outline"}
          >
            {randomQuiz[currentQuestion].options[0]}
          </Button>
          <Button
            onClick={() => {
              HandleOption(randomQuiz[currentQuestion].options[1]);
            }}
            size={"lg"}
            className="px-24 bg-slate-50 hover:bg-purple-600 capitalize hover:text-gray-200 text-black py-6 rounded-xl "
            variant={"outline"}
          >
            {randomQuiz[currentQuestion].options[1]}
          </Button>
          <Button
            onClick={() => {
              HandleOption(randomQuiz[currentQuestion].options[2]);
            }}
            size={"lg"}
            className="px-24 bg-slate-50 hover:bg-purple-600 capitalize hover:text-gray-200 text-black py-6 rounded-xl "
            variant={"outline"}
          >
            {randomQuiz[currentQuestion].options[2]}
          </Button>
          <Button
            onClick={() => {
              HandleOption(randomQuiz[currentQuestion].options[3]);
            }}
            size={"lg"}
            className="px-24 bg-slate-50 hover:bg-purple-600 capitalize hover:text-gray-200 text-black py-6 rounded-xl mb-32"
            variant={"outline"}
          >
            {randomQuiz[currentQuestion].options[3]}
          </Button>
        </div>}
      </div>
    </>
  );
}

    
  