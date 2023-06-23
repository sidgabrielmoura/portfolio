import { Footer } from "@/components/footer";
import { ArrowLeft } from "lucide-react";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si"
import { DiReact } from "react-icons/di"

import Link from "next/link";
import { MarESolInfo } from "@/components/marESolInformations";

export default function MarESol() {
    return (
        <>
            <main className="flex flex-col w-[100vw]] h-[100vh] bg-gray-950 bg-[url(../assets/bg-stars.svg)]
            bg-contain pt-3">
                
                {/*blur*/}
                <div className="w-screen flex justify-center">
                    <div className="md:w-[700px] sm:w-screen h-10 bg-green-600 absolute top-[50px] mx-auto rounded-full blur-full" />
                </div>

                
                <MarESolInfo/>

            </main>
            <Footer></Footer>
        </>
    )
}