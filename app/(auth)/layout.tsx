

export default function AuthLayout({children}:{children:React.ReactNode}){
    return (
        <div className="flex items-center w-screen h-screen justify-center">
            {children}
        </div>
    )
}