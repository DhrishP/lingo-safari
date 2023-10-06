import prisma from "@/prisma/client";
import fs from "fs";
import path from "path";

const InsertData = async () => {
  try {
    const QuestionPath = path.join(__dirname, "data.json");
    const Questiondata: QuestionProps[] = JSON.parse(
      fs.readFileSync(QuestionPath, "utf-8")
    );
    const insert = await prisma.questions.createMany({
      data: Questiondata,
    });
  } catch (error) {}
};

InsertData();
