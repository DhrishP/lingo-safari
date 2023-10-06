import { auth } from "@clerk/nextjs";



export default async function QuizPage ({children}:{children:React.ReactNode}){
    const { userId } = auth();
    return (<>{children}</>)
}