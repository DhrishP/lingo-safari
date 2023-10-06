import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import prisma from "@/prisma/client";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { ImageUrl, description, price, name } = await req.json();
    if (!userId)
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    const isTeacher = await prisma.teacher.findUnique({
      where: {
        userId: userId,
      },
    });
    if (!isTeacher)
      return NextResponse.json({ message: "Not a teacher" }, { status: 401 });

    const course = await prisma.courses.create({
      data: {
        TeacherId: userId,
        price,
        description,
        imageUrl: ImageUrl,
        name,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.log("[COURSES]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
