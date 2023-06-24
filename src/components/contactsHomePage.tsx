import  Link  from "next/link";
import { FaDiscord, FaLinkedin } from "react-icons/fa";

export function ContactsHomePage(){
    return(
        <div className="h-[30vh] sm:w-[100vw] xl:w-[40vw] sm:mx-auto xl:mx-10 pb-5 flex flex-col justify-center items-center">
                <div className="flex">
                    <Link href={"https://discord.gg/4hPMkwwn"} target="_blank" className="flex p-3 bg-zinc-800 rounded-full
                    hover:ml-10 transition-all duration-200 hover:drop-shadow-[0_0_20px_#358f28] xl:w-[40vw]
                    justify-center md:w-[100vw]">
                        <p className="xl:text-[20px] font-semibold
                        text-gray-200 hover:text-gray-100 transition-all
                        duration-200 md:text-[15px]">contate-me pelo discord -&gt;</p>
                        <FaDiscord className="text-[30px] text-gray-200 ml-2 hover:text-blue-600 transition-all
                        duration-200"/>
                    </Link>
                </div>

                <div className="flex mt-5">
                    <Link href={"https://www.linkedin.com/in/sid-gabriel-barbosa-moura-347474253/"} target="_blank" className="flex p-3 bg-zinc-800 rounded-full
                    hover:ml-10 transition-all duration-200 hover:drop-shadow-[0_0_20px_#358f28] xl:w-[40vw]
                    justify-center md:w-[100vw]">
                        <p className="xl:text-[20px] font-semibold
                        text-gray-200 hover:text-gray-100 transition-all
                        duration-200 md:text-[15px]">contate-me pelo linkedin -&gt;</p>
                        <FaLinkedin className="text-[30px] text-gray-200 ml-2 hover:text-blue-600 transition-all
                        duration-200"/>
                    </Link>
                </div>

            </div>
    )
}