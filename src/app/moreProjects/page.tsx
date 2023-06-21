import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function MoreProjects(){
    return(
        <>
            <main className="flex w-screen sm:h-screen xl:h-[200vh] px-[20px] justify-around items-center bg-gray-900 bg-[url(../assets/bg-stars.svg)] bg-contain">
                
                <Link href={"/projects"} className="absolute top-0 left-0 m-10
                text-gray-200 capitalize h-[20px] w-[200px] hover:text-gray-100 transition-all 
                duration-300 sm:z-10"><ArrowLeft />voltar a tela de projetos</Link>

                {/*blur*/}

                <div className="w-[500px] fixed h-10 bg-violet-800 top-[50px] m-auto rounded-full blur-[100px]" />

                {/*cards*/}
                
                <div className="sm:h-screen xl:h-[150vh] w-screen px-14 xl:grid-cols-3 xl:grid-rows-3 xl:gap-24 xl:grid
                sm:flex sm:flex-row sm:m-2 sm:overflow-x-auto sm:items-center xl:overflow-hidden py-14">

                    <section className="w-[300px] h-[300px] border-2 border-gray-200 rounded-[20px]
                    flex hover:w-[340px] transition-all duration-300 cursor-pointer
                    bg-[url(../assets/Mar&Sol-image.png)] hover:drop-shadow-[0_0_40px_#99289c] bg-contain bg-no-repeat justify-center">

                        <div className="px-[10px] mt-[200px] flex flex-col h-[80px] w-[300px] text-center">
                            <h1 className="text-white">Mar & Sol</h1>

                            <Link href="/projectScreen/Mar-&-sol" className="flex items-center justify-center hover:text-violet-800 transition-all duration-300
                            text-gray-400">Ver Mais</Link>
                        </div>

                    </section>

                    <section className="w-[300px] h-[300px] border-2 border-gray-200 rounded-[20px]
                    flex hover:w-[340px] transition-all duration-300 cursor-pointer
                    justify-center bg-gray-600 animate-pulse sm:ml-4 xl:ml-0">

                        <div className="px-[10px] mt-[200px] flex flex-col h-[80px] w-[300px] text-center">
                            <h1 className="text-white">-----</h1>

                            {/*<Link href="/projectScreen/Mar-&-sol" className="flex items-center justify-center hover:text-violet-800 transition-all duration-300
                            text-gray-400 ">Ver Mais</Link>*/}
                        </div>

                    </section>

                    <section className="w-[300px] h-[300px] border-2 border-gray-200 rounded-[20px]
                    flex hover:w-[340px] transition-all duration-300 cursor-pointer
                    justify-center bg-gray-600 animate-pulse sm:ml-4 xl:ml-0">

                        <div className="px-[10px] mt-[200px] flex flex-col h-[80px] w-[300px] text-center">
                            <h1 className="text-white">-----</h1>

                            {/*<Link href="/projectScreen/Mar-&-sol" className="flex items-center justify-center hover:text-violet-800 transition-all duration-300
                            text-gray-400 ">Ver Mais</Link>*/}
                        </div>

                    </section>

                    <section className="w-[300px] h-[300px] border-2 border-gray-200 rounded-[20px]
                    flex hover:w-[340px] transition-all duration-300 cursor-pointer
                    justify-center bg-gray-600 animate-pulse sm:ml-4 xl:ml-0">

                        <div className="px-[10px] mt-[200px] flex flex-col h-[80px] w-[300px] text-center">
                            <h1 className="text-white">-----</h1>

                            {/*<Link href="/projectScreen/Mar-&-sol" className="flex items-center justify-center hover:text-violet-800 transition-all duration-300
                            text-gray-400 ">Ver Mais</Link>*/}
                        </div>

                    </section>

                    <section className="w-[300px] h-[300px] border-2 border-gray-200 rounded-[20px]
                    flex hover:w-[340px] transition-all duration-300 cursor-pointer
                    justify-center bg-gray-600 animate-pulse sm:ml-4 xl:ml-0">

                        <div className="px-[10px] mt-[200px] flex flex-col h-[80px] w-[300px] text-center">
                            <h1 className="text-white">-----</h1>

                            {/*<Link href="/projectScreen/Mar-&-sol" className="flex items-center justify-center hover:text-violet-800 transition-all duration-300
                            text-gray-400 ">Ver Mais</Link>*/}
                        </div>

                    </section>

                    <section className="w-[300px] h-[300px] border-2 border-gray-200 rounded-[20px]
                    flex hover:w-[340px] transition-all duration-300 cursor-pointer
                    justify-center bg-gray-600 animate-pulse sm:ml-4 xl:ml-0">

                        <div className="px-[10px] mt-[200px] flex flex-col h-[80px] w-[300px] text-center">
                            <h1 className="text-white">-----</h1>

                            {/*<Link href="/projectScreen/Mar-&-sol" className="flex items-center justify-center hover:text-violet-800 transition-all duration-300
                            text-gray-400 ">Ver Mais</Link>*/}
                        </div>

                    </section>

                    <section className="w-[300px] h-[300px] border-2 border-gray-200 rounded-[20px]
                    flex hover:w-[340px] transition-all duration-300 cursor-pointer
                    justify-center bg-gray-600 animate-pulse sm:ml-4 xl:ml-0">

                        <div className="px-[10px] mt-[200px] flex flex-col h-[80px] w-[300px] text-center">
                            <h1 className="text-white">-----</h1>

                            {/*<Link href="/projectScreen/Mar-&-sol" className="flex items-center justify-center hover:text-violet-800 transition-all duration-300
                            text-gray-400 ">Ver Mais</Link>*/}
                        </div>

                    </section>

                    <section className="w-[300px] h-[300px] border-2 border-gray-200 rounded-[20px]
                    flex hover:w-[340px] transition-all duration-300 cursor-pointer
                    justify-center bg-gray-600 animate-pulse sm:ml-4 xl:ml-0">

                        <div className="px-[10px] mt-[200px] flex flex-col h-[80px] w-[300px] text-center">
                            <h1 className="text-white">-----</h1>

                            {/*<Link href="/projectScreen/Mar-&-sol" className="flex items-center justify-center hover:text-violet-800 transition-all duration-300
                            text-gray-400 ">Ver Mais</Link>*/}
                        </div>

                    </section>

                    <section className="w-[300px] h-[300px] border-2 border-gray-200 rounded-[20px]
                    flex hover:w-[340px] transition-all duration-300 cursor-pointer
                    justify-center bg-gray-600 animate-pulse sm:ml-4 xl:ml-0">

                        <div className="px-[10px] mt-[200px] flex flex-col h-[80px] w-[300px] text-center">
                            <h1 className="text-white">-----</h1>

                            {/*<Link href="/projectScreen/Mar-&-sol" className="flex items-center justify-center hover:text-violet-800 transition-all duration-300
                            text-gray-400 ">Ver Mais</Link>*/}
                        </div>

                    </section>
                </div>

            </main>
        
        </>
    )
}