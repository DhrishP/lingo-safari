import prisma from "@/prisma/client";

export const isStudent = async (userId: string) => {
    try {
        const student = await prisma.student.findUnique({
            where: {
                userId: userId
            }
        })
        if (student) {
            return student
        } else {
            return null
        }
    } catch (error) {
        return null
    }
}

export const isTeacher = async (userId: string) => {
    try {
        const teacher = await prisma.teacher.findUnique({
            where: {
                userId: userId
            }
        })
        if (teacher) {
            return teacher
        } else {
            return null
        }
    } catch (error) {
        return null
    }
}