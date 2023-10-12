import { DiHtml5, DiCss3, DiBootstrap, DiReact, DiJsBadge, DiGit } from "react-icons/di";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

export function Icons() {
  return (
    <div className="pl-[40px] pr-[40px] sm:mt-[50px] md:mt-[20px] xl:mt-[50px] sm:pl-[20px]
    md:pl-[50px]">
      <h1 className="cursor-default md:text-[50px] sm:text-[25px] xl:text-[40px] text-main font-bold capitalize">Sid Gabriel Barbosa moura</h1>
      <p className="cursor-default font-sans text-white xl:text-[18px] md:text-[20px]">front-end developer</p>

      <section className="flex ">

        <div className="w-[38px] h-[34px]">
          <DiHtml5 className="text-gray-300 hover:text-main hover:text-[33px]
                    transition-all duration-300 text-[30px] md:text-[30px] xl:text-[30px] relative top-[50px]" title="Html5"/>
        </div>
        <div className="w-[38px] h-[34px]">
          <DiCss3 className="text-gray-300 ml-[5px] hover:text-main hover:text-[33px]
                    transition-all duration-300 text-[30px] relative top-[50px] xl:text-[30px] md:text-[30px]" title="Css3"/>
        </div>
        <div className="w-[38px] h-[34px]">
          <DiBootstrap className="text-gray-300 ml-[5px] hover:text-main hover:text-[33px]
                  transition-all duration-300 text-[30px] relative top-[50px] xl:text-[30px] md:text-[30px]" title="Bootstrap"/>
        </div>
        <div className="w-[38px] h-[34px]">
          <DiReact className="text-gray-300 ml-[5px] hover:text-main hover:text-[33px]
                    transition-all duration-300 text-[30px] relative top-[50px] xl:text-[30px] md:text-[30px]" title="React"/>
        </div>
        <div className="w-[38px] h-[34px]">
          <DiJsBadge className="text-gray-300 ml-[5px] hover:text-main hover:text-[33px]
                    transition-all duration-300 text-[30px] relative top-[50px] xl:text-[30px] md:text-[30px]" title="JavaScript"/>
        </div>
        <div className="w-[38px] h-[34px]">
          <DiGit className="text-gray-300 ml-[5px] hover:text-main hover:text-[33px]
                    transition-all duration-300 text-[30px] relative top-[50px] xl:text-[30px] md:text-[30px]" title="Git"/>
        </div>
        <div className="w-[38px] h-[34px]">
          <SiTailwindcss className="text-gray-300 ml-[5px] hover:text-main hover:text-[33px]
                    transition-all duration-300 text-[30px] relative top-[50px] xl:text-[30px] md:text-[30px]" title="Tailwindcss"/>
        </div>
        <div className="w-[38px] h-[34px]">
          <SiNextdotjs className="text-gray-300 ml-[5px] hover:text-main hover:text-[33px]
                    transition-all duration-300 text-[30px] relative top-[50px] xl:text-[30px] md:text-[30px]" title="NextJs"/>
        </div>

      </section>

    </div>
  )
}