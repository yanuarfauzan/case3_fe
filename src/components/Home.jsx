import Main from "./layout/Main";

const Home = () => {
    return (
        <>
            <Main>
                <section>
                    <div className="md:flex py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                        <div className="md:flex-1 items-center dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8 content-center">
                            <h1 className="text-dark-900 dark:text-dark text-3xl md:text-5xl font-extrabold mb-8">
                                Anda lapar? ayo mampir di warmindo engkoss!!
                            </h1>
                            <a
                                href="menu.html"
                                className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                            >
                                Pergi ke menu
                                <svg
                                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                            </a>
                        </div>
                        <div className="md:flex-1">
                            <img src="/assets/img/nasi_goreng.png" alt="" />
                        </div>
                    </div>

                    <div className="md:flex justify-between max-w-screen-xl mx-auto py-8 px-4 gap-4">
                        <div className="w-1/2 md:flex justify-start gap-4">
                            <div className="card-menu flex-col justify-between items-center gap-2 p-4">
                                <div className="relative h-32 text-center">
                                    <img
                                        src="/assets/img/kwetiaw.png"
                                        alt="foto menu kwetiau"
                                        className="w-64 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4"
                                    />
                                </div>
                                <div className="mb-4">
                                    <div className="flex justify-between gap-4 max-w-sm p-4">
                                        <div className="flex-col">
                                            <p className="mb-3 font-normal text-dark-700 dark:text-white-400">
                                                <strong>Mie kwetiaw spesial</strong>
                                            </p>
                                            <p className="mb-3 font-normal text-gray-900 dark:text-gray-900">
                                                Kwetiau pipih digoreng dengan pilihan daging atau seafood.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <a
                                        href="#"
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-full bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                                    >
                                        <i className="bi bi-heart text-2xl"></i>
                                    </a>
                                    <span>
                                        <strong>Rp 50.000-,</strong>
                                    </span>
                                    <a
                                        href="#"
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-full bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                                    >
                                        <i className="bi bi-cart text-2xl"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="card-menu flex-col justify-between items-center gap-2 p-4">
                                <div className="relative h-32 text-center">
                                    <img
                                        src="/assets/img/ayam_geprek.png"
                                        alt="foto menu ayam geprek"
                                        className="w-64 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4"
                                    />
                                </div>
                                <div className="mb-4">
                                    <div className="flex justify-between gap-4 max-w-sm p-4">
                                        <div className="flex-col">
                                            <p className="mb-3 font-normal text-dark-700 dark:text-white-400">
                                                <strong>Ayam Geprek</strong>
                                            </p>
                                            <p className="mb-3 font-normal text-gray-900 dark:text-gray-900">
                                                Ayam yang digeprek dengan sambal khas.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <a
                                        href="#"
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-full bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                                    >
                                        <i className="bi bi-heart text-2xl"></i>
                                    </a>
                                    <span>
                                        <strong>Rp 50.000-,</strong>
                                    </span>
                                    <a
                                        href="#"
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-full bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                                    >
                                        <i className="bi bi-cart text-2xl"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="content-center w-1/2 p-4">
                            <h2 className="text-dark-900 dark:text-dark text-3xl md:text-5xl font-extrabold mb-2">
                                Menyediakan berbagai hidangan!!
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui itaque magni, illo amet esse iure
                                facere eum alias soluta rem fugiat impedit cum sint, tempore quam ea harum incidunt repellendus?
                            </p>
                        </div>
                    </div>

                    <div className="md:flex justify-between max-w-screen-xl mx-auto py-8 px-4 gap-4 mb-8">
                        <div className="content-center w-1/2 p-4">
                            <h2 className="text-dark-900 dark:text-dark text-3xl md:text-5xl font-extrabold mb-2">
                                Menyediakan berbagai indomie !!
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui itaque magni, illo amet esse iure
                                facere eum alias soluta rem fugiat impedit cum sint, tempore quam ea harum incidunt repellendus?
                            </p>
                        </div>

                        <div className="flex justify-center w-1/2">
                            <div className="relative card-menu w-80 h-80 rounded-full">
                                <img
                                    src="/assets/img/indomie_goreng.png"
                                    alt="foto indomie goreng"
                                    className="absolute top-0 left-1/2 w-40 transform -translate-x-1/2 -translate-y-12"
                                />
                                <img
                                    src="/assets/img/indomie_rebus.png"
                                    alt="foto indomie rebus"
                                    className="absolute bottom-0 left-1/2 w-48 transform -translate-x-1/2 translate-y-14"
                                />
                                <img
                                    src="/assets/img/indomie_nyemek.png"
                                    alt="foto indomie nyemek"
                                    className="absolute top-1/2 left-0 w-40 transform -translate-x-12 -translate-y-1/2"
                                />
                                <img
                                    src="/assets/img/indomie_goreng2.png"
                                    alt="foto indomie goreng"
                                    className="absolute top-1/2 right-0 w-40 transform translate-x-12 -translate-y-1/2"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </Main>
        </>
    )
}

export default Home;