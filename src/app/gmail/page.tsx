import { Footer } from "@/components/footer";
import { Gmail } from "@/components/gmailArea";


export default function GmailArea(){
    return(
        <>
            <main className="w-[100%] h-[100vh] bg-gray-950 bg-[url(../assets/bg-stars.svg)] bg-cover
            flex justify-center items-center flex-col">
                <Gmail/> 
            </main>
            <Footer/>
        </>
    )
}