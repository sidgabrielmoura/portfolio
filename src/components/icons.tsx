import { DiHtml5, DiCss3, DiBootstrap, DiReact, DiJsBadge, DiGit } from "react-icons/di";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

export function Icons() {
  return (
    <div className="pl-[40px] pr-[40px] sm:mt-[50px] md:mt-[20px] xl:mt-[50px] sm:pl-[20px]
    md:pl-[50px]">
      <h1 className=" md:text-[50px] sm:text-[25px] xl:text-[40px] text-green-500 font-bold capitalize">Sid Gabriel Barbosa moura</h1>
      <p className="font-sans text-white xl:text-[18px] md:text-[20px]">front-end developer</p>

      <section className="flex ">

        <DiHtml5 className="text-gray-300 hover:text-green-500 hover:text-[35px]
                  transition-all duration-300 text-[30px] md:text-[40px] relative top-[50px]"/>
        <DiCss3 className="text-gray-300 ml-[5px] hover:text-green-500 hover:text-[35px]
                  transition-all duration-300 text-[30px] relative top-[50px] md:text-[40px]"/>
        <DiBootstrap className="text-gray-300 ml-[5px] hover:text-green-500 hover:text-[35px]
                  transition-all duration-300 text-[30px] relative top-[50px] md:text-[40px]"/>
        <DiReact className="text-gray-300 ml-[5px] hover:text-green-500 hover:text-[35px]
                  transition-all duration-300 text-[30px] relative top-[50px] md:text-[40px]"/>
        <DiJsBadge className="text-gray-300 ml-[5px] hover:text-green-500 hover:text-[35px]
                  transition-all duration-300 text-[30px] relative top-[50px] md:text-[40px]"/>
        <DiGit className="text-gray-300 ml-[5px] hover:text-green-500 hover:text-[35px]
                  transition-all duration-300 text-[30px] relative top-[50px] md:text-[40px]"/>
        <SiTailwindcss className="text-gray-300 ml-[5px] hover:text-green-500 hover:text-[35px]
                  transition-all duration-300 text-[30px] relative top-[50px] md:text-[40px]"/>
        <SiNextdotjs className="text-gray-300 ml-[5px] hover:text-green-500 hover:text-[35px]
                  transition-all duration-300 text-[30px] relative top-[50px] md:text-[40px]"/>

      </section>

    </div>
  )
}