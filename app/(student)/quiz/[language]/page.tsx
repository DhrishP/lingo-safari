import axios from "axios";
import React from "react";
import QuizCard from "./(components)/QuizCard";
import qs from "query-string";

export default async function QuizPage({
  params,
}: {
  params: { language: string };
}) {
  try {
    
    const res = await axios.post(`${process.env.NEXT_PUBLIC_APP_URL}/api/test`,{language:params.language as string})
    console.log(res.data);
    // console.log(await data.json());
  } catch (error) {
    console.log(error);
  }
  const data = [
    {
      statement: "The Hindi word for 'book' is ____.",
      answer: "पुस्तक",
      options: ["पत्रिका", "पुस्तक", "कलम", "कागज़"],
      difficulty: "beginner",
      language: "en",
      coins: 110,
    },
    {
      statement: "Fill in the blank: I am going to the ____.",
      answer: "store",
      options: ["park", "store", "school", "hospital"],
      difficulty: "beginner",
      language: "en",
      coins: 110,
    },
    {
      statement: "What is the synonym of the Hindi word 'बड़ा' in English?",
      answer: "big",
      options: ["small", "tall", "big", "fast"],
      difficulty: "beginner",
      language: "en",
      coins: 110,
    },
    {
      statement: "Which of the following is NOT a color?",
      answer: "love",
      options: ["red", "blue", "yellow", "love"],
      difficulty: "beginner",
      language: "en",
      coins: 110,
    },
    {
      statement: "What is the opposite of the word 'hot'?",
      answer: "cold",
      options: ["warm", "hot", "cold", "lukewarm"],
      difficulty: "beginner",
      language: "en",
      coins: 110,
    },
    {
      statement: "The Hindi word for 'chair' is ____.",
      answer: "कुर्सी",
      options: ["टेबल", "कुर्सी", "सोफा", "बिस्तर"],
      difficulty: "beginner",
      language: "en",
      coins: 110,
    },
    {
      statement: "Fill in the blank: I am ____ years old.",
      answer: "twenty",
      options: ["ten", "twenty", "thirty", "forty"],
      difficulty: "beginner",
      language: "en",
      coins: 110,
    },
    {
      statement: "What is the synonym of the Hindi word 'छोटा' in English?",
      answer: "small",
      options: ["big", "tall", "small", "fast"],
      difficulty: "beginner",
      language: "en",
      coins: 110,
    },
    {
      statement: "Which of the following is a vegetable?",
      answer: "carrot",
      options: ["apple", "banana", "carrot", "orange"],
      difficulty: "beginner",
      language: "en",
      coins: 110,
    },
  ];

  return (
    <div className=" w-full min-h-screen flex justify-center items-center p-24">
      <QuizCard props={data[0]} />
      <div className="gradient1"></div>
    </div>
  );
}
