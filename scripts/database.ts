import prisma from "@/prisma/client";
import fs from "fs";
import path from "path";
import { Questions } from "@prisma/client";

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

InsertData();
