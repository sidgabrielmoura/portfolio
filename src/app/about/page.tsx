import { AboutLeftArea } from "@/components/aboutLeftArea";
import { AboutRightArea } from "@/components/aboutRightArea";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navBar";



export default function About(){
    return(
        <>
            <NavBar/>
            
                <main className="flex w-screen h-screen sm:flex-col xl:flex-row">

                    {/*perfil left*/}

                    <AboutLeftArea/>
                    
                    {/*right*/}

                    <AboutRightArea/>
                </main>
            
            <Footer/>
        </>
    )
}