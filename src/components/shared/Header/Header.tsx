import Link from "next/link"

export const Header = () =>{
    return(
        <header>
        <nav className="relative">
            <ul className="flex flex-row flex-nowrap list-none gap-x-10 mx-auto py-8 justify-center">
                <Link href="/">
                    <li className="text-base font-normal text-blue-500 no-underline">home</li>
                </Link>                
                <Link href="/store">
                    <li className="text-base font-normal text-blue-500 no-underline">store</li>
                </Link>
                <Link href="/test">
                    <li className="text-base font-normal text-blue-500 no-underline">test</li>
                </Link>
            </ul>
        </nav>
    </header>
    )
}