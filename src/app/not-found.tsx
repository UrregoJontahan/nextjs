import Image from "next/image";
import Link from "next/link";

export default function NotFound(){
    return(
        <main className="flex flex-col items-center justify-center">
        <h1 className="text-7xl bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent font-bold text-center">404</h1>
        <Image src="/Images/404-error-not-found-1.png" width={800} height={800} alt="Error" />
        <h2>Uy,parece que el enlace se escondio!</h2>
        <p>Pero nuestra tienda esta abierta las 24/7</p>
        <Link href="/store" className="bg-violet-neon w-52 h-20 rounded-full pt-6 text-center ">Vamos de compras</Link>
    </main>
    )
}