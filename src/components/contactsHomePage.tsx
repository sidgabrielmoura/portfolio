import  Link  from "next/link";
import { FaDiscord, FaWhatsapp } from "react-icons/fa";

export function ContactsHomePage(){
    return(
        <div className="h-[30vh] sm:w-[100vw] xl:w-[90%] sm:mx-auto xl:mx-10 pb-5 flex sm:flex-col xl:flex-row sm:justify-center xl:justify-between items-center
        ">
                <div className="flex">
                    <Link href={"https://discord.gg/4hPMkwwn"} target="_blank" className="flex p-3 bg-zinc-800 rounded-full
                    transition-all duration-200 hover:drop-shadow-[0_0_10px_#358f28] xl:w-[25vw]
                    justify-center md:w-[100vw]">
                        <p className="xl:text-[20px] font-semibold text-gray-200
                        duration-200 md:text-[15px]">contate-me pelo discord</p>
                        <FaDiscord className="text-[30px] text-gray-200 ml-2 hover:text-blue-600 transition-all
                        duration-200"/>
                    </Link>
                </div>

                <div className="flex xl:mt-0 sm:mt-5">
                    <Link href={"https://wa.me/+5585992295470"} target="_blank" className="flex p-3 bg-zinc-800 rounded-full
                    transition-all duration-200 hover:drop-shadow-[0_0_10px_#358f28] xl:w-[25vw]
                    justify-center md:w-[100vw]">
                        <p className="xl:text-[20px] font-semibold
                        text-gray-200 hover:text-gray-100 transition-all
                        duration-200 md:text-[15px]">contate-me pelo WhatsApp</p>
                        <FaWhatsapp className="text-[30px] text-gray-200 ml-2 hover:text-green-500 transition-all
                        duration-200"/>
                    </Link>
                </div>

            </div>
    )
}