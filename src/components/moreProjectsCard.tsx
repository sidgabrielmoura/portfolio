import Link from "next/link";

export function MoreProjectCards() {
    return (
        <div className="sm:h-screen xl:h-[150vh] xl:w-[85vw] 2xl:w-[70vw] px-14 xl:grid-cols-3 xl:grid-rows-3 xl:gap-24 xl:grid
                sm:flex sm:flex-row sm:m-2 sm:overflow-x-auto sm:items-center xl:overflow-hidden py-14 sm:gap-5 sm:pl-4">

            <section className="w-[300px] h-[300px] border-2 border-gray-200 rounded-[20px]
                    flex hover:w-[340px] transition-all duration-300 cursor-pointer
                    bg-[url(../assets/text-convert.png)] hover:drop-shadow-[0_0_10px_#d78b17] bg-contain bg-no-repeat justify-center">

                <div className="px-[10px] mt-[200px] flex flex-col h-[80px] w-[300px] text-center">
                    <h1 className="text-white">Text Convert</h1>

                    <Link href="/projectScreen/textConvert" className="flex items-center justify-center hover:text-secondary transition-all duration-300
                            text-gray-400">Ver Mais</Link>
                </div>

            </section>

            <section className="w-[300px] h-[300px] border-2 border-gray-200 rounded-[20px]
                    flex hover:w-[340px] transition-all duration-300 cursor-pointer
                    bg-[url(../assets/fast-cube-img.png)] hover:drop-shadow-[0_0_10px_#d78b17] bg-contain bg-no-repeat justify-center">

                <div className="px-[10px] mt-[200px] flex flex-col h-[80px] w-[300px] text-center">
                    <h1 className="text-white">FastCube</h1>

                    <Link href="/projectScreen/fastCube" className="flex items-center justify-center hover:text-secondary transition-all duration-300
                            text-gray-400">Ver Mais</Link>
                </div>

            </section>

            <section className="w-[300px] h-[300px] border-2 border-gray-200 rounded-[20px]
                    flex hover:w-[340px] transition-all duration-300 cursor-pointer
                    justify-center bg-gray-600 animate-pulse xl:ml-0">

                <div className="px-[10px] mt-[200px] flex flex-col h-[80px] w-[300px] text-center">
                    <h1 className="text-white">-----</h1>

                    {/*<Link href="/projectScreen/Mar-&-sol" className="flex items-center justify-center hover:text-violet-800 transition-all duration-300
                            text-gray-400 ">Ver Mais</Link>*/}
                </div>

            </section>

            <section className="w-[300px] h-[300px] border-2 border-gray-200 rounded-[20px]
                    flex hover:w-[340px] transition-all duration-300 cursor-pointer
                    justify-center bg-gray-600 animate-pulse xl:ml-0">

                <div className="px-[10px] mt-[200px] flex flex-col h-[80px] w-[300px] text-center">
                    <h1 className="text-white">-----</h1>

                    {/*<Link href="/projectScreen/Mar-&-sol" className="flex items-center justify-center hover:text-violet-800 transition-all duration-300
                            text-gray-400 ">Ver Mais</Link>*/}
                </div>

            </section>

            <section className="w-[300px] h-[300px] border-2 border-gray-200 rounded-[20px]
                    flex hover:w-[340px] transition-all duration-300 cursor-pointer
                    justify-center bg-gray-600 animate-pulse xl:ml-0">

                <div className="px-[10px] mt-[200px] flex flex-col h-[80px] w-[300px] text-center">
                    <h1 className="text-white">-----</h1>

                    {/*<Link href="/projectScreen/Mar-&-sol" className="flex items-center justify-center hover:text-violet-800 transition-all duration-300
                            text-gray-400 ">Ver Mais</Link>*/}
                </div>

            </section>

            <section className="w-[300px] h-[300px] border-2 border-gray-200 rounded-[20px]
                    flex hover:w-[340px] transition-all duration-300 cursor-pointer
                    justify-center bg-gray-600 animate-pulse xl:ml-0">

                <div className="px-[10px] mt-[200px] flex flex-col h-[80px] w-[300px] text-center">
                    <h1 className="text-white">-----</h1>

                    {/*<Link href="/projectScreen/Mar-&-sol" className="flex items-center justify-center hover:text-violet-800 transition-all duration-300
                            text-gray-400 ">Ver Mais</Link>*/}
                </div>

            </section>

            <section className="w-[300px] h-[300px] border-2 border-gray-200 rounded-[20px]
                    flex hover:w-[340px] transition-all duration-300 cursor-pointer
                    justify-center bg-gray-600 animate-pulse xl:ml-0">

                <div className="px-[10px] mt-[200px] flex flex-col h-[80px] w-[300px] text-center">
                    <h1 className="text-white">-----</h1>

                    {/*<Link href="/projectScreen/Mar-&-sol" className="flex items-center justify-center hover:text-violet-800 transition-all duration-300
                            text-gray-400 ">Ver Mais</Link>*/}
                </div>

            </section>

            <section className="w-[300px] h-[300px] border-2 border-gray-200 rounded-[20px]
                    flex hover:w-[340px] transition-all duration-300 cursor-pointer
                    justify-center bg-gray-600 animate-pulse xl:ml-0">

                <div className="px-[10px] mt-[200px] flex flex-col h-[80px] w-[300px] text-center">
                    <h1 className="text-white">-----</h1>

                    {/*<Link href="/projectScreen/Mar-&-sol" className="flex items-center justify-center hover:text-violet-800 transition-all duration-300
                            text-gray-400 ">Ver Mais</Link>*/}
                </div>

            </section>

            <section className="w-[300px] h-[300px] border-2 border-gray-200 rounded-[20px]
                    flex hover:w-[340px] transition-all duration-300 cursor-pointer
                    justify-center bg-gray-600 animate-pulse xl:ml-0">

                <div className="px-[10px] mt-[200px] flex flex-col h-[80px] w-[300px] text-center">
                    <h1 className="text-white">-----</h1>

                    {/*<Link href="/projectScreen/Mar-&-sol" className="flex items-center justify-center hover:text-violet-800 transition-all duration-300
                            text-gray-400 ">Ver Mais</Link>*/}
                </div>

            </section>
        </div>
    )
}