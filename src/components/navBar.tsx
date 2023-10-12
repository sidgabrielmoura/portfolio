import Link from "next/link";
import { Home } from "lucide-react"

export function NavBar() {
    return (
        <nav className='flex text-[17px] border-b-[1.5px] border-main relative z-10 bg-gray-700 w-[100%] h-[10vh] items-center text-white justify-around px-10
        sm:px-5 sm:pr-10'>

            <Link href={"/"} className="hover:text-secondary transition-all duration-300 text-gray-300
            sm:text-[15px] md:text-[23px] xl:text-[17px]"><Home /></Link>
            <Link href="/projects" className="hover:text-secondary transition-all duration-300 text-gray-300
            sm:text-[15px] md:text-[20px] xl:text-[17px] ">projetos</Link>
            <Link href="/about" className="hover:text-secondary transition-all duration-300 text-gray-300
            sm:text-[15px] md:text-[23px] xl:text-[17px]">sobre</Link>

        </nav>
    )
}