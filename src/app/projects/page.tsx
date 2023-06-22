import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navBar";
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

                <section className="w-[300px] h-[300px] border-2 border-gray-200 rounded-[20px]
                flex hover:w-[380px] transition-all duration-300 cursor-pointer
                bg-[url(../assets/Mar&Sol-image.png)] hover:drop-shadow-[0_0_40px_#358f28] bg-contain bg-no-repeat justify-center
                sm:w-[200px] sm:hover:w-[230px] sm:h-[200px] sm:mt-56 md:mt-0 xl:w-[250px] xl:h-[250px] xl:hover:w-[300px]">

                    <div className="px-[10px] mt-[200px] flex flex-col h-[80px] w-[300px] text-center sm:h-[80px]
                    sm:mt-[130px] md:mt-[140px] xl:mt-[180px]">
                        <h1 className="text-white">Mar & Sol</h1>

                        <Link href="/projectScreen/Mar-&-sol" className="flex items-center justify-center hover:text-green-500 transition-all duration-300
                        text-gray-400">Ver Mais</Link>
                    </div>

                </section>

                <section className="w-[300px] h-[300px] border-2 border-gray-200 rounded-[20px]
                    flex hover:w-[340px] transition-all duration-300 cursor-pointer
                    justify-center bg-gray-600 animate-pulse sm:w-[200px] sm:hover:w-[230px] sm:h-[200px] sm:mt-10 md:mt-0
                    xl:w-[250px] xl:h-[250px] xl:hover:w-[300px]" >

                        <div className="px-[10px] mt-[200px] flex flex-col h-[80px] w-[300px] text-center sm:mt-[130px]
                        md:mt-[140px] xl:mt-[180px]">
                            <h1 className="text-white">-----</h1>

                            {/*<Link href="/projectScreen/Mar-&-sol" className="flex items-center justify-center hover:text-violet-800 transition-all duration-300
                            text-gray-400 ">Ver Mais</Link>*/}
                        </div>

                    </section>


                    <section className="w-[300px] h-[300px] border-2 border-gray-200 rounded-[20px]
                    flex hover:w-[340px] transition-all duration-300 cursor-pointer
                    justify-center bg-gray-600 animate-pulse sm:w-[200px] sm:hover:w-[230px] sm:h-[200px] sm:mt-10 md:mt-0
                    xl:w-[250px] xl:h-[250px] xl:hover:w-[300px] ">

                        <div className="px-[10px] mt-[200px] flex flex-col h-[80px] w-[300px] text-center sm:mt-[130px]
                        md:mt-[140px] xl:mt-[180px]">
                            <h1 className="text-white">-----</h1>

                            {/*<Link href="/projectScreen/Mar-&-sol" className="flex items-center justify-center hover:text-violet-800 transition-all duration-300
                            text-gray-400 ">Ver Mais</Link>*/}
                        </div>

                    </section>


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