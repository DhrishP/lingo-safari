import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { isStudent, isTeacher } from "@/lib/userCheck";

export async function POST(
    req: Request
) {
    try {
        const { userId } = auth();
        const { type, username } = await req.json()
        if (type === "Student") {
            const createStudent = await prisma.student.create({
                data: {
                    userId: userId as string,
                    username: username
                },
            });
        } else if (type === "Teacher") {
            const createTeacher = await prisma.teacher.create({
                data: {
                    userId: userId as string,
                    username: username
                },
            });
        }
        return NextResponse.json(`${type} created successfully`)
    } catch (err) {
        console.log(err);
        return NextResponse.error()
    }
}
 
export async function GET(
    req: Request
) {
    try {
        const { userId } = auth();
        if (!userId) return NextResponse.json("Unauthorized")
        const student = await isStudent(userId)
        if (student) {
            return NextResponse.json(student)
        } else {
            const teacher = await isTeacher(userId)
            if (teacher) {
                return NextResponse.json(teacher)
            } else {
                return NextResponse.json("User not found")
            }
        }
    } catch (err) {
        console.log(err);
        return NextResponse.error()
    }
}

export async function PATCH(
    req: Request
) {
    try {
        const { userId } = auth();
        const { preference } = await req.json()
        if (!userId) return NextResponse.json("Unauthorized")
        const student = await isStudent(userId)
        if (student) {
            const updatedUser = await prisma.student.update({
                where: {
                    id: userId
                },
                data: {
                    PrefTime: preference
                }
            })
            return NextResponse.json(updatedUser)
        }
    } catch (err) {
        console.log(err);
        return NextResponse.error()
    }
}

