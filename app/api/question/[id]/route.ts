import prisma from "@/prisma/client";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { isTeacher, isStudent } from "@/lib/userCheck";

export async function POST(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const { userId } = auth()
        if (!params.id) return NextResponse.json("select a question")
        if (!userId) return NextResponse.json("Unauthorized")
        const { searchParams } = new URL(req.url)
        const correct = searchParams.get("correct")
        let id = ""
        const student = await isStudent(userId)
        if (!student) {
            return NextResponse.json("Only students can answer questions");
        } else {
            id = student.id
        }
        const question = await prisma.attemptedQuestion.create({
            data: {
                studentId: id,
                questionId: params.id,
                correct: correct === "true"
            }
        })
        if (question) {
            return NextResponse.json(question);
        } else {
            return NextResponse.json("failed", { status: 400 });
        }
    } catch (err) {
        console.log(err);
        return NextResponse.error();
    }
}

export async function PUT(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const { userId } = auth();
        const { statement, answer, options, difficulty, language } = await req.json();
        if (!userId) return NextResponse.json("Unauthorized")
        const teacher = await isTeacher(userId)
        if (!teacher) {
            return NextResponse.json("Only teachers can post questions");
        } else {
            const coins = difficulty === "Easy" ? 100 : difficulty === "Medium" ? 150 : 200
            const updatingQuestion = await prisma.questions.findUnique({
                where: {
                    id: params.id
                }
            })
            if (!updatingQuestion) return NextResponse.json("no post found");
            if (teacher.id !== updatingQuestion.TeacherId) {
                return NextResponse.json("Only author can edit questions");
            } else {
                const question = await prisma.questions.update({
                    where: {
                        id: params.id
                    },
                    data: {
                        statement: statement,
                        answer: answer,
                        difficulty: difficulty,
                        coins: coins,
                        language: language,
                        options: options,
                        TeacherId: teacher.id
                    }
                })
                if (question) {
                    return NextResponse.json(question);
                } else {
                    return NextResponse.json("failed", { status: 400 });
                }
            }
        }
    } catch (err) {
        console.log(err);
        return NextResponse.error();
    }
}


export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const { userId } = auth();
        const { statement, answer, options, difficulty, language } = await req.json();
        if (!userId) return NextResponse.json("Unauthorized")
        const teacher = await isTeacher(userId)
        if (!teacher) {
            return NextResponse.json("Only teachers can post questions");
        } else {
            const coins = difficulty === "Easy" ? 100 : difficulty === "Medium" ? 150 : 200
            const updatingQuestion = await prisma.questions.findUnique({
                where: {
                    id: params.id
                }
            })
            if (!updatingQuestion) return NextResponse.json("no post found");
            if (teacher.id !== updatingQuestion.TeacherId) {
                return NextResponse.json("Only author can edit questions");
            } else {
                const question = await prisma.questions.delete({
                    where: {
                        id: params.id
                    }
                })
                if (question) {
                    return NextResponse.json(question);
                } else {
                    return NextResponse.json("failed", { status: 400 });
                }
            }
        }
    } catch (err) {
        console.log(err);
        return NextResponse.error();
    }
}

export async function GET(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const { userId } = auth();
        if (!userId) {
            return NextResponse.json("Unauthorized")
        } else {
            const question = await prisma.questions.findUnique({
                where: {
                    id: params.id
                }
            })
            if (question) {
                return NextResponse.json(question);
            } else {
                return NextResponse.json("failed", { status: 400 });
            }
        }
    } catch (err) {
        console.log(err);
        return NextResponse.error();
    }
}