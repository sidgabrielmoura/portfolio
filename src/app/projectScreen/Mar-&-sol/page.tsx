import { Footer } from "@/components/footer";
import { ArrowLeft } from "lucide-react";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si"
import { DiReact } from "react-icons/di"

import Link from "next/link";

export default function MarESol() {
    return (
        <>
            <main className="flex flex-col w-screen h-screen px-[20px] p-5 bg-gray-950 bg-[url(../assets/bg-stars.svg)]
            bg-contain">
                
                {/*blur*/}
                <div className="w-screen h-screen flex justify-center">
                    <div className="w-[700px] h-10 bg-green-600 absolute top-[50px] mx-auto rounded-full blur-full" />
                </div>

                

                {/*last page*/}

                <Link href={"/projects"} className="text-gray-200 capitalize
                    h-[20px] w-[200px] hover:text-gray-100 transition-all duration-300
                    z-10"><ArrowLeft />voltar a tela de projetos</Link>

                {/**/}

                <div className="flex h-[500px] md:items-start md:flex-col-reverse md:justify-evenly sm:flex sm:flex-col sm:justify-around
                xl:justify-between xl:flex-row xl:items-center">
                    <div>
                        <h1 className="text-white text-[30px] font-bold 
                        capitalize">Mar & Sol - <br /> login page</h1>
                        <div className="flex absolute">
                            <SiTailwindcss className="text-gray-300 ml-[5px] hover:text-green-500 hover:text-[35px]
                            transition-all duration-300 text-[30px] relative md:top-[20px] xl:top-[50px] sm:top-[30px]"/>
                            <SiNextdotjs className="text-gray-300 ml-[5px] hover:text-green-500 hover:text-[35px]
                            transition-all duration-300 text-[30px] relative md:top-[20px] xl:top-[50px] sm:top-[30px]"/>
                            <DiReact className="text-gray-300 ml-[5px] hover:text-green-500 hover:text-[35px]
                            transition-all duration-300 text-[30px] relative md:top-[20px] xl:top-[50px] sm:top-[30px]"/>
                        </div>
                    </div>
                    

                    <div className="bg-[url(../assets/Mar&Sol-image.png)] bg-cover sm:w-[285px] sm:h-[180px] md:w-[650px] md:h-[300px]
                        xl:w-[700px] xl:h-[350px] xl:mr-6 rounded-[20px] transition-all duration-500 
                        hover:drop-shadow-[0_0_30px_#358f28] drop-shadow-[0_0_10px_#358f28] xl:hover:w-[750px] sm:hover:w-[350px] md:hover:w-[680px] "/>

                </div>

                <div className="md:w-[400px] sm:w-[250px] flex items-center justify-between m-auto">

                    <Link href={"https://login-react-nine.vercel.app"} className="text-white md:text-lg sm:text-sm font-semibold hover:text-green-500
                        transition-all duration-300">Visitar Projeto</Link>

                    <Link href={"https://github.com/sidgabrielmoura/login-react"} target="_blank" className="text-white md:text-lg sm:text-sm font-semibold hover:text-green-500
                        transition-all duration-300">Visitar Repositório</Link>

                </div>


            </main>
            <Footer></Footer>
        </>
    )
}