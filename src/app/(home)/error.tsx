"use client"

interface ErrorProps{
    error:Error;
    reset:()=>void;
}

export default function error({error,reset}: ErrorProps){
    return(
        <div className="pt-12">
            <h1 className="text-5xl text-center">404</h1>
            <h2 className="text-3xl text-center">Ha ocurrido un error</h2>
            <button onClick={reset} className="bg-red-500 flex justify-center relative text-center">intentar de nuevo</button>
        </div>
    )
}