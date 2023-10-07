import prisma from "@/prisma/client";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { username, difficulty } = await req.json();
    const { userId } = auth();

    if(!userId) return NextResponse.json("Unauthorized")
    const res = await prisma.student.update({
      where: {
        userId,
      },
      data: {
        username: username,
        difficulty: difficulty,
      },
    });
    return NextResponse.json(JSON.stringify(res))
  } catch (error) {
    return NextResponse.json({ status: 500 });
  }
}
