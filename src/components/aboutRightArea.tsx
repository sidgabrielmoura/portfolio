export function AboutRightArea() {
    return (
        <section className="h-screen w-[80vw] bg-gray-950 bg-[url(../assets/bg-stars.svg)] overflow-auto
                    xl:overflow-hidden sm:w-[100vw]">

            <div className="w-100 h-screen flex flex-col px-[20px] py-[60px] sm:py-[30px] md:py-[60px]">
                <h1 className="text-[50px] sm:text-[30px] md:text-[50px] text-main capitalize font-extrabold mb-[10px]">olá!</h1>
                <p className="text-[17px] sm:text-[13px] md:text-[15px] text-white capitalize px-3 py-1 bg-gray-400 sm:w-[70px] 
                            md:w-[75px] rounded-2xl mb-[10px]">eu sou </p>
                <h1 className="text-[50px] sm:text-[30px] md:text-[50px] text-main capitalize font-extrabold mb-[20px]">sid gabriel barbosa moura</h1>
                <p className="text-[17px] sm:text-[13px] md:text-[15px] text-white capitalize px-3 py-1 bg-gray-400 sm:w-[160px] 
                            md:w-[180px] rounded-2xl mb-[10px]">e no momento tenho</p>
                <h1 className="text-[50px] sm:text-[30px] md:text-[50px] text-main capitalize font-extrabold pb-[10px]">17 anos</h1>

                <p className="text-[17px] md:text-[15px] sm:text-[13px] text-white capitalize mt-10 pb-10 ">
                    🚀sou uma pessoa proativa, esforçada e de boa convivência,<br />
                    moro em trairi no ceará e tenho muita vontade de aprender ainda mais!
                </p>
            </div>

            {/*blur*/}

            <div className="w-10 h-[300px] bg-main absolute right-0 top-[200px] my-auto 
                        rounded-full blur-full"/>

        </section>

    )
}