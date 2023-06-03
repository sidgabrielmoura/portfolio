import Link from "next/link";

export function NavBar() {
    return (
        <nav className='flex text-[17px] relative z-10 bg-gray-700 w-screen h-[10vh] items-center text-white justify-around px-10'>
            <Link href="/contatos" className="hover:text-green-500 hover:text-[18px] transition-all duration-300 text-gray-400">contatos</Link>
            <Link href="/projects" className="hover:text-green-500 hover:text-[18px] transition-all duration-300 text-gray-400">projetos</Link>
            <Link href="/hardskills" className="hover:text-green-500 hover:text-[18px] transition-all duration-300 text-gray-400">competencias</Link>
        </nav>
    )
}