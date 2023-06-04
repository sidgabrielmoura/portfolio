import { Footer } from "@/components/footer";
import { GameHome } from "@/components/game-home";
import { NavBar } from "@/components/navBar";
import Link from "next/link";

export default function Home() {
  return (
    <><NavBar></NavBar>
      <main className="flex w-screen h-screen">

        {/*left*/} 

        <div className="w-[60vw] pt-5 bg-gray-900 bg-[url(../assets/bg-stars.svg)] bg-cover">

          {/*blur*/} 

          <div className="w-[400px] h-10 bg-green-500 relative bottom-7 m-auto rounded-full blur-full" />
          
          {/*text*/}

          <div className="pl-[40px]">
            <h1 className="text-[30px] text-green-600 font-extrabold capitalize">Sid Gabriel Barbosa moura</h1>
            <p className="font-sans text-white">front-end developer</p>
          </div>

          {/*game*/}

          <GameHome></GameHome>

        </div>

        {/*right*/}

        <div className="w-[40vw] bg-[url(../assets/predios.avif)] bg-cover hover:w-[50vw] transition-all duration-500"/>
 
      </main>

      {/*footer*/}

      <Footer></Footer></>
  )

}
