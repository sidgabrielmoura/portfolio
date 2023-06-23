import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navBar";
import { ProjectCards } from "@/components/projectCards";
import Link from "next/link";

export default function Projects(){
    return (
        <>
           <NavBar></NavBar>
           <main className="flex w-screen h-screen px-[20px] justify-around items-center bg-gray-950 bg-[url(../assets/bg-stars.svg)] bg-contain
           sm:flex-col sm:px-[10px] overflow-auto md:flex-row">

            {/*blur*/}

                <div className="w-[500px] fixed h-10 bg-green-500 bottom-0 m-auto rounded-full blur-[100px]" />
            
            {/*cards*/}

                <ProjectCards/>


            {/*see more button*/}

            </main>
            <div className="w-screen bg-gray-950 flex justify-center p-[10px]">
                <Link href={"/moreProjects"} className="text-white z-10 px-[20px] py-[10px] border rounded-lg text-sm border-gray-400 hover:text-green-500
                transition-all duration-300 hover:px-[60px]">Ver Mais</Link>
            </div>
           <Footer></Footer>
        </>
    )
}