import Link from "next/link";
import { Home } from "lucide-react"

export function NavBar() {
    return (
        <nav className='flex text-[17px] border-b-[1.5px] border-gray-400 relative z-10 bg-gray-700 w-screen h-[10vh] items-center text-white justify-around px-10'>

            <Link href={"/"} className="hover:text-violet-600 hover:text-[20px] transition-all duration-300 text-gray-400"><Home /></Link>
            <Link href="/contatos" className="hover:text-violet-600 hover:text-[18px] transition-all duration-300 text-gray-400">contatos</Link>
            <Link href="/projects" className="hover:text-violet-600 hover:text-[18px] transition-all duration-300 text-gray-400">projetos</Link>
            <Link href="/about" className="hover:text-violet-600 hover:text-[18px] transition-all duration-300 text-gray-400">sobre</Link>

        </nav>
    )
}