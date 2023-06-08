import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navBar";

import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"

export default function About(){
    return(
        <>
            <NavBar/>
            
                <main className="flex w-screen h-screen">

                    {/*perfil left*/}

                    <section className="h-screen w-[20vw] relative bg-gray-700 py-[60px] px-[20px]">
                        
                        <div className="h-[200px] w-100 flex justify-center mt-10">

                            <div className="max-w-[250px] max-h-[250px] min-h-[150px] min-w-[150px] rounded-full bg-[url(../assets/perfil-image.jpeg)]
                            bg-cover bg-center border-[2px] border-gray-400 "/>

                            <div className="w-[30px] h-[30px] rounded-full bg-green-600 absolute
                            border-[1px] border-gray-400 animate-pulse"/>

                        </div>
                        

                        <div className="flex w-100 h-[200px] p-[20px] justify-between  mt-[150px]">
                            
                            <a href="https://github.com/sidgabrielmoura" target={"_blank"}>
                                <FaGithub className="text-white transition-all duration-300 cursor-pointer text-[30px] hover:text-[35px] hover:text-green-500
                                "/>
                            </a>
                            <a href="https://linkedin.com/in/sid-gabriel-barbosa-moura-347474253" target={"_blank"}>
                              <FaLinkedin className="text-white transition-all duration-300 cursor-pointer text-[30px] hover:text-[35px] hover:text-green-500
                                "/>  
                            </a>
                            <a href="https://instagram.com/xgabriel._.mourax/" target={"_blank"}> 
                                <FaInstagram className="text-white transition-all duration-300 cursor-pointer text-[30px] hover:text-[35px] hover:text-green-500
                                "/>
                            </a>
                           
                           
                           

                        </div>

                    </section>
                    
                    {/*right*/}

                    <section className="h-screen w-[80vw] bg-gray-900 bg-[url(../assets/bg-stars.svg)]">
                        
                        <div className="w-10 h-[300px] bg-green-500 absolute right-0 top-[200px] my-auto 
                        rounded-full blur-full"/>

                    </section>

                </main>
            
            <Footer/>
        </>
    )
}