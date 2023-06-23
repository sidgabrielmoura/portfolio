import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/footer";
import { MoreProjectCards } from "@/components/moreProjectsCard";

export default function MoreProjects(){
    return(
        <>
            <main className="flex w-screen sm:h-screen xl:h-[200vh] px-[20px] justify-around items-center bg-gray-950 bg-[url(../assets/bg-stars.svg)] bg-contain">
                
                <Link href={"/projects"} className="absolute top-0 left-0 m-10
                text-gray-200 capitalize h-[20px] w-[200px] hover:text-gray-100 transition-all 
                duration-300 sm:z-10"><ArrowLeft />voltar a tela de projetos</Link>

                {/*blur*/}

                <div className="w-[500px] fixed h-10 bg-green-500 top-[50px] m-auto rounded-full blur-[100px]" />

                {/*cards*/}
                
                <MoreProjectCards/>

            </main>
            <Footer></Footer>
        </>
    )
}