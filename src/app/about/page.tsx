import { AboutPerfilArea } from "@/components/aboutPerfilArea";
import { AboutRightArea } from "@/components/aboutRightArea";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navBar";



export default function About(){
    return(
        <>
            <NavBar/>
            
                <main className="flex w-[100%] h-screen sm:flex-col xl:flex-row">

                    {/*perfil left*/}

                    <AboutPerfilArea/>
                    
                    {/*right*/}

                    <AboutRightArea/>
                </main>
            
            <Footer/>
        </>
    )
}