import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navBar";
import { HomePageLeftArea } from "@/components/homePageLeftArea";



export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <main className="flex w-[100%] h-[100%]">

        {/*left*/}

        <HomePageLeftArea />

        {/*right*/}
        
          <div className="bg-[url(../assets/space.jpg)] bg-cover bg-center opacity-90 sm:hidden xl:block xl:w-[40vw]"/>
        

      </main>
      <Footer></Footer>
    </>
  )

}
