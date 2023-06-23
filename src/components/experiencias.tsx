import Link from "next/link";
import { FaDiscord, FaLinkedin } from 'react-icons/fa'

export function TempoDeExperiencia() {
    return (
        <main className="flex ">

            <div className="text-white mt-[100px] pl-[40px] sm:pl-[20px] sm:pb-5 w-[12vw]">
                <h1 className="text-[100px] text-green-600 font-bold">2</h1>
                <p className="text-[17px] text-gray-200">anos de estudos</p>
            </div>
            <div className="h-[30vh] w-[30vw] mt-[100px] flex flex-col justify-center items-center">
                <div className="flex">
                    <Link href={"https://discord.gg/4hPMkwwn"} target="_blank" className="flex p-3 bg-zinc-800 rounded-full
                    hover:scale-[1.14] transition-all duration-200">
                        <p className="text-[20px] font-semibold
                        text-gray-200 hover:text-gray-100 transition-all
                        duration-200">contate-me pelo discord -&gt;</p>
                        <FaDiscord className="text-[30px] text-gray-200 ml-2 hover:text-blue-600 transition-all
                        duration-200"/>
                    </Link>
                </div>

                <div className="flex mt-5">
                    <Link href={"https://www.linkedin.com/in/sid-gabriel-barbosa-moura-347474253/"} target="_blank" className="flex p-3 bg-zinc-800 rounded-full
                    hover:scale-[1.14] transition-all duration-200">
                        <p className="text-[20px] font-semibold
                        text-gray-200 hover:text-gray-100 transition-all
                        duration-200">contate-me pelo linkedin -&gt;</p>
                        <FaLinkedin className="text-[30px] text-gray-200 ml-2 hover:text-blue-600 transition-all
                        duration-200"/>
                    </Link>
                </div>

            </div>
        </main>
    )
}