"use client"
import Image from "next/image"

export default function GlobalError( {reset} : ErrorPagesProps ){
    return(
        <main className="flex flex-col items-center justify-center">
            <h1 className="text-7xl bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent font-bold text-center">oh, algo ha salido mal!</h1>
            <Image src="/Images/404-error-not-found-1.png" width={800} height={800} alt="Error" className=""/>
            <button onClick={reset} className="bg-violet-neon w-52 h-20 rounded-full">Volver a intentar</button>
        </main>
    )
}