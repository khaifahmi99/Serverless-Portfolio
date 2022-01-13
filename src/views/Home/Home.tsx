const Home = (): JSX.Element => {
    return (
        <div className="max-w-7xl mx-auto z-20 ">
            <div className="flex flex-row">
                <div className="lg:w-[60%] md:w-full pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
                    <div className="mt-10 mx-autopx-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                        <div className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <h2 className="text-5xl">[Job Title]</h2>{' '}
                            <h2 className="text-indigo-600 text-6xl">[First] [Last Name]</h2>
                        </div>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            [Brief Description Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.]
                        </p>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <div className="rounded-md shadow">
                            <a
                                href="https://github.com"
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                            >
                                GITHUB
                            </a>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                            <a
                                href="https://twitter.com"
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                            >
                                TWITTER
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='items-center justify-center hidden lg:flex'>
                    <div className="rounded-xl shadow-xl bg-indigo-500 h-80 w-80 flex items-center">
                        <p className="text-white text-center text-4xl italic p-12">"Lorem ipsum dolor sit amet, consectetur adip!"</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;