import { DiHtml5, DiCss3, DiBootstrap, DiReact, DiJsBadge, DiGit } from "react-icons/di";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

export function Icons() {
  return (
    <div className="pl-[40px] pr-[40px] sm:mt-[50px] md:mt-[150px] xl:mt-[50px] sm:pl-[20px]">
      <h1 className="text-[30px] xl:text-[40px] text-green-500 font-bold capitalize">Sid Gabriel Barbosa moura</h1>
      <p className="font-sans text-white xl:text-[18px]">front-end developer</p>

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
  )
}