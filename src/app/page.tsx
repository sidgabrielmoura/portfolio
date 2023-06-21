import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navBar";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

import { DiHtml5, DiReact, DiCss3, DiJsBadge,
DiGit, DiBootstrap } from "react-icons/di"

import { SiTailwindcss, SiNextdotjs } from "react-icons/si"
import { TempoDeExperiencia } from "@/components/experiencias";



export default function Home() {
  return (
    <><NavBar></NavBar>
      <main className="flex w-screen h-screen">

        {/*left*/} 

        <div className="w-[60vw] pt-5 bg-gray-900 bg-[url(../assets/bg-stars.svg)] bg-cover
        flex flex-col sm:w-[100vw] md:w-[70vw] xl:w-[60vw] h-screen">

          {/*blur*/}

          <div className="w-[400px] h-10 bg-violet-700 absolute top-[100px] m-auto rounded-full blur-full" />

          <div className="">
            
              {/*text*/}

              <div className="pl-[40px] pr-[40px] sm:mt-[50px] md:mt-[150px] xl:mt-[50px] sm:pl-[20px]"> 
                <h1 className="text-[30px] xl:text-[40px] text-violet-800 font-bold capitalize">Sid Gabriel Barbosa moura</h1>
                <p className="font-sans text-white xl:text-[18px]">front-end developer</p>

                <section className="flex ">

                  <DiHtml5 className="text-gray-300 hover:text-violet-800 hover:text-[35px]
                  transition-all duration-300 text-[30px] relative top-[50px]"/>
                  <DiCss3 className="text-gray-300 ml-[5px] hover:text-violet-800 hover:text-[35px]
                  transition-all duration-300 text-[30px] relative top-[50px]"/>
                  <DiBootstrap className="text-gray-300 ml-[5px] hover:text-violet-800 hover:text-[35px]
                  transition-all duration-300 text-[30px] relative top-[50px]"/>
                  <DiReact className="text-gray-300 ml-[5px] hover:text-violet-800 hover:text-[35px]
                  transition-all duration-300 text-[30px] relative top-[50px]"/>
                  <DiJsBadge className="text-gray-300 ml-[5px] hover:text-violet-800 hover:text-[35px]
                  transition-all duration-300 text-[30px] relative top-[50px]"/>
                  <DiGit className="text-gray-300 ml-[5px] hover:text-violet-800 hover:text-[35px]
                  transition-all duration-300 text-[30px] relative top-[50px]"/>
                  <SiTailwindcss className="text-gray-300 ml-[5px] hover:text-violet-800 hover:text-[35px]
                  transition-all duration-300 text-[30px] relative top-[50px]"/>
                  <SiNextdotjs className="text-gray-300 ml-[5px] hover:text-violet-800 hover:text-[35px]
                  transition-all duration-300 text-[30px] relative top-[50px]"/>

                </section>

              </div>

          </div>

          {/*experience*/}

          <TempoDeExperiencia/>

        </div>

        {/*right*/}

        <div className="w-[40vw] bg-[url(../assets/space.jpg)] bg-cover hover:w-[50vw] transition-all duration-500 bg-center
        opacity-90 sm:hidden md:block md:w-[30vw] md:hover:w-[35vw] xl:w-[40vw] xl:hover:w-[45vw]"/>
 
      </main>

      {/*footer*/}

      <Footer></Footer></>
  )

}
