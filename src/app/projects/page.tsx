import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navBar";
import Link from "next/link";

export default function Projects(){
    return (
        <>
           <NavBar></NavBar>
           <main className="flex w-screen h-screen px-[20px] justify-around items-center bg-gray-900">

            {/*blur*/}

                <div className="w-[500px] absolute h-10 bg-green-500 bottom-[-130px] m-auto rounded-full blur-[115px]" />
            
            {/*cards*/}

                <section className="w-[300px] h-[350px] border-2 border-gray-200 rounded-[20px]
                flex hover:w-[380px] transition-all duration-300 cursor-pointer
                bg-[url(../assets/Mar&Sol-image.png)] hover:drop-shadow-[0_0_50px_#1c7f13] bg-contain bg-no-repeat justify-center">

                    <div className="px-[10px] mt-[240px] flex flex-col h-[80px] w-[300px] text-center">
                        <h1 className="text-white">Mar & Sol - construído em Next.js</h1>

                        <a href="" className="flex items-center justify-center hover:text-green-500 transition-all duration-300
                        text-gray-400">Visualizar projeto</a>
                    </div>

                </section>

                <section className="w-[300px] h-[350px] border-2 border-gray-200 rounded-[20px]
                flex hover:w-[380px] transition-all duration-300 cursor-pointer
                bg-[url(../assets/Mar&Sol-image.png)] hover:drop-shadow-[0_0_50px_#1c7f13] bg-contain bg-no-repeat justify-center">

                    <div className="px-[10px] mt-[240px] flex flex-col h-[80px] w-[300px] text-center">
                        <h1 className="text-white">Mar & Sol - construído em Next.js</h1>

                        <a href="" className="flex items-center justify-center hover:text-green-500 transition-all duration-300
                        text-gray-400">Visualizar projeto</a>
                    </div>

                </section>

                <section className="w-[300px] h-[350px] border-2 border-gray-200 rounded-[20px]
                flex hover:w-[380px] transition-all duration-300 cursor-pointer
                bg-[url(../assets/Mar&Sol-image.png)] hover:drop-shadow-[0_0_50px_#1c7f13] bg-contain bg-no-repeat justify-center z-10">

                    <div className="px-[10px] mt-[240px] flex flex-col h-[80px] w-[300px] text-center">
                        <h1 className="text-white">Mar & Sol - construído em Next.js</h1>

                        <a href="" className="flex items-center justify-center hover:text-green-500 transition-all duration-300
                        text-gray-400">Visualizar projeto</a>
                    </div>
                </section>

            {/*see more button*/}

            </main>
            <div className="w-screen bg-gray-900 flex justify-center p-[10px]">
                <Link href={""} className="text-white z-10 px-[20px] py-[10px] border rounded-lg text-sm border-gray-400 hover:text-green-500
                transition-all duration-300 hover:px-[60px]">Ver Mais</Link>
            </div>
           <Footer></Footer>
        </>
    )
}