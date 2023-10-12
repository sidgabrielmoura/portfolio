import { FastCubeInfo } from "@/components/fastCubeInfo";
import { Footer } from "@/components/footer";

export default function FastCubePage(){
    return(
        <>
            <main className="flex flex-col w-[100vw]] h-[100vh] bg-gray-950 bg-[url(../assets/bg-stars.svg)]
            bg-contain pt-3">
                
                {/*blur*/}
                <div className="w-screen flex justify-center">
                    <div className="md:w-[700px] sm:w-screen h-10 bg-main absolute top-[50px] mx-auto rounded-full blur-full" />
                </div>

                
                <FastCubeInfo/>

            </main>
            <Footer></Footer>
        </>
    )
}