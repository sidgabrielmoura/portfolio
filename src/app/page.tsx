import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navBar";
import { HomePageLeftArea } from "@/components/homePageLeftArea";



export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <main className="flex w-screen h-screen">

        {/*left*/}

        <HomePageLeftArea />

        {/*right*/}

        <div className="w-[40vw] bg-[url(../assets/space.jpg)] bg-cover hover:w-[50vw] transition-all duration-500 bg-center
        opacity-90 sm:hidden md:block md:w-[30vw] md:hover:w-[35vw] xl:w-[40vw] xl:hover:w-[45vw]"/>

      </main>
      <Footer></Footer>
    </>
  )

}
