import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { SiCss3, SiJavascript } from "react-icons/si";
import { GoDeviceDesktop, GoDeviceMobile} from "react-icons/go"

export function TextConvertInfo() {
    return (
        <>
            <div className="w-[100%] pl-5 h-screen absolute">
                <Link href={"/projects"} className="text-gray-200 capitalize
            h-[20px] w-[220px] hover:text-gray-100 transition-all duration-300
            z-10 flex mt-5"><ArrowLeft />voltar a tela de projetos</Link>

                {/**/}

                <div className="flex h-[500px] md:items-start md:flex-col-reverse md:justify-evenly sm:flex sm:flex-col sm:justify-around
            xl:justify-between xl:flex-row xl:items-center">
                    <div>
                        <h1 className="text-white text-[30px] font-bold 
                    capitalize">Text Convert</h1>
                        <div className="flex absolute gap-2">
                            <SiCss3 className="text-gray-300 ml-[5px] hover:text-main hover:text-[35px]
                        transition-all duration-300 text-[30px] relative md:top-[20px] xl:top-[50px] sm:top-[30px]" title="Css3"/>
                            <SiJavascript className="text-gray-300 ml-[5px] hover:text-main hover:text-[35px]
                        transition-all duration-300 rounded-[3px] text-[30px] relative md:top-[20px] xl:top-[50px] sm:top-[30px]" title="JavaScript"/>
                            <GoDeviceDesktop className="text-gray-300 ml-[5px] hover:text-main hover:text-[35px]
                        transition-all duration-300 rounded-[3px] text-[30px] relative md:top-[20px] xl:top-[50px] sm:top-[30px]" title="Desktop"/>
                        </div>
                    </div>


                    <div className="bg-[url(../assets/text-convert.png)] bg-cover sm:w-[285px] sm:h-[180px] md:w-[650px] md:h-[300px]
                    xl:w-[700px] xl:h-[350px] xl:mr-10 2xl:mr-[200px] rounded-[20px] transition-all duration-500 
                    hover:drop-shadow-[0_0_20px_#d78b17] border border-main xl:hover:w-[720px] sm:hover:w-[350px] md:hover:w-[680px] "/>

                </div>
            </div>
            <div className="md:w-[400px] sm:w-[250px] flex items-center justify-between sm:relative sm:m-auto sm:mb-20">

                <Link href={"https://text-convert-henna.vercel.app"} target="_blank" className="text-white md:text-lg sm:text-sm font-semibold hover:text-secondary
                transition-all duration-300">Visitar Projeto</Link>

                <Link href={"https://github.com/sidgabrielmoura/text-convert"} target="_blank" className="text-white md:text-lg sm:text-sm font-semibold hover:text-secondary
                transition-all duration-300">Visitar Repositório</Link>

            </div>
        </>
    )
}