import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navBar";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function Contatos() {
    return (
        <>
            <NavBar></NavBar>
            <main className="flex w-screen h-screen px-[20px] justify-around items-center bg-gray-900">

                {/*blur*/}

                <div className="w-10 absolute h-[500px] bg-green-500 left-8 m-auto rounded-full blur-[115px]" />

                {/*left*/}

                <div className="bg-[url(../assets/bg-stars.svg)] bg-cover flex items-center 
                w-[55vw] p-5 justify-start absolute left-0 h-screen">
                    <main className="">
                        <h1 className="text-white text-[30px]">Contate-me <MoveRight></MoveRight></h1>
                        <section className="flex flex-col capitalize">

                            <label className="mt-4 text-white">email:</label>
                            <input type="email" className="w-[400px] h-10 rounded-lg bg-transparent
                            outline-none border-2 text-gray-200 px-5 border-gray-400 hover:border-green-500
                            transition-all duration-200"/>

                            <label className="mt-4 text-white">conteudo:</label>
                            <textarea className="w-[400px] min-h-[100px] max-h-[200px] py-5 rounded-lg bg-transparent
                            outline-none border-2 text-gray-200 px-5 border-gray-400 hover:border-green-500
                            transition-all duration-200"/>

                            <Link href={""} className="mt-4 text-white w-[200px] text-center px-4 py-3.5 rounded-xl bg-green-600
                            hover:bg-green-700 transition-all duration-300 hover:translate-x-3">Enviar</Link>
                        </section>
                    </main>
                </div>

                {/*right*/}

                <section className=" w-[45vw] h-screen bg-[url(contatos/predio.avif)] bg-cover absolute right-[-17px] hover:w-[50vw]
                transition-all duration-500 hover:drop-shadow-[0_0_40px_#1c7f13]"/>
            </main>
            <Footer></Footer>
        </>
    )
}