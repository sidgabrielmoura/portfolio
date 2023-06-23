import { TempoDeExperiencia } from "./experiencias";
import { Icons } from "./icons";

export function HomePageLeftArea() {
  return (
    <div className="w-[60vw] pt-5 bg-gray-950 bg-[url(../assets/bg-stars.svg)] bg-cover
        flex flex-col sm:w-[100vw] md:w-[70vw] xl:w-[60vw] h-screen">

      {/*blur*/}

      <div className="w-[400px] h-10 bg-green-600 absolute top-[100px] m-auto rounded-full blur-full" />

      {/*text*/}

      <Icons />

      {/*experience*/}

      <TempoDeExperiencia />

    </div>
  )
}