import { Footer } from "@/components/footer";
import { GameHome } from "@/components/game-home";
import { NavBar } from "@/components/navBar";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

import { DiHtml5, DiReact, DiCss3, DiJsBadge,
DiGit, DiBootstrap } from "react-icons/di"

import { SiTailwindcss, SiNextdotjs } from "react-icons/si"

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

            <section className="flex ">
              <DiHtml5 className="text-gray-300 hover:text-green-500 hover:text-[35px]
              transition-all duration-300 text-[30px] relative top-[50px]"/>
              <DiCss3 className="text-gray-300 ml-[5px] hover:text-green-500 hover:text-[35px]
              transition-all duration-300 text-[30px] relative top-[50px]"/>
              <DiBootstrap className="text-gray-300 ml-[5px] hover:text-green-500 hover:text-[35px]
              transition-all duration-300 text-[30px] relative top-[50px]"/>
              <DiReact className="text-gray-300 ml-[5px] hover:text-green-500 hover:text-[35px]
              transition-all duration-300 text-[30px] relative top-[50px]"/>
              <DiJsBadge className="text-gray-300 ml-[5px] hover:text-green-500 hover:text-[35px]
              transition-all duration-300 text-[30px] relative top-[50px]"/>
              <DiGit className="text-gray-300 ml-[5px] hover:text-green-500 hover:text-[35px]
              transition-all duration-300 text-[30px] relative top-[50px]"/>
              <SiTailwindcss className="text-gray-300 ml-[5px] hover:text-green-500 hover:text-[35px]
              transition-all duration-300 text-[30px] relative top-[50px]"/>
              <SiNextdotjs className="text-gray-300 ml-[5px] hover:text-green-500 hover:text-[35px]
              transition-all duration-300 text-[30px] relative top-[50px]"/>
            </section>
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
