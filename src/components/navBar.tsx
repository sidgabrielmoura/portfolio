import Link from "next/link";
import { Home } from "lucide-react"

export function NavBar() {
    return (
        <nav className='flex text-[17px] relative z-10 bg-gray-700 w-screen h-[10vh] items-center text-white justify-around px-10'>
            <Link href={"/"} className="hover:text-green-500 transition-all duration-300 text-gray-400"><Home /></Link>
            <Link href="/contatos" className="hover:text-green-500 hover:text-[18px] transition-all duration-300 text-gray-400">contatos</Link>
            <Link href="/projects" className="hover:text-green-500 hover:text-[18px] transition-all duration-300 text-gray-400">projetos</Link>
        </nav>
    )
}