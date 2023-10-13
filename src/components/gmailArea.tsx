import { ArrowLeft } from "lucide-react";
import Link from "next/link";


export function Gmail(){
    return(
        <>

            <Link href={"/"} className="absolute top-0 left-0 m-10
            text-gray-200 capitalize h-[20px] w-[230px] hover:text-gray-100 transition-all 
            duration-300 sm:z-10 flex"><ArrowLeft />voltar a tela principal</Link>

        {/*blur*/}

            <div className="w-[75vw] fixed h-[10vh] bg-secondary top-10 m-auto rounded-full blur-[180px]" />
            <div className="w-[75vw] fixed h-[10vh] bg-purple-500 bottom-0 m-auto rounded-full blur-[200px]"/>

        {/*formulário*/}
            
            <form action="https://formsubmit.co/sidgabrielmoura40@gmail.com" method="post" className="xl:w-[80vw] xl:h-[60vh] flex
            xl:justify-center xl:gap-2 xl:flex-row sm:flex-col-reverse md:w-[80vw] md:h-[70vh] md:items-center sm:mt-10 md:mt-0">

                <section className="xl:w-[50%] md:w-[100%] h-[100%] sm:flex-col flex md:flex-col gap-3 xl:justify-between 
                md:mt-10 xl:mt-0">

                    <div className="w-[100%] flex sm:flex-col md:flex-row xl:flex-col gap-3 sm:pb-10 md:pb-0">

                        <input type="text" name="name" id="" required className="h-12 bg-transparent border border-gray-300 pl-5 
                        text-white w-[100%]" placeholder="digite seu nome" />
                        <input type="email" name="email" required className="h-12 bg-transparent border border-gray-300 pl-5
                        text-white w-[100%]" placeholder="digite seu email" />

                    </div>

                    <button type="submit" className="bg-green-500 rounded-[10px] h-14 animate-pulse
                    text-white font-semibold">Enviar</button>

                </section>

                <section className="xl:w-[50%] xl:h-[100%] md:w-[100%] md:h-[50%] xl:mt-0 md:mt-10" >

                    <textarea name="message" id="txtArea" cols={30} rows={10} required className="
                    xl:w-[100%] xl:h-[100%] bg-transparent border border-gray-300 md:max-h-[100%] text-white py-3 px-5
                    md:min-h-[100%] md:w-[100%] md:h-[100%] sm:max-h-[50vh] sm:min-h-[50vh]" placeholder="conteúdo"/>

                </section>


                {/*API configurations*/}

                <input type="hidden" name="_subject" value={"Novo Contato"} />
                <input type="text" name="_honey" className="hidden"/>
                <input type="hidden" name="_captcha" value={"false"}/>

            </form>
        </>
    )
}