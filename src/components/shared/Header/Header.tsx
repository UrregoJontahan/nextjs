import { validateAccessToken } from "app/utils/auth/validateAccessToken";
import Link from "next/link";
import  ShoppingCart  from "../shoppingCart"
import dynamic from "next/dynamic";

const NoSSRShoppingCart = dynamic(()=>import("../shoppingCart"),{ssr:false})

export const Header = async () =>{

    const customer = await validateAccessToken()

    return(
        <header className="relative top-5 z-10">
        <nav>
            <ul className="flex flex-row flex-nowrap list-none gap-x-10 mx-auto py-8 px-5 justify-center">
                <Link href="/">
                    <li className="text-base font-normal text-blue-500 no-underline cursor-pointer">home</li>
                </Link>                
                <Link href="/store">
                    <li className="text-base font-normal text-blue-500 no-underline cursor-pointer">store</li>
                </Link>
                <Link href="/test">
                    <li className="text-base font-normal text-blue-500 no-underline cursor-pointer">test</li>
                </Link>
                <Link href="/account">
                    <li className="text-base font-normal text-blue-500 no-underline cursor-pointer">my account</li>
                </Link>
            </ul>
        </nav>
            <div className="ml-auto flex flex-row items-center gap-x-2 justify-end relative right-6 bottom-20">
                {customer?.firstName ? (<p className="flex text-2xl "> Hola {customer.firstName}</p>): (<Link href="/login">Login</Link>)}
                <NoSSRShoppingCart/>
            </div>
    </header>
    )
}