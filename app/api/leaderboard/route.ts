import prisma from "@/prisma/client";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { userId } = auth();
  if (!userId) return NextResponse.json({ status: 401 });
  const res = await prisma.student.findMany({
    select: {
      coins: true,
      userId: true,
      username: true,
      id: true,
      questions: true,
    },
  });
  if (!res) return NextResponse.json({ status: 404 });
  return NextResponse.json(res);
}
