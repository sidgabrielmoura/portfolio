import Link from "next/link";
import { Home } from "lucide-react"

export function NavBar() {
    return (
        <nav className='flex text-[17px] border-b-[1.5px] border-green-600 relative z-10 bg-gray-700 w-screen h-[10vh] items-center text-white justify-around px-10
        sm:px-5 sm:pr-10'>

            <Link href={"/"} className="hover:text-green-600 transition-all duration-300 text-gray-300
            sm:text-[13px] md:text-[23px] xl:text-[19px]"><Home /></Link>
            <Link href="/contatos" className="hover:text-green-600 transition-all duration-300 text-gray-300
            sm:text-[13px] md:text-[23px] xl:text-[19px]">contatos</Link>
            <Link href="/projects" className="hover:text-green-600 transition-all duration-300 text-gray-300
            sm:text-[13px] md:text-[20px] xl:text-[19px] ">projetos</Link>
            <Link href="/about" className="hover:text-green-600 transition-all duration-300 text-gray-300
            sm:text-[13px] md:text-[23px] xl:text-[19px]">sobre</Link>

        </nav>
    )
}