
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import  prisma  from "@/prisma/client";

export async function DELETE(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const course = await prisma.courses.findUnique({
      where: {
        id: params.courseId
      },
      
    });

    if (!course) {
      return new NextResponse("Course Not found", { status: 404 });
    }

    const deletedCourse = await prisma.courses.delete({
      where: {
        id: params.courseId,
      },
    });

    return NextResponse.json(deletedCourse);
  } catch (error) {
    console.log("[COURSE_ID_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const { userId } = auth();
    const { courseId } = params;
    const {imageUrl,description,name, } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const course = await prisma.courses.update({
      where: {
        id: courseId,
        
      },
      data: {
        imageUrl,
        description,
        name
        
      }
    });

    return NextResponse.json(course);
  } catch (error) {
    console.log("[COURSE_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}