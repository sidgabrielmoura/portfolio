export function NavBar() {
    return (
        <nav className='flex text-sm relative z-10 bg-gray-700 w-screen h-[10vh] items-center text-white justify-around px-10'>
            <a href="" className="hover:text-green-500 hover:text-[15px] transition-all duration-300 text-gray-400">contatos</a>
            <a href="" className="hover:text-green-500 hover:text-[15px] transition-all duration-300 text-gray-400">projetos</a>
            <a href="" className="hover:text-green-500 hover:text-[15px] transition-all duration-300 text-gray-400">competencias</a>
        </nav>
    )
}