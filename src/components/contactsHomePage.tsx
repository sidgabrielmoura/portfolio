import  Link  from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si"

export function ContactsHomePage(){
    return(
        <div className="h-[30vh] sm:w-[100vw] xl:w-[90%] sm:mx-auto xl:mx-10 md:mb-12 sm:pt-[100px] md:pt-0 flex sm:flex-col xl:flex-row sm:justify-center xl:justify-between items-center
        ">
                <div className="flex">
                    <Link href={"/gmail"} className="flex p-3 bg-zinc-800 rounded-full
                    transition-all duration-200 hover:drop-shadow-[0_0_10px_#d78b17] xl:w-[26vw]
                    justify-center md:w-[90vw] sm:w-[75vw]">
                        <p className="xl:text-[17px] font-semibold text-gray-200
                        duration-200 md:text-[15px] hover:text-gray-100 transition-all
                        sm:text-[13px]">contate-me pelo Gmail</p>
                        <SiGmail className="text-[30px] text-gray-200 ml-2 hover:text-red-600 transition-all
                        duration-200"/>
                    </Link>
                </div>

                <div className="flex xl:mt-0 sm:mt-5">
                    <Link href={"https://wa.me/+5585992295470"} target="_blank" className="flex p-3 bg-zinc-800 rounded-full
                    transition-all duration-200 hover:drop-shadow-[0_0_10px_#d78b17] xl:w-[26vw]
                    justify-center md:w-[90vw] sm:w-[75vw]">
                        <p className="xl:text-[17px] font-semibold
                        text-gray-200 hover:text-gray-100 transition-all
                        duration-200 md:text-[15px] sm:text-[13px]">contate-me pelo WhatsApp</p>
                        <FaWhatsapp className="text-[28px] text-gray-200 ml-2 hover:text-green-500 transition-all
                        duration-200"/>
                    </Link>
                </div>

            </div>
    )
}