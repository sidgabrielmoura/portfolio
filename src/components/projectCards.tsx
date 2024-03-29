import Link from "next/link";

export function ProjectCards() {
	return (
		<>
			
				<section className="w-[300px] h-[300px] border-2 border-gray-200 rounded-[20px]
					flex hover:w-[380px] transition-all duration-300 cursor-pointer
					bg-[url(../assets/text-convert.png)] hover:drop-shadow-[0_0_40px_#d78b17] bg-contain bg-no-repeat justify-center
					sm:w-[200px] sm:hover:w-[230px] sm:h-[200px] sm:mt-14 md:mt-0 xl:w-[300px] xl:h-[300px] xl:hover:w-[330px]">

					<div className="px-[10px] mt-[200px] flex flex-col h-[80px] w-[300px] text-center sm:h-[80px]
						sm:mt-[130px] md:mt-[140px] xl:mt-[180px]">
						<h1 className="text-white">Text convert</h1>

						<Link href="/projectScreen/textConvert" className="flex items-center justify-center hover:text-main transition-all duration-300
							text-gray-400">Ver Mais</Link>
					</div>

				</section>
			

			
				<section className="w-[300px] h-[300px] border-2 border-gray-200 rounded-[20px]
					flex hover:w-[380px] transition-all duration-300 cursor-pointer
					bg-[url(../assets/fast-cube-img.png)] hover:drop-shadow-[0_0_40px_#d78b17] bg-contain bg-no-repeat justify-center
					sm:w-[200px] sm:hover:w-[230px] sm:h-[200px] md:mt-0 xl:w-[300px] xl:h-[300px] xl:hover:w-[330px]">

					<div className="px-[10px] mt-[200px] flex flex-col h-[80px] w-[300px] text-center sm:mt-[130px]
							md:mt-[140px] xl:mt-[180px]">
						<h1 className="text-white">fastCube</h1>

						<Link href="/projectScreen/fastCube" className="flex items-center justify-center hover:text-main transition-all duration-300
						text-gray-400 ">Ver Mais</Link>
					</div>

				</section>
			
			
			
				<section className="w-[300px] h-[300px] border-2 border-gray-200 rounded-[20px]
						flex hover:w-[340px] transition-all duration-300 cursor-pointer
						justify-center bg-gray-600 animate-pulse sm:w-[200px] sm:hover:w-[230px] sm:h-[200px] md:mt-0
						xl:w-[300px] xl:h-[300px] xl:hover:w-[330px] ">

					<div className="px-[10px] mt-[200px] flex flex-col h-[80px] w-[300px] text-center sm:mt-[130px]
							md:mt-[140px] xl:mt-[180px]">
						<h1 className="text-white">-----</h1>

						{/*<Link href="/projectScreen/Mar-&-sol" className="flex items-center justify-center hover:text-green-500 transition-all duration-300
								text-gray-400 ">Ver Mais</Link>*/}
					</div>

				</section>
			
		</>
	)
}