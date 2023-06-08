import { Footer } from "@/components/footer";
import { ArrowLeft } from "lucide-react";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si"
import { DiReact } from "react-icons/di"

import Link from "next/link";

export default function MarESol() {
    return (
        <>
            <main className="flex flex-col w-screen h-screen px-[20px] p-5 bg-gray-900">
                {/*last page*/}

                <Link href={"/projects"} className="text-gray-200 capitalize
                    h-[20px] w-[200px] hover:text-gray-100 transition-all duration-300
                    z-10"><ArrowLeft />voltar a tela de projetos</Link>

                {/**/}

                <div className="flex h-[500px] items-center">
                    <div>
                        <h1 className="text-white text-[30px] font-bold 
                        capitalize">Mar & Sol - <br /> login page</h1>
                        <div className="flex absolute">
                            <SiTailwindcss className="text-gray-300 ml-[5px] hover:text-green-500 hover:text-[35px]
                            transition-all duration-300 text-[30px] relative top-[50px]"/>
                            <SiNextdotjs className="text-gray-300 ml-[5px] hover:text-green-500 hover:text-[35px]
                            transition-all duration-300 text-[30px] relative top-[50px]"/>
                            <DiReact className="text-gray-300 ml-[5px] hover:text-green-500 hover:text-[35px]
                            transition-all duration-300 text-[30px] relative top-[50px]"/>
                        </div>
                    </div>
                    

                    <div className="bg-[url(../assets/Mar&Sol-image.png)] bg-cover w-[750px] h-[380px]
                        absolute right-[100px] rounded-[20px] transition-all duration-500 
                        hover:drop-shadow-[0_0_50px_#1c7f13] drop-shadow-[0_0_10px_#4d963f] hover:w-[800px] "/>

                </div>

                <div className="w-[400px] flex items-center justify-between m-auto">

                    <Link href={""} className="text-white text-lg font-semibold hover:text-green-500
                        transition-all duration-300">Visitar Projeto</Link>

                    <Link href={"https://github.com/sidgabrielmoura/login-react"} target="_blank" className="text-white text-lg font-semibold hover:text-green-500
                        transition-all duration-300">Visitar Repositório</Link>

                </div>


            </main>
            <Footer></Footer>
        </>
    )
}