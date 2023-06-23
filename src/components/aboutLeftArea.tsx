import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export function AboutLeftArea() {
    return (
        <>
            <section className="xl:h-screen w-[20vw] relative bg-gray-900 py-[60px] px-[20px] overflow-auto
                    xl:overflow-hidden xl:w-[40vw] sm:w-[100vw] sm:h-[28vh] sm:overflow-hidden sm:flex
                    sm:flex-row sm:py-[30px] md:items-center md:justify-between xl:flex-col xl:justify-center">

                <div className="h-[200px] sm:w-[100px] md:w-[150px] md:h-[200px] flex justify-center sm:justify-start sm:mt-0 md:justify-center
                        ">

                    <div className="rounded-full bg-[url(../assets/perfil-image.jpeg)]
                            bg-cover bg-center border-[2px] border-gray-400 drop-shadow-[0_0_15px_#358f28] sm:w-[100px]
                            sm:h-[100px] md:w-[250px] md:h-[200px]"/>

                    <div className="w-[30px] h-[30px] rounded-full bg-green-600 absolute
                            border-[1px] border-gray-400 animate-pulse sm:w-[25px] sm:h-[25px] md:w-[30px] md:h-[30px]"/>

                </div>


                <div className="flex sm:w-[400px] md:w-[400px] xl:w-[250px] h-[100px] p-[20px] justify-between mt-[150px] sm:mt-0 md:mt-[150px]">

                    <a href="https://github.com/sidgabrielmoura" target={"_blank"}>
                        <FaGithub className="text-white transition-all duration-300 cursor-pointer sm:text-[30px] md:text-[40px] xl:text-[35px] hover:text-green-600
                                "/>
                    </a>
                    <a href="https://linkedin.com/in/sid-gabriel-barbosa-moura-347474253" target={"_blank"}>
                        <FaLinkedin className="text-white transition-all duration-300 cursor-pointer sm:text-[30px] md:text-[40px] xl:text-[35px] hover:text-green-600
                                "/>
                    </a>
                    <a href="https://instagram.com/xgabriel._.mourax/" target={"_blank"}>
                        <FaInstagram className="text-white transition-all duration-300 cursor-pointer sm:text-[30px] md:text-[40px] xl:text-[35px] hover:text-green-600
                                "/>
                    </a>

                </div>

            </section>
        </>
    )
}