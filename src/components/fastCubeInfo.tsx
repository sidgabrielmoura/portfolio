import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { DiReact } from "react-icons/di";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

export function FastCubeInfo(){
    return(
        <>
            <div className="w-[100%] pl-5 h-screen absolute">
                <Link href={"/projects"} className="text-gray-200 capitalize
            h-[20px] w-[200px] hover:text-gray-100 transition-all duration-300
            z-10 flex mt-5"><ArrowLeft />voltar a tela de projetos</Link>

                {/**/}

                <div className="flex h-[500px] md:items-start md:flex-col-reverse md:justify-evenly sm:flex sm:flex-col sm:justify-around
            xl:justify-between xl:flex-row xl:items-center">
                    <div>
                        <h1 className="text-white text-[30px] font-bold 
                    capitalize">FastCube -</h1>
                        <div className="flex absolute">
                            <SiTailwindcss className="text-gray-300 ml-[5px] hover:text-green-500 hover:text-[35px]
                        transition-all duration-300 text-[30px] relative md:top-[20px] xl:top-[50px] sm:top-[30px]"/>
                            <SiNextdotjs className="text-gray-300 ml-[5px] hover:text-green-500 hover:text-[35px]
                        transition-all duration-300 text-[30px] relative md:top-[20px] xl:top-[50px] sm:top-[30px]"/>
                            <DiReact className="text-gray-300 ml-[5px] hover:text-green-500 hover:text-[35px]
                        transition-all duration-300 text-[30px] relative md:top-[20px] xl:top-[50px] sm:top-[30px]"/>
                        </div>
                    </div>


                    <div className="bg-[url(../assets/fast-cube-img.png)] bg-cover sm:w-[285px] sm:h-[180px] md:w-[650px] md:h-[300px]
                    xl:w-[700px] xl:h-[350px] xl:mr-10 2xl:mr-[200px] rounded-[20px] transition-all duration-500 
                    hover:drop-shadow-[0_0_30px_#358f28] drop-shadow-[0_0_10px_#358f28] xl:hover:w-[750px] sm:hover:w-[350px] md:hover:w-[680px] "/>

                </div>
            </div>
            <div className="md:w-[400px] sm:w-[250px] flex items-center justify-between sm:relative sm:m-auto sm:mb-20">

                <Link href={"https://fast-cube.vercel.app"} target="_blank" className="text-white md:text-lg sm:text-sm font-semibold hover:text-green-500
                transition-all duration-300">Visitar Projeto</Link>

                <Link href={"https://github.com/sidgabrielmoura/fastCube"} target="_blank" className="text-white md:text-lg sm:text-sm font-semibold hover:text-green-500
                transition-all duration-300">Visitar Repositório</Link>

            </div>
        </>
    )
}