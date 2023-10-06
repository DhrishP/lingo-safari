import prisma from "@/prisma/client";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { isTeacher, isStudent } from "@/lib/userCheck";

export async function POST(
      req: Request
    ) {
      try {
        const { userId } = auth()
        const {statement, answer, options, difficulty, language } = await req.json()
        if (!userId) return NextResponse.json("Unauthorized")
        const teacher = await isTeacher(userId)
        if (!teacher) {
          return NextResponse.json("Only teachers can post questions");
        }else{
            const coins = difficulty==="Easy"?100:difficulty==="Medium"?150:200
            const question = await prisma.questions.create({
                data : {
                    statement:statement,
                    answer:answer,
                    difficulty:difficulty,
                    coins:coins,
                    language:language,
                    options:options,
                    TeacherId:teacher.id
                }
            })
            if(question){
                return NextResponse.json(question);
            }else{
                return NextResponse.json("failed",{status:400});
            }
        }
      } catch (err) {
        console.log(err);
        return NextResponse.error();
      }
    }

    export async function GET(
        req: Request
    ) {
        try {
            const { userId } = auth()
            const params = new URL(req.url).searchParams
            const language = params.get("language")
            if(!language)return NextResponse.json("selct a language")
            if (!userId) return NextResponse.json("Unauthorized")
            const questions = await prisma.questions.findMany({
                where: {
                    language: language
                }
            })
            const random = Array.from({ length: 20 }, () => Math.floor(Math.random() * questions.length));
            const filteredQuestions = questions.filter((val, ind) => {
                if (random.includes(ind)) {
                    return val
                }
            })
            if (filteredQuestions) {
                return NextResponse.json(filteredQuestions);
            } else {
                return NextResponse.json("failed", { status: 400 });
            }
        } catch (err) {
            console.log(err);
            return NextResponse.error();
        }
    }
// export async function GET(
//   req: Request,
//   { params }: { params: { billboardId: string } }
// ) {
//   try {
//     if (!params.billboardId)
//       return NextResponse.json("Billboard Id needed", { status: 400 });
//     const Billboard = await prisma.billBoard.findUnique({
//       where: {
//         id: params.billboardId,
//       },
//     });
//     if (Billboard) {
//       return NextResponse.json(Billboard);
//     }
//   } catch (err) {
//     console.log(err);
//     return NextResponse.error();
//   }
// }

// export async function PATCH(
//   req: Request,
//   { params }: { params: {  StoreId: string,billboardId: string, } }
// ) {
//   const { userId } = auth();
//   const { label, ImageUrl } = await req.json();
//   if (!userId) return NextResponse.json("Unauthenticated", { status: 401 });
//   if (!label || !ImageUrl)
//     return NextResponse.json("Check the credentials or authentication", {
//       status: 404,
//     });
//   const Isvalid = await prisma.store.findFirst({
//     where: {
//       id: params.StoreId,
//       userId,
//     },
//   });
//   if (!Isvalid) return NextResponse.json("Unauthorized", { status: 403 });

//   const UpdateBill = await prisma.billBoard.update({
//     where: {
//       id: params.billboardId,
//     },
//     data: {
//       label: label,
//       ImageUrl: ImageUrl,
//     },
//   });
//   if (!UpdateBill)
//     return NextResponse.json("Name not updated", { status: 404 });
//   return NextResponse.json(UpdateBill);
// }

// export async function DELETE(
//   req: Request,
//   { params }: { params: { StoreId: string, billboardId: string } }
// ) {
//   const { userId } = auth();
//   if (!userId || !params.StoreId || !params.billboardId)
//     return NextResponse.json("Unauthorized", { status: 401 });
//   const Isvalid = await prisma.store.findFirst({
//     where: {
//       id: params.StoreId,
//       userId,
//     },
//   });
//   if (!Isvalid) return NextResponse.json("Unauthorized", { status: 403 });
//   const DeleteBill = await prisma.billBoard.delete({
//     where: {
//       id: params.billboardId,
//     },
//   });
//   if (DeleteBill) {
//     return NextResponse.json(DeleteBill);
//   }
//   return NextResponse.error();
// }