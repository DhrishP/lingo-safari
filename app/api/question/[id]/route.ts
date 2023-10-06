import prisma from "@/prisma/client";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { isTeacher, isStudent } from "@/lib/userCheck";

export async function GET(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const { userId } = auth()
        if (!params.id) return NextResponse.json("select a question")
        if (!userId) return NextResponse.json("Unauthorized")
        
       
        if (true) {
            return NextResponse.json("");
        } else {
            return NextResponse.json("failed", { status: 400 });
        }
    } catch (err) {
        console.log(err);
        return NextResponse.error();
    }
}