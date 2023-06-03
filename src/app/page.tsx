import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navBar";
import Link from "next/link";

export default function Home() {
  return (
    <><NavBar></NavBar>
      <main className="flex w-screen h-screen">

        {/*left*/}

        <div className="w-[60vw] pt-5 bg-gray-900 bg-[url(../assets/bg-stars.svg)] bg-cover">
          <div className="w-[200px] h-10 bg-green-600 relative bottom-7 m-auto rounded-full blur-full" />

          <div className="pl-[40px]">
            <h1 className="text-[30px] text-green-600 font-extrabold capitalize">Sid Gabriel Barbosa moura</h1>
            <p className="font-sans text-white">front-end developer</p>

            <Link href={""}>
              
            </Link>
          </div>

        </div>

        {/*right*/}

        <div className="w-[40vw] bg-gradient">

        </div>
      </main>

      {/*footer*/}

      <Footer></Footer></>
  )

}
